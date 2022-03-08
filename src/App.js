import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";
//頁首、頁尾、CSS
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//頁面元件
import HomePage from "./pages/homePage/homePage";
import Tour from "./pages/tour/tour";
import AnimalTouch from "./pages/animalTouch/animalTouch";
import Products from "./pages/products/products";
import Game from "./pages/game/Game";
import Members from "./pages/members/members";
import Orders from "./pages/orders/orders";
import NotFoundPage from "./pages/NotPage/NotFoundPage";


function App() {
  // 全域狀態
  //const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <Navbar />

        {/* 路由表 */}
        <Switch>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/tour">
            <Tour />
          </Route>
          <Route path="/animal-touch">
            <AnimalTouch />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/members">
            <Members />
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
