import React, { Fragment, useState } from "react";
import css from "./OSSeventeen.module.css";
import { CheckCircleOutlined } from "@material-ui/icons";

export const OSSeventeen = () => {
  const [rotate, setRotate] = useState(1);

  const data = [
    "Finish sending transfers over the internet",
    "Coming later this year",
    "AirDrop transfers continue even if you step away.",
    "+",
    "Content you share over AirDrop will continue to send securely and in full quality over the internet if you leave AirDrop range and both you and your recipient are signed in to iCloud.*",
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
      <div className={css.oss1}>
        <>
          <div
            className={
              rotate === 1 ? css.oss14 : rotate === 45 ? css.oss10 : css.oss13
            }
          >
            <div className={css.oss11}>{data[0]}</div>
            <div className={css.oss12}>{data[4]}</div>
          </div>
        </>
        <>
          <div className={css.oss2}>
            <div className={css.oss3}>{data[0]}</div>
            <div className={css.oss4}>{data[1]}</div>
          </div>
          <div>
            <div className={css.oss5}>
              <div className={css.oss6}>
                <CheckCircleOutlined style={{ fontSize: "100px" }} />
              </div>
              <div className={css.oss7}>{data[2]}</div>
            </div>
          </div>
          <div className={css.oss8}>
            <div
              className={css.oss9}
              style={rotationStyle}
              onClick={rotateHandler}
            >
              {data[3]}
            </div>
          </div>
        </>
      </div>
    </Fragment>
  );
};
