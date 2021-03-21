import React, { useState, useEffect } from "react";
import { notification, Empty, Spin } from "antd";

import Mobile from "../mobile-card/Mobile";
import { MobileService } from "../../service/mobile.service";
import "./MobileList.scss";
import PriceFilter from "../filter/PriceFilter";

function MobileList({props}) {
  let [mobileList, setMobileList] = useState([]);
  let [_mobileList, _setMobileList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MobileService.listMobile()
      .then((res) => {
        let mobileList = res.data.data;
        setIsLoading(false);
        setMobileList(mobileList);
        _setMobileList(mobileList);
      })
      .catch((err) => {
        setIsLoading(false);
        openNotification();
      });
  }, []);

  const openNotification = () =>
    notification.error({
      message: "Unable To Load Data",
      description: "Please Try Again.",
    });

  const applyFilter = (range) => {
    const filteredMobileList = _mobileList.filter((mobile) => {
      return mobile.price <= range[1] && mobile.price > range[0];
    });
    setMobileList(filteredMobileList);
  };

  const resetFilter = () => {
    setMobileList(_mobileList);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center w-100">
        <PriceFilter applyFilter={applyFilter} resetFilter={resetFilter} />
        <div className="row w-100">
          {!isLoading && mobileList.length > 0 &&
            mobileList.map((mobile) => (
              <div className="col-md-4 col-sm-6 col-lg-3 mt-4" key={mobile.id}>
                <Mobile mobile={mobile} props={props}/>
              </div>
            ))}

          {!isLoading && mobileList.length === 0 && (
            <div className="col-12 mt-4">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          )}

          {isLoading && (<div className="m-4 p-4 d-flex justify-content-center w-100">
            <Spin/>
          </div>)}
        </div>
      </div>
    </>
  );
}

export default MobileList;
