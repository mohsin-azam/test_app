import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColors.primary,
    fontSize: width(4),
  },
  icon: {
    height: width(5),
    width: width(5),
  },
});
export default styles;
