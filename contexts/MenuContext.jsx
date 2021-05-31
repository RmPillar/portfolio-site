import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
  menuOpen: false,
  setMenuOpen: () => {},
});

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const menu = React.useContext(MenuContext);
  if (menu === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return menu;
};
