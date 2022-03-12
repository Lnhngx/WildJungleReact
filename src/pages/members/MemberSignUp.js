import React from "react";

import Signup from './components/Signup.js'

import './../members/tysu.css'
import './../members/members.css'

function MemberSignUp(){
    return (<>
        <div className="tysu_contain">
        <Signup />
        </div>
    </>)
}

export default MemberSignUp