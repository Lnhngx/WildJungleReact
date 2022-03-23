import React from "react";

function CartProductItem(props) {
  const { sid, image, name, price, quantity, setQuantity } = props;
  return (
    <>
      <div className="stan_product_space">
        <ul>
          <li>X</li>
          <li>
            <img alt="" src={image} />
          </li>
          <li className="stan_ds_product">{name}</li>
          <li className="stan_ds_product">${price}</li>
          <li className="stan_ds_product stan_count_btn">
            <button
              className="stan_count_minus"
              onClick={() => {
                setQuantity(quantity - 1);
              }}
            >
              <i className="fas fa-minus stan_btnicon"></i>
            </button>
            <div className="stan_btninput">{quantity}</div>
            <button
              className="stan_count_add"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <i className="fas fa-plus stan_btnicon"></i>
            </button>
          </li>

          <div className="stan_mo_product">
            <li>{name}</li>
            <li>${price}</li>
            <li className="stan_count_btn">
              <button
                className="stan_count_minus"
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
              >
                <i className="fas fa-minus stan_btnicon"></i>
              </button>
              <input type="text" className="stan_btninput" defaultValue={quantity} />
              <button
                className="stan_count_add"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <i className="fas fa-plus stan_btnicon"></i>
              </button>
            </li>
          </div>
        </ul>
        <div className="stan_blackhr"></div>
      </div>
    </>
  );
}

export default CartProductItem;
