import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width(5),
  },
  dateList: {
    paddingVertical: height(1),
    paddingRight: width(5),
    // backgroundColor: 'pink',
  },
  dateButton: {
    borderRadius: width(2.5),
    backgroundColor: AppColors.white,
    width: width(17),
    height: height(4.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateListGap: {
    width: width(3),
  },
  sessionList: {
    marginTop: height(2),
    paddingBottom: height(1),
    paddingRight: width(5),
  },
  sessionCard: {
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    borderWidth: 1,
    width: width(60),
    padding: width(4),
    height: height(20),
    justifyContent: 'center',
    marginVertical: height(1),
  },
  sessionImage: {
    width: width(36),
    height: height(16),
    marginVertical: height(1.5),
    alignSelf: 'center',
    // backgroundColor: 'pink',
  },
  horizontalTexts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: AppFonts.poppinsRegular,
    fontSize: width(3),
  },
  bold: {
    fontFamily: AppFonts.poppinsSemiBold,
  },
  footerButtonContainer: {
    alignItems: 'center',
    marginBottom: height(5),
  },
  growZero: {
    flexGrow: 0,
  },
});
export default styles;
