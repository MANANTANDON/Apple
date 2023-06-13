import React, { Fragment } from "react";
import css from "./TradeIn.module.css";
import tradeIn from "../Assets/tradeIn.png";
import { AddCircleOutline } from "@material-ui/icons";

export const TradeIn = () => {
  const data = [
    "Your device",
    "Estimated trade-in value¹",
    "See all iPhones values ",
    "Find your trade-in value",
  ];
  const iphone = [
    ["iPhone 13 Pro Max", "Up to $630"],
    ["iPhone 13 Pro", "Up to $530"],
    ["iPhone 13 ", "Up to $400"],
    ["iPhone 13 mini", "Up to $330"],
  ];

  const hr = ["", <hr />, <hr />, <hr />];
  return (
    <Fragment>
      <div className={css.ti0}>
        <div className={css.ti1}>
          {/* Left */}
          <div className={css.ti2}>
            <div className={css.ti4}>
              <div className={css.ti5}>
                Get <span className={css.ti6}>$40–$630</span> when you trade in
                an <span className={css.ti6}>iPhone.¹</span>
              </div>
              <div className={css.ti8}>
                <span className={css.ti9}>{data[0]}</span>
                <span className={css.ti10}>{data[1]}</span>
              </div>
              <div className={css.trade}>
                {iphone.map((item, key) => (
                  <>
                    {hr[key]}
                    <div className={css.ti11}>
                      <div className={css.ti12} key={key}>
                        {iphone[key][0]}
                      </div>
                      <div className={css.ti13}>{iphone[key][1]}</div>
                    </div>
                  </>
                ))}
              </div>
              <div className={css.ti14}>
                <span className={css.ti15}>{data[2]} </span>
                <span className={css.ti16}>
                  <AddCircleOutline
                    fontSize="small"
                    style={{ fontWeight: "lighter" }}
                  />
                </span>
              </div>
              <div className={css.ti17}>
                <button>{data[3]}</button>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className={css.ti3}>
            <div className={css.ti7}>
              <img src={tradeIn} alt="" height="420px" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
