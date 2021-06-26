import React from "react";
import ImageHero from "assets/images/img-hero.svg";

import Button from "elements/Button";

export default function Hero(props) {
  function showInformation() {
    window.scrollTo({
      top: props.refInformation.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <div className="hero pt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="font-weight-bold line-height-1 mt-3">
              Satu Aplikasi Untuk <br />
              Semua Kebutuhan
            </h1>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              Meminjam modal, berbelanja dan berjualan hanya menggunakan satu
              apliaski. Coba aplikasi SiBaik sekarang juga
            </p>

            <Button
              className="btn px-5 btn-show"
              hasShadow
              isPrimary
              onClick={showInformation}
            >
              Show Information
            </Button>
          </div>
          <div className="col d-none d-md-block pl-5">
            <div>
              <img src={ImageHero} style={{ width: 500 }} alt="Img hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
