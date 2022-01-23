import React, { PureComponent } from "react";
import "../styles.css";
import store from '../redux/store';

import GoodsItem from './GoodsItem';

class Goods extends PureComponent {
  state = {
    goods: []
  }

  componentDidMount() {
    const state = store.getState();
    this.setState({goods: state.goods })
  }
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Goods;