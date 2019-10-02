import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, productItems }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>{productItems}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  productItems: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  productItems: state.cart.length,
});

export default connect(mapStateToProps)(Header);
