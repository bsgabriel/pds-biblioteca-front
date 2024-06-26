import React from "react";
import "../styles/Layout.css";
import Menu from "./Menu";

const Layout = ({ children }) => (
  <div className="layout">
    <Menu className="fixed" />
    <main className="main">{children}</main>
  </div>
);

export default Layout;
