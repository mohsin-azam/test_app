import { Armchair, Minus, Plus, X } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppText, Header, ScreenWrapper } from '~components';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';
import { navProps } from '~utils/globalProps';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CinemaSeatBooking = ({ navigation }: navProps) => {
  const insets = useSafeAreaInsets();
  const [zoom, setZoom] = useState(0.7);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Define seat layout for each row
  const seatLayout = [
    { row: 1, seats: 18, leftGap: 3, rightGap: 3 },
    { row: 2, seats: 22, leftGap: 1, rightGap: 1 },
    { row: 3, seats: 22, leftGap: 1, rightGap: 1 },
    { row: 4, seats: 22, leftGap: 1, rightGap: 1 },
    { row: 5, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 6, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 7, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 8, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 9, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 10, seats: 24, leftGap: 0, rightGap: 0 },
  ];

  // Some seats are already booked (example data)
  const bookedSeats = [
    '1-5',
    '2-8',
    '3-12',
    '4-15',
    '5-20',
    '7-10',
    '3-4',
    '2-3',
  ];

  const handleSeatPress = (seatId, isBooked, rowNum) => {
    if (isBooked) return;

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const getSeatColor = (seatId: any, rowNum: any, isBooked: any) => {
    if (selectedSeats.includes(seatId)) return '#DAA520';
    if (isBooked) return '#D1D5DB';
    if (rowNum === 10) return '#6366F1';
    return AppColors.button;
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.15, 1.3));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.15, 0.5));
  };

  const clearSelection = () => {
    setSelectedSeats([]);
  };

  const calculateTotal = () => {
    let total = 0;
    selectedSeats.forEach(seatId => {
      const rowNum = parseInt(seatId.split('-')[0]);
      if (rowNum === 10) {
        total += 150; // VIP price
      } else {
        total += 50; // Regular price
      }
    });
    return total;
  };

  const getSelectedByRow = () => {
    const rowCounts = {};
    selectedSeats.forEach(seatId => {
      const rowNum = parseInt(seatId.split('-')[0]);
      rowCounts[rowNum] = (rowCounts[rowNum] || 0) + 1;
    });
    return rowCounts;
  };

  const renderSeats = rowData => {
    const { row, seats, leftGap, rightGap } = rowData;
    const seatElements = [];

    // Add left gap
    for (let i = 0; i < leftGap; i++) {
      seatElements.push(
        <View key={`left-gap-${i}`} style={{ width: 18 * zoom }} />,
      );
    }

    // Add seats with center aisle
    const leftSeats = Math.floor(seats / 2);

    // Left side seats
    for (let i = 1; i <= leftSeats; i++) {
      const seatId = `${row}-${i}`;
      const isBooked = bookedSeats.includes(seatId);

      seatElements.push(
        <TouchableOpacity
          key={seatId}
          onPress={() => handleSeatPress(seatId, isBooked, row)}
          style={[styles.seatContainer, { padding: 4 * zoom }]}
          activeOpacity={isBooked ? 1 : 0.6}
        >
          <Armchair
            size={20 * zoom}
            color={getSeatColor(seatId, row, isBooked)}
            fill={getSeatColor(seatId, row, isBooked)}
          />
          {/* <ChairSvg
            width={18 * zoom}
            height={17 * zoom}
            fill={getSeatColor(seatId, row, isBooked)}
          /> */}
        </TouchableOpacity>,
      );
    }

    // Center aisle
    seatElements.push(
      <View key={`aisle-${row}`} style={{ width: 24 * zoom }} />,
    );

    // Right side seats
    for (let i = leftSeats + 1; i <= seats; i++) {
      const seatId = `${row}-${i}`;
      const isBooked = bookedSeats.includes(seatId);

      seatElements.push(
        <TouchableOpacity
          key={seatId}
          onPress={() => handleSeatPress(seatId, isBooked, row)}
          style={[styles.seatContainer, { padding: 4 * zoom }]}
          activeOpacity={isBooked ? 1 : 0.6}
        >
          <Armchair
            size={20 * zoom}
            color={getSeatColor(seatId, row, isBooked)}
            fill={getSeatColor(seatId, row, isBooked)}
          />
        </TouchableOpacity>,
      );
    }

    // Add right gap
    for (let i = 0; i < rightGap; i++) {
      seatElements.push(
        <View key={`right-gap-${i}`} style={{ width: 18 * zoom }} />,
      );
    }

    return seatElements;
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.white} transclucent>
      <View style={{ marginTop: insets.top }}>
        <Header
          title="Movie Details"
          subTitle="March 5, 2021  I  12:30 hall 1"
          onBackPress={() => navigation?.goBack()}
        />
      </View>

      {/* Seat Selection Area */}
      <View style={styles.seatSelectionContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              {/* Screen */}
              <View style={styles.screenContainer}>
                <View
                  style={[
                    styles.screen,
                    {
                      height: 60 * zoom,
                      borderRadius: 80 * zoom,
                      borderWidth: 2.5 * zoom,
                      borderBottomLeftRadius: 8 * zoom,
                      borderBottomRightRadius: 8 * zoom,
                    },
                  ]}
                >
                  <Text style={[styles.screenText, { fontSize: 14 * zoom }]}>
                    SCREEN
                  </Text>
                </View>
              </View>

              {/* Seat Grid */}
              <View style={styles.seatsContainer}>
                {seatLayout.map(rowData => (
                  <View
                    key={rowData.row}
                    style={[styles.row, { marginBottom: 4 * zoom }]}
                  >
                    <Text
                      style={[
                        styles.rowLabel,
                        {
                          width: 20 * zoom,
                          fontSize: 12 * zoom,
                          marginRight: 8 * zoom,
                        },
                      ]}
                    >
                      {rowData.row}
                    </Text>
                    <View style={styles.seatsRow}>{renderSeats(rowData)}</View>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </ScrollView>

        {/* Zoom Controls */}
        <View style={styles.zoomControls}>
          <TouchableOpacity
            onPress={zoomIn}
            style={[
              styles.zoomButton,
              zoom >= 1.3 && styles.zoomButtonDisabled,
            ]}
            disabled={zoom >= 1.3}
            activeOpacity={0.7}
          >
            <Plus size={24} color={zoom >= 1.3 ? '#D1D5DB' : '#000'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={zoomOut}
            style={[
              styles.zoomButton,
              zoom <= 0.5 && styles.zoomButtonDisabled,
            ]}
            disabled={zoom <= 0.5}
            activeOpacity={0.7}
          >
            <Minus size={24} color={zoom <= 0.5 ? '#D1D5DB' : '#000'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={styles.legendBox}>
                <Armchair size={width(6)} fill={'#DAA520'} color={'#DAA520'} />
              </View>

              <AppText
                size={3}
                color={AppColors.lightText}
                fontFamily="robotoMedium"
              >
                Selected
              </AppText>
            </View>
            <View style={styles.legendItem}>
              <View style={styles.legendBox}>
                <Armchair size={width(6)} fill={'#D1D5DB'} color={'#D1D5DB'} />
              </View>

              <AppText size={3} color={'#D1D5DB'} fontFamily="robotoMedium">
                Not available
              </AppText>
            </View>
          </View>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={styles.legendBox}>
                <Armchair size={width(6)} fill={'#6366F1'} color={'#6366F1'} />
              </View>

              <AppText size={3} color={'#6366F1'} fontFamily="robotoMedium">
                VIP (150$)
              </AppText>
            </View>

            <View style={styles.legendItem}>
              <View style={styles.legendBox}>
                <Armchair
                  size={width(6)}
                  fill={AppColors.button}
                  color={AppColors.button}
                />
              </View>

              <AppText
                size={3}
                color={AppColors.button}
                fontFamily="robotoMedium"
              >
                Regular (50 $)
              </AppText>
            </View>
          </View>
        </View>

        {/* Selected Seats Info */}
        {selectedSeats.length > 0 && (
          <View style={styles.selectedContainer}>
            <View style={styles.selectedInfo}>
              <AppText
                size={3.5}
                color={AppColors.black}
                fontFamily="poppinsMedium"
                weight={'700'}
              >
                {selectedSeats.length} /{' '}
                <AppText
                  size={2.5}
                  color={AppColors.black}
                  fontFamily="poppinsRegular"
                >
                  {Object.keys(getSelectedByRow()).length} row
                </AppText>
              </AppText>
              <TouchableOpacity
                onPress={clearSelection}
                style={styles.clearButton}
              >
                <X size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Payment Section */}
        <View style={styles.paymentContainer}>
          <View style={styles.totalContainer}>
            <AppText size={2.5} color={AppColors.black}>
              Total Price
            </AppText>
            <AppText
              size={4.5}
              color={AppColors.black}
              fontFamily="poppinsMedium"
              weight={'700'}
            >
              $ {calculateTotal()}
            </AppText>
          </View>
          <TouchableOpacity
            style={[
              styles.proceedButton,
              selectedSeats.length === 0 && styles.proceedButtonDisabled,
            ]}
            disabled={selectedSeats.length === 0}
            activeOpacity={0.8}
          >
            <AppText size={3.5} fontFamily="poppinsMedium">
              Proceed to pay
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

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
    padding: 20,
    paddingBottom: 40,
  },
  screenContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  screen: {
    width: SCREEN_WIDTH - 60,
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

export default CinemaSeatBooking;
