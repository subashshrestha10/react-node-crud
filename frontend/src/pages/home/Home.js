import React from "react";
import MobileList from "../../component/mobile-list/MobileList";
import './Home.scss';

export default function Home() {
  return (
    <div className="home mt-3">
      <div className="content">
        <MobileList />
      </div>
    </div>
  );
}