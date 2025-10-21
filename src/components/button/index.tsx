import React from 'react';
import {
  DimensionValue,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { AppColors } from '~utils';
import styles from './styles';

interface RoundButtonProps {
  title: string;
  onPress: () => void;
  width?: DimensionValue;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<RoundButtonProps> = ({
  title,
  onPress,
  width = '80%',
  backgroundColor = AppColors?.black || '#000',
  textColor = '#fff',
  fontSize = 16,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width as DimensionValue,
          backgroundColor: disabled ? AppColors.disabled : backgroundColor,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor, fontSize }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
