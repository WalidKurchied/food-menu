import React, { useEffect, useState } from 'react';
import MenuItemOptionSetItem from '../MenuItemOptionSetItem';

import './menu-item-option-set.css';

const MenuItemOptionSet = ({ optionSet, setPriceWithMasterOptionEnabled }) => {
    let menuItemOptionSetItemsTotalPrice = 0;

    if (optionSet.IsMasterOptionSet) {
        menuItemOptionSetItemsTotalPrice = optionSet.MenuItemOptionSetItems.reduce((accumulator, currentValue) => (
            accumulator + currentValue.Price
        ), 0);
    }

    useEffect(() => {
        if (menuItemOptionSetItemsTotalPrice !== 0) {
            setPriceWithMasterOptionEnabled(menuItemOptionSetItemsTotalPrice);
        }
    }, [menuItemOptionSetItemsTotalPrice]);

    return (
        <div className="menu-item-option-set">
            <h5 className="menu-item-option-heading">{optionSet.Name ? optionSet.Name : 'Options'}</h5>
            <ul className="menu-item-option-set">
                {
                    optionSet.MenuItemOptionSetItems.map(optionSetItem => (
                        <MenuItemOptionSetItem
                            optionSetItem={optionSetItem}
                            key={optionSetItem.MenuItemOptionSetItemId}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuItemOptionSet;
