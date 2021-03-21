import React from "react";
import "./Navbar.scss";
import logo from "../../logo.jpeg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="link-nav">
          <img src={logo} alt="subash" className="mr-2"/>
          <Link to="/home"><span>Home</span></Link>
        </div>
        <Link to="/cart">
          <Badge count={5} size="small">
            <ShoppingCartOutlined className="cursor-pointer" />
          </Badge>
        </Link>
      </div>
    </nav>
  );
}
