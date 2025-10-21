import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: width(7),
    paddingHorizontal: width(3),
    paddingVertical: height(1.8),
    // marginBottom: 16,
    backgroundColor: AppColors.background,
  },
  //
  leftIcon: {
    marginHorizontal: width(1.5),
  },
  input: {
    flex: 1,
    fontSize: width(3.5),
    color: '#000',
    paddingVertical: 0,
  },
  iconRight: {
    // marginLeft: 6,
    tintColor: AppColors.black,
    height: width(7),
    width: width(7),
  },
});
export default styles;
