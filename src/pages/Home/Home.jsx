import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Main from "../../components/Main/Main";
import Recommendation_1 from "../../components/Recommendations/Recommendation_1";
import Recommendation_2 from "../../components/Recommendations/Recommendation_2";
import Recommendation_3 from "../../components/Recommendations/Recommendation_3";

export default function Home() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SideBar />

        <div className="recommendations">
          <Recommendation_1 />
          <Recommendation_2 />
          <Recommendation_3 />
        </div>

        {/* <Main /> */}
      </div>
    </>
  );
}
