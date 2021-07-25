import React from "react";

const Tags = (props) => {
  return (
    <div>
      <a href="#" className={props.classes}>
        {props.data} <span>&#215;</span>
      </a>
    </div>
  );
};

export default Tags;
