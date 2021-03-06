import React, { useState } from "react";
import { Modal, Button, Divider } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import "./Mobile.scss";
import NepaliCurrency from "../nepaly-currency-format/NepaliCurrency";

function Mobile({ mobile, addToCart }) {
  const [isAddCartModalVisible, setIsAddCartModalVisible] = useState(false);
  const [numberOfItem, setnumberOfItem] = useState(1);

  const showAddCartModal = () => {
    setIsAddCartModalVisible(true);
  };

  const addMobile = () => {
    setIsAddCartModalVisible(false);
  };

  const closeAddCartModal = () => {
    setIsAddCartModalVisible(false);
  };

  const addMobileToCart = () => {
    let data = {
      ...mobile,
      quantity: numberOfItem,
    };
    addToCart(data);
    setIsAddCartModalVisible(false);
    setnumberOfItem(0);
  };

  const plusMinus = (flag) => {
    let number = numberOfItem;

    if (flag === "+") {
      number++;
    } else if (number > 1) {
      number--;
    }
    setnumberOfItem(number);
  };

  return (
    <>
      <div className="card cursor-pointer">
        <div className="mobile-image">
          <img src={mobile.image} alt={mobile.name} />
        </div>
        <div className="mobile-info">
          <div className="title">{mobile.name}</div>
          <div className="price">
            <NepaliCurrency price={mobile.price} />
          </div>
          <div className="stock mt-2">
            {mobile.inStock ? "In Stock" : "Out of Stock"}
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Button
              type="primary"
              danger
              onClick={showAddCartModal}
              disabled={!mobile.inStock}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      <div>
        {isAddCartModalVisible && (
          <Modal
            title={null}
            footer={null}
            visible={isAddCartModalVisible}
            onOk={addMobile}
            onCancel={closeAddCartModal}
          >
            <div className="mt-3 add-cart">
              <div className="row">
                <div className="col-6 add-cart-height">
                  <div className="mobile-image">
                    <img src={mobile.image} alt={mobile.name} />
                  </div>
                </div>

                <div className="col-6">
                  <div className="add-cart-title">{mobile.name}</div>
                  <div className="add-cart-price">
                    <NepaliCurrency price={mobile.price} />
                  </div>
                  <Divider />
                  <div className="quantity">
                    Quantity
                    <div className="plus-minus">
                      <div
                        className={
                          "minus " +
                          (numberOfItem === 1 ? "disabled" : "enabled")
                        }
                        onClick={() => plusMinus("-")}
                      >
                        <MinusOutlined />
                      </div>
                      <div className="value">{numberOfItem}</div>
                      <div className="plus" onClick={() => plusMinus("+")}>
                        <PlusOutlined />
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <div className="add-cart-action-button">
                    <Button onClick={closeAddCartModal}>Cancel</Button>
                    <Button type="primary" danger onClick={addMobileToCart}>
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (mobile) => {
      dispatch({ type: "ADD_TO_CART", mobile });
    },
  };
};

export default connect(null, mapDispatchToProps)(Mobile);
