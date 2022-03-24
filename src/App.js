import { Link, Route, BrowserRouter as Router, Switch,useHistory, useLocation,Redirect } from "react-router-dom";
import { useState,useEffect } from "react";
import React from "react";
import { useContext } from "react";

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
// import Members from "./pages/members/members";
import MemberLogin from "./pages/members/MemberLogin.js";
import MemberSignUp from "./pages/members/MemberSignUp";
import MemberForgotPass from "./pages/members/MemberForgotPass";
import MemberPassChange from "./pages/members/MemberPassChange";
import MemberList from "./pages/members/components/MemberList";
import Carts from "./pages/carts/carts";
import Cartsfilloutform from "./pages/carts/carts_02_filloutform";
import Cartsfinishorder from "./pages/carts/carts_03_finishorder";
import Lodging from "./pages/lodging/lodging";
import NotFoundPage from "./pages/NotPage/NotFoundPage";
import ProductsDetail from "./pages/products/productsdetail";



// 假資料，借放
const products = [
  {
    sid: 1,
    image: "https://i.imgur.com/1GrakTl.jpg",
    name: "咖啡色 T-shirt",
    price: 300,
    quantity: 3,
  },
  {
    sid: 2,
    image: "https://i.imgur.com/ba3tvGm.jpg",
    name: "白色 T-shirt",
    price: 200,
    quantity: 3,
  },
  {
    sid: 3,
    image: "https://i.imgur.com/pHQ3xT3.jpg",
    name: "黑色 T-shirt",
    price: 450,
    quantity: 3,
  },
  {
    sid: 4,
    image: "https://i.imgur.com/pHQ3xT3.jpg",
    name: "金色 T-shirt",
    price: 100,
    quantity: 3,
  },
];

function App() {
  // 全域狀態

  // 是否登入
  const [auth, setAuth] = useState(false)
  const account=JSON.parse(localStorage.getItem('admin_account'))
  const token=!! localStorage.getItem('admin_token')
  // console.log('3:',auth===true)
  useEffect(() => {
    if (account&&token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    // console.log('1:',auth===true)
  }, []);
  // useEffect(()=>{
  //   if(auth){
  //     console.log(account.m_sid)
  //   }
  //   console.log('2:',auth===true)
  // },[auth])



  const [productsInOrder, setProductsInOrder] = useState(products);

  const productCount = () => {
    let totalCount = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      console.log(productsInOrder.length);
      totalCount += productsInOrder[i].quantity;
    }
    return totalCount;
  };

  const [toggleLottery, setToggleLottery] = useState(false);
  const openOrNot = { toggleLottery, setToggleLottery };
  return (
    <Router>
      <>
        <Navbar auth={auth} setAuth={setAuth}/>
        <LotteryContext.Provider value={openOrNot}>
          <FixedRight />
        </LotteryContext.Provider>
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
          <Route path="/productsdetail" >
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
          <Route path="/game/start" component={GameStart}>
            {/* <GameStart /> */}
          </Route>

          <Route exact path="/game">
            <LotteryContext.Provider value={openOrNot}>
              <Game />
            </LotteryContext.Provider>
          </Route>
          <Route path="/carts/filloutform">
            <Cartsfilloutform />
          </Route>
          <Route path="/carts/finishorder">
            <Cartsfinishorder />
          </Route>
          <Route path="/carts">
            <Carts
              productsInOrder={productsInOrder}
              setProductsInOrder={setProductsInOrder}
            />
          </Route>
          <Route path="/members/signup">
            <MemberSignUp />
          </Route>
          <Route exact path="/members/login">
            <MemberLogin auth={auth} setAuth={setAuth}/>
          </Route>
          <Route path="/members/forgot">
            <MemberForgotPass />
          </Route>
          <Route path="/members/password-change">
            <MemberPassChange />
          </Route>
          <Route path="/members/modify-member-info">
          {account && token ?  <MemberList account={account} token={token}/> : <Redirect to="/members/login"/>}
          </Route>
          <Route path="/members">
            <MemberLogin setAuth={setAuth}/>
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
export const LotteryContext = React.createContext({
  toggleLottery: "false",
  setToggleLottery: () => {},
});
export default App;
