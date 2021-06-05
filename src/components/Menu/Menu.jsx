import React from 'react';
import MenuSection from '../MenuSection';
import './menu.css';

const Menu = ({ menu }) => {
    let menuSections = null;

    if (Object.keys(menu).length) {
        menuSections = menu.MenuSections.map(menuSection => (
            <MenuSection
                menuSection={menuSection}
                key={menuSection.MenuSectionId}
            />
        ));
    }

    return (
        <div className="menu-container">
            <h1 className="menu-heading">Food Menu</h1>
            {menuSections}
        </div>
    )
}

export default Menu;
