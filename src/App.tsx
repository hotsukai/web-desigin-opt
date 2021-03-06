/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Style from "./style";

const params = new URL(document.location.toString()).searchParams;
const hInit = parseFloat(params.get("h") || "0");
const sInit = parseFloat(params.get("s") || "0");
const isDebug = params.get("isDebug") === "false" ? false : true;

function App() {
  const [h, setH] = useState(hInit);
  const [s, setS] = useState(sInit);
  const mainColor = `hsl(${h}, ${s}%, 60%)`;
  const subColor = `hsl(${h + 60}, ${s + 30}%, 60%)`;

  return (
    <>
      <Style mainColor={mainColor} subColor={subColor} />
      <div style={{ display: isDebug ? "block" : "none" }}>
        <div className="bg-danger vw-100 mb-3 fixed-top">
          <p>DEBUG ZONE</p>
          <label>
            H
            <input
              type="number"
              value={h}
              onChange={(e) => {
                setH(parseFloat(e.target.value));
              }}
            />
          </label>
          <label>
            S
            <input
              type="number"
              value={s}
              onChange={(e) => {
                setS(parseFloat(e.target.value));
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "100px" }}></div>
      </div>

      <Content />
    </>
  );
}

export default App;
function Content() {
  return (
    <>
      <header className="container-fluid mb-3 mb-md-0">
        {/* <!-- 営業時間 --> */}
        <div className="d-md-flex justify-content-between">
          <div className="col-8 col-lg-3 d-none d-md-block top-stitch rounded-bottom bg-main">
            <p className="mb-0">OPEN 07:00 - CLOSE 22:00 (LO.21:30)</p>
            <p className="mb-0">LUNCH TIME 11:30 - 14:00 (LO.13:30)</p>
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-light bg-white pr-0">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-header"
            aria-controls="navbar-header"
            aria-expanded="false"
            aria-label="ナビゲーションの切替"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-header">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MENU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact/index.html">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <!-- トップ画像 --> */}
      <div className="jumbotron-fluid position-relative top-image p-0">
        {/* <!-- ロゴ --> */}
        <div className="logo-mark position-absolute bg-sub">
          <img
            src="img/logo-mark-wt.png"
            alt="ロゴマーク"
            className="position-absolute"
          />
        </div>
        {/* <!-- トップ画像内文字 --> */}
        <div className="text-white position-absolute main-txt">
          <h1 className="display-4">HELLO, WORLD!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style
            <br />
            component for calling extra attention to featured content or
            information.
          </p>
        </div>
      </div>

      {/* <!-- パーティプラン --> */}
      <div className="zigzag text-white">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-6">
              <h2 className="party-title mx-auto h3">
                Can be reserved for parties and after parties!
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="d-flex flex-row mb-3">
                <img
                  src="img/party-left-1.jpg"
                  alt=""
                  className="h-100 col-6 p-0 mr-lg-3"
                />
                <img
                  src="img/party-left-2.jpg"
                  alt=""
                  className="h-100 col-6 p-0"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <img src="img/party-right.jpg" alt="" className="w-100 mb-3" />
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
              {/* <!-- ボタン --> */}
              <button
                type="button"
                className="btn  btn-lg d-block mx-auto bg-sub text-white"
              >
                View Party Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- フードメニュー --> */}
      <div className="py-5">
        <div className="container">
          <h2 className="text-center display-3 py-2">MENU</h2>
          <p className="mx-auto w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 border border-0">
                <img
                  src="img/menu-image-1.jpg"
                  alt=""
                  className="border card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">DAILY SPECIAL</h3>
                  <p className="card-text mb-lg-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  <div className="text-center">
                    <a
                      className="btn  bg-sub text-white d-block d-md-inline-block mb-2 mb-md-0  bg-sub text-white"
                      href="sample/index.html"
                      role="button"
                    >
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 border border-0">
                <img
                  src="img/menu-image-2.jpg"
                  alt=""
                  className="border card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">LUNCH SET</h3>
                  <p className="card-text mb-lg-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                  <div className="text-center">
                    <a
                      className="btn  d-block d-md-inline-block mb-2 mb-md-0  bg-sub text-white"
                      href="sample/index.html"
                      role="button"
                    >
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 border border-0">
                <img
                  src="img/menu-image-3.jpg"
                  alt=""
                  className="border card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">MORNING SET</h3>
                  <p className="card-text mb-lg-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>
                  <div className="text-center">
                    <a
                      className="btn  bg-sub text-white d-block d-md-inline-block mb-2 mb-md-0"
                      href="sample/index.html"
                      role="button"
                    >
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.album	--> */}

      {/* <!-- 店内紹介 --> */}
      <div className="zigzag py-5">
        <div className="container">
          <h2 className="text-center display-3 pb-3 text-white">GALLERY</h2>
          <p className="mx-auto mb-5 col-md-10 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-12 col-lg-5 order-md-2 p-lg-0 mb-3">
              <img src="img/gallery-image-1.jpg" alt="" className="w-100" />
            </div>
            <div className="col-12 col-lg-5 order-md-1 ml-md-auto">
              <h3 className="mb-3 h2 text-white">title</h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut a
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 下部コンテンツ --> */}
      <div className="light-zigzag zigzag-none mb-0">
        <div className="container-fulid py-5">
          <div className="container">
            <div className="row">
              {/* <!-- ニュース --> */}
              <div className="col-12 col-lg-7">
                <div className="container">
                  <h2 className="display-4 text-center pb-3">NEWS</h2>
                  <div className="d-lg-flex flex-row mb-3">
                    <img
                      src="img/coffee.jpg"
                      alt=""
                      className="h-100 col-lg-6 p-0 mb-3 mb-lg-0"
                    />
                    <div className="col-lg-6">
                      <h3>Title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labor
                      </p>
                      <span>
                        <i className="fas fa-heart"></i> 609
                      </span>
                      <span>
                        <i className="far fa-comments"></i> 120
                      </span>
                    </div>
                  </div>
                  <div className="d-lg-flex flex-row mb-3">
                    <img
                      src="img/coffee.jpg"
                      alt=""
                      className="h-100 col-lg-6 p-0 mb-3 mb-lg-0"
                    />
                    <div className="col-lg-6">
                      <h3>Sample Title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <span>
                        <i className="fas fa-heart"></i> 609
                      </span>
                      <span>
                        <i className="far fa-comments"></i> 120
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 店舗情報 --> */}
              <div className="col-12 col-lg-5">
                <div className="stitch text-white">
                  <img
                    src="img/template-logo.png"
                    alt="フッターロゴ"
                    className="mb-4"
                  />
                  <p className="text-center h4 mb-4">
                    <a href="#" className="text-white">
                      http://example.com/
                    </a>
                  </p>
                  <hr className="bg-white my-lg-4" />
                  <address className="h5 font-weight-bold">
                    <p>店舗名：SAMPLE SHOP</p>
                    <p>
                      住所：東京都港区芝8丁目0-0
                      <br />
                      ビジネスビル1F
                    </p>
                    <p>ご予約・お問い合わせ</p>
                    <p>電話番号：03-1234-5678</p>
                    <p>E-Mail：info@example.com</p>
                  </address>
                  <hr className="bg-white my-lg-4" />
                  <div className="h4 font-weight-bold">
                    <p>OPEN 07:00 - CLOSE 22:00 (LO.21:30)</p>
                    <p>
                      LUNCH TIME
                      <br />
                      11:30 - 14:00 (LO.13:30)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-3 m-0 zigzag-copy">
        <p className="text-center mb-0">
          <small className="text-white">
            20XX &copy; あなたのサイト名 All Right Reserved.
          </small>
        </p>
      </footer>
    </>
  );
}
