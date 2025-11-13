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
    backgroundColor: AppColors.white,
    paddingHorizontal: width(5),
    height: height(8),
  },
  headerText: {
    fontSize: width(4),
    fontFamily: AppFonts.poppinsRegular,
  },
  contentContainer: {
    paddingVertical: height(4),
  },
  topResultsContainer: {
    paddingVertical: height(1.5),
    borderBottomWidth: width(0.4),
    borderBottomColor: 'rgba(0, 0, 0, 0.11)',
    marginBottom: height(2),
  },
  topResultsText: {
    fontSize: width(3),
    fontFamily: AppFonts.poppinsRegular,
    fontWeight: '700',
  },
});
export default styles;
