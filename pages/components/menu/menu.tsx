import Link from "next/link";
import React, { useState } from "react";
import { Center, Menu as MenuContainer } from "./menu-styled";

const navItems = [
  {
    name: "About us",
    url: "/About"
  },
];

export const Menu = () => {
  const [show, setShow] = useState(true);

  const renderNavItems = () => {
    return navItems.map((item, index) =>
      <Link key={index} href={item.url}>{item.name}</Link>
    );
  };

  return (
    <header>
      <button onClick={() => setShow(!show)}>Menu</button>

      <MenuContainer show={show}>
        <Center>
          {renderNavItems()}
        </Center>
      </MenuContainer>
    </header>
  );
};