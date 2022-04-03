const host='http://localhost:4000';

const Config={
    TYSU_LOGIN:`${host}/members/login`,
    TYSU_SIGNUP:`${host}/members/signup`,
    TYSU_CONFIRM:`${host}/members/confirm`,
    TYSU_LOGOUT:`${host}/members/logout`,
    TYSU_FORGOT_PASS:`${host}/members/forgotpass`,
    TYSU_CHANGE_PASS:`${host}/members/changepass`,
    TYSU_MEMBER_INFO:`${host}/members/edit/`,
    TYSU_CREDITCARD_INFO:`${host}/members/creditcard/`,
    TYSU_CREDITCARD_ADD:`${host}/members/creditcard/add`,
    TYSU_CREDITCARD_DELETE:`${host}/members/creditcard/delete/`,
    TYSU_BONUS_INFO:`${host}/members/bonus/list/`,
    TYSU_CITY:`${host}/members/city/api`,
    TYSU_AREA:`${host}/members/711-areas/api/`,
}

export default Config;