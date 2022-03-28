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
import ProductList from "./pages/carts/Product_temp/ProductList";
import Lodging from "./pages/lodging/lodging";
import NotFoundPage from "./pages/NotPage/NotFoundPage";
import ProductsDetail from "./pages/products/productsdetail";
import Lottery from "./pages/game/lottery";

function App() {
  // 全域狀態
  const history=useHistory();

  // 是否登入
  const [auth, setAuth] = useState(false);
  
  const account = JSON.parse(localStorage.getItem("admin_account"));
  const token = !!localStorage.getItem("admin_token");
  const [localState,setLocalState]=useState({"account":account,"token":token});
  

  const [toggleLottery, setToggleLottery] = useState(false);
  return (
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        <Router>
          <>
            <Navbar auth={auth} setAuth={setAuth} />
            <FixedRight setToggleLottery={setToggleLottery}/>
            <Lottery toggleLottery={toggleLottery} setToggleLottery={setToggleLottery}/>
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
                <Products />
              </Route>
              <Route path="/productsdetail">
                <ProductsDetail />
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
                <Cartsfilloutform />
              </Route>
              <Route path="/carts/finishorder">
                <Cartsfinishorder />
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
                <Login auth={auth} setAuth={setAuth} setLocalState={setLocalState}/>
              </Route>
              <Route path="/members/forgot">
                <ForgotPass />
              </Route>
              <Route path="/members/password-change">
                <MemberPassChange />
              </Route>
              <Route exact path="/members/modify-member-info">
                {auth ? <MemberList account={localState.account} token={localState.token} auth={auth} /> : <Redirect to="/members" /> }
                {/* <MemberList account={account} token={token} /> */}
              </Route>
              <Route path="/members">
                <Login auth={auth} setAuth={setAuth} setLocalState={setLocalState}/>
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
  );
}
export default App;
