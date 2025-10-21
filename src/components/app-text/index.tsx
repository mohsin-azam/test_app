import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import styles from './styles';
import { width } from '~utils/dimensions';

interface AppTextProps extends RNTextProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  fontFamily?: keyof typeof AppFonts;
  weight?: TextStyle['fontWeight'];
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<AppTextProps> = ({
  children,
  color = AppColors.white,
  size = 4,
  fontFamily = 'poppinsRegular',
  weight = '400',
  style,
  ...rest
}) => {
  return (
    <RNText
      {...rest}
      style={[
        styles.text,
        {
          color,
          fontSize: width(size),
          fontFamily: AppFonts[fontFamily],
          fontWeight: weight,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default AppText;
