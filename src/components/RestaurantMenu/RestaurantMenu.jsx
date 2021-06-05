import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import PageDataLoader from '../CustomLoader/PageDataLoader';
import Menu from '../Menu';

import './restaurant-menu.css';

const menuUrl = 'https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json';
const RestaurantMenu = () => {
    const { isLoading, error, response: menu} = useFetch(menuUrl);

    if (isLoading) {
        return (<PageDataLoader />);
    }
    // TODO handle error
    return (
        <Menu menu={menu} />
    );
}

export default RestaurantMenu
