import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { darken } from 'polished';

import colors from '../../styles/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  width: ${screenWidth * 0.7}px;
  border-radius: 4px;
  margin: 15px;
`;

export const ProductImage = styled.Image`
  height: 220px;
  width: 220px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  /* line-height: 21px; */
  color: #333;
  margin: 0px 10px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 10px;
  font-size: 21px;
  font-weight: bold;
  line-height: 25px;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
