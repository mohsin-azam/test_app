import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { width } from '~utils/dimensions';

const styles = StyleSheet.create({
  icon: {
    height: width(5),
    width: width(5),
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
  text: {
    fontSize: width(4),
    fontFamily: AppFonts.robotoBold,
  },
});
export default styles;
