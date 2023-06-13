import React, { Fragment, useState } from "react";
import css from "./PhoneCont.module.css";

//assets
import phoneOne from "../Assets/PhoneOne.jpeg";

export const PhoneCont = () => {
  const [rotate, setRotate] = useState(1);

  const data = [
    "Phone",
    "Personalize your phone calls",
    "Customize what people see when you call.",
    "+",
  ];

  const rotationStyle = {
    transform: `rotate(${rotate}deg)`,
    transition: "transform 0.5s ease",
  };

  const rotateHandler = () => {
    rotate === 1 ? setRotate(45) : rotate === 45 ? setRotate(0) : setRotate(45);
  };
  return (
    <Fragment>
      <div className={css.se1}>
        <div className={css.se2}>{data[0]}</div>
        <div className={css.se3}>
          {/* left cont */}
          <div className={css.se4}>
            <div className={css.se6}>{data[1]}</div>
            <div className={css.se7}>
              <div className={css.se8}>{data[2]}</div>
            </div>
          </div>
          {/* right Cont */}
          <div className={css.se5}>
            <img src={phoneOne} />
          </div>
          <div className={css.se9}>
            <div
              className={css.se10}
              style={rotationStyle}
              onClick={rotateHandler}
            >
              {data[3]}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
