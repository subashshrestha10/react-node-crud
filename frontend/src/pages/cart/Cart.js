import React from "react";
import { Empty } from "antd";
import { connect } from "react-redux";

import "./Cart.scss";
import NepaliCurrency from "../../component/nepaly-currency-format/NepaliCurrency";

function Cart(props) {
  const totalItem = props.mobiles;

  const grandTotal = totalItem.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);
  return (
    <div className="home">
      <div className="content">
        <div className="row w-100">
          <div className="col-12">
            <div className="cart">
              {totalItem.length > 0 && (
                <div className="cart-header row">
                  <div className="item-details text-center col-md-3">
                    Description
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="item-price col-md-5"></div>
                      <div className="item-price col-md-2">Price</div>
                      <div className="item-quantity col-md-2">Quantity</div>
                      <div className="item-total col-md-3">Total</div>
                    </div>
                  </div>
                </div>
              )}
              {totalItem.length > 0 &&
                totalItem.map((item) => (
                  <div className="cart-body row mt-3" key={item.id}>
                    <div className="item-details col-12 col-sm-3 col-md-3">
                      <div className="cart-container">
                        <div className="cart-height">
                          <div className="mobile-image">
                            <img src={item.image} />
                          </div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-9 col-12 col-md-9">
                      <div className="row h-100">
                        <div className="d-flex align-items-center col-md-5">
                          {item.name}
                        </div>
                        <div className="d-flex align-items-center item-price col-md-2">
                          <NepaliCurrency price={item.price} />
                        </div>
                        <div className="d-flex align-items-center item-quantity col-md-2">
                          {"x" + item.quantity}
                        </div>
                        <div className="d-flex align-items-center item-total col-md-3">
                          <NepaliCurrency price={item.price * item.quantity} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {totalItem.length > 0 && (
                <div className="grand-total">Grand Total: {grandTotal}</div>
              )}

              {totalItem.length < 1 && (
                <div className="col-12 mt-4">
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles,
  };
};

export default connect(mapStateToProps)(Cart);
