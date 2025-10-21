import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  headerImage: {
    width: width(100),
    height: height(55),
  },
  actionContent: {
    position: 'absolute',
    top: height(30),
    alignSelf: 'center',
  },
  outlineButton: {
    height: height(7),
    width: width(60),
    borderRadius: width(2.4),
    borderWidth: width(0.2),
    borderColor: AppColors.button,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  outlineButtonText: {
    fontSize: width(3.5),
    fontWeight: '600',
    fontFamily: AppFonts.poppinsRegular,
    color: AppColors.white,
  },
  header: {
    // height: height(5),
    width: width(20),
    position: 'absolute',
    left: width(5),
    top: height(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '500',
    fontFamily: AppFonts.poppinsRegular,
    color: AppColors.white,
    fontSize: width(4),
    marginLeft: width(2),
    marginTop: height(0.3),
  },
  imageShadow: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height(45),
  },
  actionText: {
    fontFamily: AppFonts.poppinsRegular,
    fontWeight: '500',
    fontSize: width(4),
    color: AppColors.white,
    alignSelf: 'center',
  },
  bottomContent: {
    paddingHorizontal: width(8),
    paddingVertical: height(3),
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height(2),
  },
  genresButton: {
    borderRadius: width(4),
    width: width(15),
    height: height(3.4),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width(2),
  },
  thinLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: AppColors.border,
    marginBottom: height(2),
  },
});
export default styles;
