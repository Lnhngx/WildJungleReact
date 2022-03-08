import React from "react";
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import ForgotPass from './components/ForgotPass.js'
import ForgotPassChange from './components/ForgotPassChange.js'
import MemberInfo from './components/MemberInfo.js'

import './../members/tysu.css'

function members(){

    



    return(<>
      <div className="container tysu_contain">
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <ForgotPass /> */}
        {/* <ForgotPassChange /> */}
        <MemberInfo />
      </div>
    </>
  )
}

export default members