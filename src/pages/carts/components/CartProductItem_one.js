import React from "react";

function Cartproductitemone() {
  return (
    <>
      <div className="stan_product_space">
        <ul>
          <li>X</li>
          <li>這是圖片</li>
          <li className="stan_ds_product">法蘭絨動物兒童披風</li>
          <li className="stan_ds_product">$900</li>
          <li className="stan_ds_product stan_count_btn">
            <div className="stan_count_minus">
              <i class="fas fa-minus stan_btnicon"></i>
            </div>
            <input type="text" className="stan_btninput" value={1} />
            <div className="stan_count_add">
              <i class="fas fa-plus stan_btnicon"></i>
            </div>
          </li>
          
          <div className="stan_mo_product">
            <li>法蘭絨動物兒童披風</li>
            <li>$900</li>
            <li className="stan_count_btn">
              <div className="stan_count_minus">
                <i class="fas fa-minus stan_btnicon"></i>
              </div>
              <input type="text" className="stan_btninput" value={1} />
              <div className="stan_count_add">
                <i class="fas fa-plus stan_btnicon"></i>
              </div>
            </li>
          </div>
        </ul>
        <div className="stan_blackhr"></div>
      </div>
    </>
  );
}
export default Cartproductitemone;
