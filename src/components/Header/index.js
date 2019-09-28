import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
