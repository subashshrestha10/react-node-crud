import React from "react";
import MobileList from "../../component/mobile-list/MobileList";
import './Home.scss';

import { connect } from "react-redux";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <MobileList/>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (mobile) => {
//       dispatch({ type: "ADD_TO_CART", mobile });
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    mobiles: state.mobiles
  };
};

export default connect(mapStateToProps)(Home);
