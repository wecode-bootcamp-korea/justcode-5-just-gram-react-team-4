import React from "react";
import "./Main.scss";
import FeedList from "../Components/FeedList";
import Nav from "../Components/Nav";
import MainRight from "../Components/MainRight";

function Main() {
  return (
    <body>
      <Nav />
      <div className="wrapper">
        <main>
          <div className="feeds">
            <FeedList />
          </div>
          <MainRight />
        </main>
      </div>
    </body>
  );
}

export default Main;
