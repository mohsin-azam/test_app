import { StyleSheet } from 'react-native';
import { width } from '~utils/dimensions';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    // margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
    elevation: 4, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: width(1.5),
  },
  image: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRadius: {
    borderRadius: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
export default styles;
