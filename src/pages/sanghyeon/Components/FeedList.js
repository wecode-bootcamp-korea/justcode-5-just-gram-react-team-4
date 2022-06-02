import React, { useState, useEffect } from "react";
import Feed from "./Feed";

function FeedList() {
  const [feedList, setfeedList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json", {
      method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then((res) => res.json())
      .then((data) => {
        setfeedList(data);
      });
  }, []);

  return (
    <>
      {feedList.map((data) => (
        <Feed dataF={data} />
      ))}
    </>
  );
}
export default FeedList;
