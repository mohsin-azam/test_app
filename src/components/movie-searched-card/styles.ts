import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { width } from '~utils/dimensions';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: width(4),
    overflow: 'hidden',
    backgroundColor: AppColors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: width(32.5),
    height: width(25),
    borderRadius: width(4),
  },

  title: {
    color: AppColors.black,
    fontSize: width(4),
    fontFamily: AppFonts.poppinsRegular,
    fontWeight: '500',
    width: width(45),
  },
  category: {
    color: 'rgba(219, 219, 223, 1)',
    fontSize: width(3),
    fontFamily: AppFonts.poppinsRegular,
    width: width(45),
  },
  rightContainer: {
    marginLeft: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
export default styles;
