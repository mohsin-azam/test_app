import { StyleSheet } from 'react-native';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: width(5),
    justifyContent: 'space-between',
    paddingVertical: height(2),
  },
  equalizer: {
    width: width(10),
  },

  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
});
export default styles;
