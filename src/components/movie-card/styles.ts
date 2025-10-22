import { StyleSheet, Platform } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: width(4),
    backgroundColor: '#000',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: '100%',
    height: height(25),
    borderRadius: width(4),
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: width(4),
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    color: AppColors.white,
    fontSize: width(5),
    fontFamily: AppFonts.poppinsMedium,
    fontWeight: '600',
    position: 'absolute',
    bottom: width(5),
    left: width(5),
  },
});

export default styles;
