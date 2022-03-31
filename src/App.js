import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { Modal, Button } from "react-bootstrap";
//頁首、頁尾、CSS
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FixedRight from "./components/fixedRight";

//頁面元件
import HomePage from "./pages/homePage/homePage";
import Tour from "./pages/tour/tour";
import Activity from "./pages/activity/activity";
import Products from "./pages/products/products";
import Game from "./pages/game/game";
import SpotDiff from "./pages/game/spot-diff";
import SpotDiff2 from "./pages/game/spot-diff2";
import GameStart from "./pages/game/gameStart";
import SpotLevel from "./pages/game/spotLevel";
import PsychoGame from "./pages/game/psycho-game";
import MultiChoice from "./pages/game/multiChoice-game.js";
import MembersConfirm from "./pages/members/MembersConfirm";
import Login from "./pages/members/components/Login.js";
import MemberSignUp from "./pages/members/MemberSignUp";
import ForgotPass from "./pages/members/components/ForgotPass";
import MemberPassChange from "./pages/members/MemberPassChange";
import MemberList from "./pages/members/components/MemberList";
import Carts from "./pages/carts/carts";
import Cartsfilloutform from "./pages/carts/carts_02_filloutform";
import Cartsfinishorder from "./pages/carts/carts_03_finishorder";
import { CartProvider } from "./pages/carts/utils/useCart";
import { SecondCartProvider } from "./pages/carts/utils/useSecondCart";
import { ThirdCartProvider } from "./pages/carts/utils/useThirdCart";
import { FourthCartProvider } from "./pages/carts/utils/useFourthCart";
import ProductList from "./pages/carts/Product_temp/ProductList";
import Lodging from "./pages/lodging/lodging";
import NotFoundPage from "./pages/NotPage/NotFoundPage";
import ProductsDetail from "./pages/products/productsdetail";
import Lottery from "./pages/game/lottery";
import MyDate from "./pages/lodging/components/MyDate";
import Chatbot from "./pages/game/chatbot";

function App() {
  const [sortbarType, setSortbarType] = useState("");
  // 全域狀態
  const history = useHistory();

  // 是否登入
  const [auth, setAuth] = useState(false);

  const account = JSON.parse(localStorage.getItem("admin_account"));
  const token = !!localStorage.getItem("admin_token");
  const [localState, setLocalState] = useState({
    account: account,
    token: token,
  });

  const [toggleLottery, setToggleLottery] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBtn, setModalBtn] = useState("");
  const [modalText, setModalText] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const ChatbotModal = (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header>
        <Modal.Title className="chatbot_modalTitle">{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p
          className="chatbot_modalBody"
          dangerouslySetInnerHTML={{ __html: modalText }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            switch (modalBtn) {
              case "前往結帳":
                window.location.href = "http://localhost:3000/carts";
                break;
              case "前往註冊":
                window.location.href = "http://localhost:3000/members/signup";
                break;
              case "到遊戲頁":
                window.location.href = "http://localhost:3000/game";
                break;
              default:
                console.log(modalBtn);
            }
          }}
        >
          {modalBtn}
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");

  return (
    <FourthCartProvider localStorage="fourthCart">
      <ThirdCartProvider localStorage="thirdCart">
        <SecondCartProvider localStorageKey="secondCart">
          <CartProvider>
            <Router>
              <>
                <Navbar
                  auth={auth}
                  setAuth={setAuth}
                  localState={localState}
                  setLocalState={setLocalState}
                />
                <FixedRight
                  setToggleLottery={setToggleLottery}
                  setShow={setShow}
                  setModalBtn={setModalBtn}
                  setModalText={setModalText}
                  setModalTitle={setModalTitle}
                />
                <Lottery
                  toggleLottery={toggleLottery}
                  setToggleLottery={setToggleLottery}
                />
                <Chatbot
                  setShow={setShow}
                  setModalBtn={setModalBtn}
                  setModalText={setModalText}
                  setModalTitle={setModalTitle}
                />
                {ChatbotModal}
                {/* 路由表 */}
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/tour">
                    <Tour />
                  </Route>
                  <Route path="/activity">
                    <Activity />
                  </Route>
                  <Route path="/products">
                    <Products
                      sortbarType={sortbarType}
                      setSortbarType={setSortbarType}
                    />
                  </Route>
                  <Route path="/productsdetail">
                    <ProductsDetail setSortbarType={setSortbarType} />
                  </Route>
                  <Route path="/game/spot-level">
                    <SpotLevel />
                  </Route>
                  <Route path="/game/psycho-game">
                    <PsychoGame />
                  </Route>
                  <Route exact path="/game/spot-diff">
                    <SpotDiff />
                  </Route>
                  <Route exact path="/game/spot-diff2">
                    <SpotDiff2 />
                  </Route>
                  <Route path="/game/multi-choice">
                    <MultiChoice />
                  </Route>
                  <Route path="/game/start" component={GameStart}>
                    {/* <GameStart /> */}
                  </Route>
                  <Route exact path="/game">
                    <Game />
                  </Route>
                  <Route path="/carts/filloutform">
                    <Cartsfilloutform
                      setName={setName}
                      setPhone={setPhone}
                      setEmail={setEmail}
                      setAddress={setAddress}
                      setDelivery={setDelivery}
                      setPayment={setPayment}
                    />
                  </Route>
                  <Route path="/carts/finishorder">
                    <Cartsfinishorder
                      name={name}
                      phone={phone}
                      email={email}
                      address={address}
                      delivery={delivery}
                      payment={payment}
                    />
                  </Route>
                  <Route path="/carts/product_temp">
                    <ProductList />
                  </Route>
                  <Route path="/carts">
                    <Carts />
                  </Route>
                  <Route path="/members/signup">
                    <MemberSignUp />
                  </Route>
                  <Route path="/members/confirm">
                    <MembersConfirm />
                  </Route>
                  <Route exact path="/members/login">
                    <Login
                      auth={auth}
                      setAuth={setAuth}
                      setLocalState={setLocalState}
                      localState={localState}
                      account={account}
                    />
                  </Route>
                  <Route path="/members/forgot">
                    <ForgotPass />
                  </Route>
                  <Route path="/members/password-change">
                    <MemberPassChange />
                  </Route>
                  <Route exact path="/members/modify-member-info">
                    {auth || localState.token ? (
                      <MemberList
                        account={localState.account}
                        token={localState.token}
                        auth={auth}
                      />
                    ) : (
                      <Redirect to="/members" />
                    )}
                    {/* <MemberList account={account} token={token} /> */}
                  </Route>
                  <Route path="/members">
                    <Login
                      auth={auth}
                      setAuth={setAuth}
                      setLocalState={setLocalState}
                      localState={localState}
                      account={account}
                    />
                  </Route>
                  <Route path="/lodging">
                    <Lodging />
                  </Route>

                  {/* 網址上的動態參數params 
          <Route path="/product-list/product-detail/:id?">
            <ProductDetail />
          </Route>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          */}
                  <Route path="*">
                    <NotFoundPage />
                  </Route>
                </Switch>
                <Footer />
              </>
            </Router>
          </CartProvider>
        </SecondCartProvider>
      </ThirdCartProvider>
    </FourthCartProvider>
  );
}
export default App;
