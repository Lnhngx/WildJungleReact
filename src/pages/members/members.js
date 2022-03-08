import React from "react";
import Login from './Login.js'
import Signup from './Signup.js'

import './../members/tysu.css'

function members(){

    



    return(
    <div className="container tysu_contain">
    <h1 className="tysu_h1">LOGIN</h1>
    <Login />
    <Signup />
  </div>
  )
}

export default members