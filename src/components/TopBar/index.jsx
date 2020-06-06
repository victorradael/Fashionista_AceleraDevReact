import React from "react";

import Search from "../Search";
import Cart from "../Cart";

import "./styles.css";

export default function TopBar() {
  return (
    <header className="topbar-container">
      <Search />

      <Cart />
    </header>
  );
}
