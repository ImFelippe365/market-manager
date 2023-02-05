import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import api from './../services/api';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [pictureLoading, setPictureLoading] = useState(false);

    const onLogin = async (authenticatedUser) => {
        setUser(authenticatedUser);
        await AsyncStorage.setItem('@MarketManager:user', JSON.stringify(authenticatedUser))
    }

    const onLogout = async () => {
        setUser(undefined);
        await AsyncStorage.removeItem('@MarketManager:user');
    }

    const onUpdatePicture = async (picture) => {
        try {
            const data = { ...user, picture }
            await api.put(`users/${user.id}`, data)
            await AsyncStorage.setItem('@MarketManager:user', JSON.stringify(data))
            setUser(data);
            Alert.alert("Sucesso", "Sua imagem foi alterada com êxito")
        } catch (err) {
            console.warn(err.response)
            Alert.alert("Erro", "Houve um problema ao tentar atualizar sua imagem")
        } finally {
            setPictureLoading(false)
        }
    }

    const getUser = async () => {
        const response = await api.get(`users?id=${user.id}`)
        await AsyncStorage.setItem('@MarketManager:user', JSON.stringify(response.data[0]))
        setUser(response.data[0]);
    }

    const getUserLogged = async () => {
        const data = await AsyncStorage.getItem('@MarketManager:user');
        if (data) {
            setUser(JSON.parse(data));
        }
    }

    useEffect(() => {
        getUserLogged();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: onLogin,
                logout: onLogout,
                updatePicture: onUpdatePicture,
                reloadUser: getUser,
                pictureLoading,
                setPictureLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }