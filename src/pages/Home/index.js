import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native-gesture-handler';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  static propTypes = {
    addProductRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape({}).isRequired,
  };

  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const products = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products });
  };

  handleAddToCart = product => {
    const { addProductRequest } = this.props;

    addProductRequest(product.id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormated}</ProductPrice>

        <AddButton onPress={() => this.handleAddToCart(item)}>
          <ProductAmount>
            <Icon name="shopping-basket" color="#fff" size={14} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
