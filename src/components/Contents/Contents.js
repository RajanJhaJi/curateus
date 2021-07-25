import React from "react";
import Content from "../Content/Content";

const Contents = (props) => {
  //   console.log(props.articles);
  return (
    <div>
      {props.items.map((el, i) => {
        return <Content data={el} />;
      })}
    </div>
  );
};

export default Contents;
