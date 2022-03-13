import React from "react";
import MemberList from "./components/MemberList";
import MemberInfo from "./components/MemberInfo";
import MemberNavItem from "./components/MemberNavItem";

function ModifyMemberInfo(){
    return(<>
        <MemberList />
            <MemberNavItem />
                <MemberInfo />


    </>)
}
export default ModifyMemberInfo