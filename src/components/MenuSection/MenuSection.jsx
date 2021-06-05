import React from 'react'
import MenuSectionItem from '../MenuSectionItem';

import './menu-section.css';

const MenuSection = ({ menuSection }) => ((
    <section className="menu-section">
        <h2 className="menu-section-name">{menuSection.Name}</h2>
        {
            menuSection.MenuItems.map(menuItem => (
                <MenuSectionItem menuItem={menuItem} key={menuItem.MenuItemId} />
            ))
        }
    </section>
));

export default MenuSection;
