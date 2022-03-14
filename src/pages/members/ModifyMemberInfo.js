import React from "react";
import MemberList from "./components/MemberList";
import MemberInfo from "./components/MemberInfo";
import MemberNavItem from "./components/MemberNavItem";

function ModifyMemberInfo(){
    return(<>
        <MemberList />
            <MemberNavItem />
                <MemberInfo />
                {/* <GradeInfo /> */}
                {/* <Creditcard /> */}
                {/* <CreditcardAdd /> */}
                {/* <AddressAdd /> */}
                {/* TODO: 用戶點哪個項目顯示哪個畫面 */}
    </>)
}
export default ModifyMemberInfo