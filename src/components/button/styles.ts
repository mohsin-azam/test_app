import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  button: {
    height: height(7),
    borderRadius: width(2.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontFamily: AppFonts.poppinsRegular,
    fontSize: width(3.5),
    color: AppColors.white,
  },
});
export default styles;
