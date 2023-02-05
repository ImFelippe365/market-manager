import { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const useItem = () => {
    const item = useContext(ItemContext);

    return item;
}

export default useItem;