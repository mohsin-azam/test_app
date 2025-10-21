import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: width(4),
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: height(25),
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 16,
  },
  gradient: {
    padding: height(4),
    justifyContent: 'flex-end',
  },
  title: {
    color: AppColors.white,
    fontSize: width(5),
    fontFamily: AppFonts.poppinsRegular,
    fontWeight: '500',
    position: 'absolute',
    left: width(5),
    bottom: width(5),
  },
});
export default styles;
