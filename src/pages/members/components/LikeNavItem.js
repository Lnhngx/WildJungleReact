import React from 'react';
import { Link } from 'react-router-dom'

import ProductLike from './ProductLike'
import ActivityLike from './ActivityLike'


function LikeNavItem(){
    return(<><ul className="tysu_memberChild">
    <li><Link to=""  className="tysu_link">商品</Link></li>
    <li><Link to=""  className="tysu_link">活動</Link></li>
  </ul>
  <hr className="tysu_hr" />
  <ul className="tysu_focusUnderLine tysu_memberChild">
    <Link to=""  className="tysu_link"><li></li></Link>
    <Link to=""  className="tysu_link"><li></li></Link>
    <img className="tysu_bg" src="./img/member/flower.svg" alt="" />
  </ul>
  {/* <ProductLike /> */}
  {/* <ActivityLike /> */}
  </>)
}
export default LikeNavItem;