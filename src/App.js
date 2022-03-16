import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";

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
import GameStart from "./pages/game/gameStart";
import SpotLevel from "./pages/game/spotLevel";
import PsychoGame from "./pages/game/psycho-game";
import MultiChoice from "./pages/game/multiChoice-game.js";
import Members from "./pages/members/members";
import MemberLogin from "./pages/members/MemberLogin.js";
import MemberSignUp from "./pages/members/MemberSignUp";
import MemberForgotPass from "./pages/members/MemberForgotPass";
import MemberPassChange from "./pages/members/MemberPassChange";
import ModifyMemberInfo from "./pages/members/ModifyMemberInfo";
import Carts from "./pages/carts/carts";
import Lodging from "./pages/lodging/lodging";
import NotFoundPage from "./pages/NotPage/NotFoundPage";
import ProductsDetail from "./pages/products/productsdetail";

function App() {
  // 全域狀態
  //const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
          <Navbar />
          <FixedRight />
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
            <Route path="/game/spot-diff">
              <SpotDiff />
            </Route>
            <Route path="/game/multi-choice">
              <MultiChoice />
            </Route>
            <Route path="/game/start">
              <GameStart />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>
            <Route path="/carts">
              <Carts />
            </Route>
            <Route path="/members/signup">
              <MemberSignUp />
            </Route>
            <Route path="/members/login">
              <MemberLogin />
            </Route>
            <Route path="/members/forgot">
              <MemberForgotPass />
            </Route>
            <Route path="/members/password-change">
              <MemberPassChange />
            </Route>
            <Route path="/members/modify-member-info">
              <ModifyMemberInfo />
            </Route>
            <Route path="/members">
              <MemberLogin />
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
  );
}

export default App;
