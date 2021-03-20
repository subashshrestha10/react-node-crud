import React from "react";
import "./Navbar.scss";
import logo from "../../logo.jpeg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from 'antd';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="subash" />
        <Badge count={5} size="small">
          <ShoppingCartOutlined className="cursor-pointer" />
        </Badge>
      </div>
    </nav>
  );
}
