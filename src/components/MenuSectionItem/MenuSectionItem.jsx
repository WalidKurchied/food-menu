import React, { useState } from 'react';
import MenuItemOptionSet from '../MenuItemOptionSet';
import { fixPriceWithCurrency } from '../../utils/currency';

import './menu-section-item.css';

const priceFixer = fixPriceWithCurrency();
const MenuSectionItem = ({ menuItem }) => {
    const [priceWithMasterOptionEnabled, setPriceWithMasterOptionEnabled] = useState(0);

    return (
        <div className="menu-section-item">
            <img src={menuItem.ImageUrl}
                className="menu-item-image"
                width="200px"
                height="150px"
                alt="product image"
            />

            <div className="menu-section-item-info">
                <span className="menu-item-name">{menuItem.Name}</span>
                <span className="menu-item-price">{priceFixer(priceWithMasterOptionEnabled || menuItem.Price)}</span>
                <p className="menu-item-description">{menuItem.Description}</p>
                {
                    menuItem.MenuItemOptionSets.map((optionSet) => (
                        <MenuItemOptionSet
                            optionSet={optionSet}
                            key={optionSet.MenuItemOptionSetId}
                            setPriceWithMasterOptionEnabled={setPriceWithMasterOptionEnabled}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default MenuSectionItem;
