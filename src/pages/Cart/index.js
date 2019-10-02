import React from 'react';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';
import { formatPrice } from '../../utils';

function Cart({
  updateProductAmountRequest,
  removeProductFromCart,
  products,
  total,
  subtotal,
}) {
  function increment(product) {
    updateProductAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateProductAmountRequest(product.id, product.amount - 1);
  }

  function removeFromCart(id) {
    removeProductFromCart(id);
  }

  return (
    <ScrollView>
      <Container>
        {products.length ? (
          <>
            <Products>
              {products.map(item => (
                <Product key={item.id}>
                  <ProductInfo>
                    <ProductImage source={{ uri: item.image }} />
                    <ProductDetails>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{item.priceFormated}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete onPress={() => removeFromCart(item.id)}>
                      <Icon
                        name="delete-forever"
                        size={24}
                        color={colors.primary}
                      />
                    </ProductDelete>
                  </ProductInfo>

                  <ProductControls>
                    <ProductControlButton onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductAmount value={String(item.amount)} />
                    <ProductControlButton onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductSubtotal>
                      {formatPrice(subtotal[item.id])}
                    </ProductSubtotal>
                  </ProductControls>
                </Product>
              ))}
            </Products>

            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{total}</TotalAmount>
              <Order>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </Order>
            </TotalContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </ScrollView>
  );
}

Cart.propTypes = {
  updateProductAmountRequest: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subtotal: PropTypes.shape({}).isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = ({ cart }) => ({
  products: cart,
  total: formatPrice(
    cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
  subtotal: cart.reduce((total, product) => {
    total[product.id] = product.price * product.amount;

    return total;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
