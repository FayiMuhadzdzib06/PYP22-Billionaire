import React from "react";
import ImageComputer from "assets/images/img-computer.svg";

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
              Aplikasi Pembelajaran <br />
              untuk sekolah kejurusan
            </h1>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              Belajar materi-materi Kejurusan dan bisa membaca komik hanya menggunakan satu aplikasi.Coba aplikasi Aflarc sekarang juga
            </p>

            <Button
              className="btn px-5 btn-show"
              hasShadow
              isPrimary
              onClick={showInformation}
            >
              Lihat Informasi
            </Button>
          </div>
          <div className="col d-none d-md-block pl-5">
            <div>
              <img src={ImageComputer} style={
                { width: 550, marginTop: 0, marginRight: -50}} alt="Img Computer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
