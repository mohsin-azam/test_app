import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  seatSelectionContainer: {
    position: 'relative',
    height: height(50),
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: width(5),
    paddingBottom: width(10),
  },
  screenContainer: {
    marginBottom: width(5),
    alignItems: 'center',
  },
  screen: {
    width: width(100) - 60,
    backgroundColor: '#E5E7EB',
    borderColor: '#60A5FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 2,
  },
  seatsContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    fontWeight: '700',
    color: '#374151',
    textAlign: 'right',
  },
  seatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seat: {
    // Dynamic styles applied inline
  },
  seatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomControls: {
    position: 'absolute',
    bottom: height(2),
    right: width(4),
    gap: width(2),
    flexDirection: 'row',
  },
  zoomButton: {
    width: width(8),
    height: width(8),
    borderRadius: width(4),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  zoomButtonDisabled: {
    opacity: 0.5,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingHorizontal: width(5),
    paddingTop: height(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  legendContainer: {
    // marginBottom: 16,
    // backgroundColor: 'blue',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  legendBox: {
    marginRight: width(2),
  },

  selectedContainer: {
    marginVertical: height(4),
  },
  selectedInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    paddingVertical: height(1),
    paddingHorizontal: width(3),
    borderRadius: width(3),
    width: width(30),
  },

  clearButton: {
    // padding: 4,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width(3),
    marginTop: height(1),
  },
  totalContainer: {
    backgroundColor: '#F3F4F6',
    height: height(7),
    width: width(27),
    borderRadius: width(2.5),
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  proceedButton: {
    flex: 2,
    backgroundColor: AppColors.button,
    // paddingVertical: 18,
    height: height(7),
    borderRadius: width(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedButtonDisabled: {
    opacity: 0.5,
  },
});
export default styles;
