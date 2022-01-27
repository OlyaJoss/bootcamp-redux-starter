import React, { PureComponent } from "react";
import "../styles.css";
import { connect } from "react-redux";
// import store from '../redux/store';
import addToCard from "../redux/actions";


class GoodsItem extends PureComponent {
  
  render() {
    const { title, description, price, id } = this.props;
   console.log(this.props.addToCart);
   
    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button onClick={()=> this.props.addToCart(id)} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (id) => dispatch(addToCart(id))
})

const mapStateToProps = (state) => ({
    goods: state.goods,
});
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(GoodsItem)