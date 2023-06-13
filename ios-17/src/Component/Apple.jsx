import React, { Fragment } from "react";

import css from "./Apple.module.css";
import logoVisionPro from "../Assets/logo_apple_vision_pro.png";
import logoTradeIn from "../Assets/logo_tradein.png";
import logoIwatch from "../Assets/logo_apple_watch_series_8.png";
import { ChevronRight } from "@material-ui/icons";

export const Apple = () => {
  const strings = [
    "Save on Mac or iPad with education pricing. Plus get a gift card up to $150.",
    "Shop now",
    "Learn more ",
    "Order now",
    "Buy",
  ];

  const macbookAir = [
    "MacBook Air 15''",
    "Impressively big. Impossibly thin.",
    "Avaliable starting 6.13",
  ];

  const visionPro = [
    "Welcome to the era of Spatial Computing.",
    "Avaliable early next year in the U.S.",
  ];

  const iphone14Pro = ["iPhone 14 Pro", "Pro. Beyond."];

  const macStudio = [
    "Mac Studio",
    "SuperCharged by M2 Max and M2 Ultra",
    "Avaliable starting 6.13",
  ];

  const macPro = [
    "Mac Pro",
    "Trasnformed by Apple silicon.",
    "Avaliable starting 6.13",
  ];

  const tradeIn = [
    "Upgrade and save. It's that easy.",
    "See what your device is worth",
  ];

  const iWatch = ["A healthy leap ahead."];

  const linkDesignWhite = (
    <div className={css.a10}>
      <div className={css.a11}>
        {strings[2]}
        <span className={css.a13}>
          <ChevronRight />
        </span>
      </div>
      <div className={css.a12}>
        {strings[3]}
        <span className={css.a13}>
          <ChevronRight />
        </span>
      </div>
    </div>
  );

  const linkDesignBlack = (
    <div className={css.a19}>
      <div className={css.a11}>
        {strings[2]}
        <span className={css.a18}>
          <ChevronRight />
        </span>
      </div>
      <div className={css.a12}>
        {strings[4]}
        <span className={css.a18}>
          <ChevronRight />
        </span>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className={css.a1}>
        <div className={css.a2}>
          {strings[0]}
          <div className={css.a14}> {strings[1]}</div>
        </div>
        {/* MacBookAir 15'' */}
        <div className={css.a3}>
          <div className={css.a6}>
            <div className={css.a7}>{macbookAir[0]}</div>
            <div className={css.a8}>{macbookAir[1]}</div>
            <div className={css.a9}>{macbookAir[2]}</div>
            {linkDesignWhite}
          </div>
        </div>
        {/* Vision Pro */}
        <div className={css.a4}>
          <div className={css.a15}>
            <div>
              <img src={logoVisionPro} />
            </div>
            <div className={css.a8}>{visionPro[0]}</div>
            <div className={css.a9}>{visionPro[1]}</div>
            <div className={css.a10}>
              <div className={css.a11}>
                {strings[2]}
                <span className={css.a16}>
                  <ChevronRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* iPhone 14 Pro */}
        <div className={css.a5}>
          <div className={css.a17}>
            <div className={css.a7}>{iphone14Pro[0]}</div>
            <div className={css.a8}>{iphone14Pro[1]}</div>
            {linkDesignBlack}
          </div>
        </div>
        {/* Mac Studio & Mac Pro */}
        <div className={css.a20}>
          <div className={css.a21}>
            <div className={css.a25}>
              <div className={css.a7}>{macStudio[0]}</div>
              <div className={css.a8}>{macStudio[1]}</div>
              <div className={css.a9}>{macStudio[2]}</div>
              {linkDesignWhite}
            </div>
          </div>
          <div className={css.a22}>
            <div className={css.a25}>
              <div className={css.a7}>{macPro[0]}</div>
              <div className={css.a8}>{macPro[1]}</div>
              <div className={css.a9}>{macPro[2]}</div>
              {linkDesignWhite}
            </div>
          </div>
        </div>
        {/* TradeIn & iWatch */}
        <div className={css.a20}>
          <div className={css.a23}>
            <div className={css.a25}>
              <div>
                <img src={logoTradeIn} />
              </div>
              <div className={css.a8}>{tradeIn[0]}</div>
              <div className={css.a10}>
                <div className={css.a11}>
                  {tradeIn[1]}
                  <span className={css.a13}>
                    <ChevronRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.a24}>
            <div className={css.a25}>
              <div>
                <img src={logoIwatch} />
              </div>
              <div className={css.a26}>{iWatch[0]}</div>
              {linkDesignBlack}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Fragment>
  );
};
