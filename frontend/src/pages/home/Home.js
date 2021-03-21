import React from "react";
import { connect } from "react-redux";

import MobileList from "../../component/mobile-list/MobileList";
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <MobileList/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles
  };
};

export default connect(mapStateToProps)(Home);
