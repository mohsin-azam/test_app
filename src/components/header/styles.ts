import { StyleSheet } from 'react-native';
import AppFonts from '~utils/app-fonts';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height(10),
    paddingHorizontal: width(4),
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: width(4),
    padding: width(1),
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
