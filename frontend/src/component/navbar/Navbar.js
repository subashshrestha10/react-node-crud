import React from "react";
import "./Navbar.scss";
import logo from "../../logo.jpeg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar(props) {

  const totalItem = props.mobiles.reduce((acc,cur)=>{
    return acc + cur.quantity
  },0)

  return (
    <nav>
      <div className="nav-container">
        <div className="link-nav">
          <img src={logo} alt="subash" className="mr-2"/>
          <Link to="/home"><span>Home</span></Link>
        </div>
        <Link to="/cart">
          <Badge count={totalItem} size="small">
            <ShoppingCartOutlined className="cursor-pointer" />
          </Badge>
        </Link>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles
  };
};

export default connect(mapStateToProps)(Navbar)
