import MaterialIcons from '@react-native-vector-icons/material-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AppText from '~components/app-text';
import { AppColors, CommonStyles } from '~utils';
import AppFonts from '~utils/app-fonts';
import { width } from '~utils/dimensions';
import styles from './styles';

interface HeaderProps {
  title: string;
  subTitle: string;
  onBackPress: () => void;
  backgroundColor?: string;
  color?: string;
  showShadow?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  onBackPress,
  backgroundColor = AppColors.white,
  color = AppColors.black,
  showShadow = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        showShadow && styles.shadowStyle,
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onBackPress}
        style={styles.equalizer}
      >
        <MaterialIcons name="arrow-back-ios" size={width(5.5)} color={color} />
      </TouchableOpacity>

      <View style={CommonStyles.alignItemCenter}>
        <AppText color={AppColors.black} size={4} fontFamily={'poppinsMedium'}>
          {title}
        </AppText>
        <AppText color={AppColors.button} size={3}>
          {subTitle}
        </AppText>
      </View>
      <View style={styles?.equalizer} />
    </View>
  );
};

export default Header;
