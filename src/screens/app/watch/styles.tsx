import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: width(5),
  },
  watchHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: height(3),
    backgroundColor: AppColors.white,
    paddingHorizontal: width(5),
    height: height(11),
  },
  headerText: {
    fontSize: width(4),
    fontFamily: AppFonts.poppinsRegular,
  },
  contentContainer: {
    paddingVertical: height(4),
  },
});
export default styles;
