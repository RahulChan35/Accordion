import React from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const SingleAccordion = ({ singleAccordion }) => {
  const [visible, setVisible] = React.useState(false);
  const { title, info } = singleAccordion;
  return (
    <>
      <div className="accordion_container">
        <div className="single_accordion">
          <div>
            <h2>{title}</h2>
            {visible && <p className="info">{info}</p>}
          </div>
          {visible ? (
            <AiOutlineMinus
              className="icons"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <AiOutlinePlus
              className="icons"
              onClick={() => setVisible(!visible)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleAccordion;
