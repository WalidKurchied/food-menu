import React from 'react';
import { fixPriceWithCurrency } from '../../utils/currency';

import './menu-item-option-set-item.css';

const priceFixer = fixPriceWithCurrency();

const MenuItemOptionSetItem = ({ optionSetItem }) => {
    const { Name, Price } = optionSetItem;

    return (
        <li className="menu-item-option-set-item">
            <span className="option-set-item-name">{Name}</span>
            <span className="option-set-item-price">{priceFixer(Price)}</span>
        </li>
    )
}

export default MenuItemOptionSetItem;
