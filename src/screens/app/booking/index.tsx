import { Armchair, Minus, Plus, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AppText, Header, ScreenWrapper } from '~components';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';
import { navProps } from '~utils/globalProps';
import styles from './styles';

const CinemaSeatBooking = ({ navigation }: navProps) => {
  const [zoom, setZoom] = useState(0.5);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Define seat layout for each row
  const seatLayout = [
    { row: 1, seats: 24, leftGap: 0, rightGap: 0 },

    { row: 2, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 3, seats: 24, leftGap: 0, rightGap: 0 },
    { row: 4, seats: 24, leftGap: 0, rightGap: 0 },
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
  const inVisibleSeats = [
    '1-1',
    '1-2',
    '1-3',
    '1-23',
    '1-24',
    '1-25',
    '2-1',
    '2-24',
    '3-1',
    '3-24',
    '4-1',
    '4-24',
  ];
  const handleSeatPress = (seatId, isBooked, rowNum, isInVisible) => {
    if (isBooked) return;
    if (isInVisible) return;

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const getSeatColor = (
    seatId: any,
    rowNum: any,
    isBooked: any,
    isInVisible: any,
  ) => {
    if (selectedSeats.includes(seatId)) return '#DAA520';
    if (isBooked) return '#D1D5DB';
    if (isInVisible) return AppColors.transparent;
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

  const renderSeats = (rowData: any) => {
    const { row, seats } = rowData;
    const seatElements = [];

    // Define seat groups
    const leftBlockCount = 5;
    const middleBlockCount = 14;
    const rightBlockCount = 5;

    // Helper to render a block of seats
    const renderBlock = (startIndex: number, count: number) => {
      const elements = [];
      for (let i = startIndex; i < startIndex + count; i++) {
        const seatId = `${row}-${i}`;
        const isBooked = bookedSeats.includes(seatId);
        const isInVisible = inVisibleSeats.includes(seatId);

        elements.push(
          <TouchableOpacity
            key={seatId}
            onPress={() => handleSeatPress(seatId, isBooked, row, isInVisible)}
            style={[styles.seatContainer, { padding: 4 * zoom }]}
            activeOpacity={isBooked ? 1 : 0.6}
          >
            <Armchair
              size={20 * zoom}
              color={getSeatColor(seatId, row, isBooked, isInVisible)}
              fill={getSeatColor(seatId, row, isBooked, isInVisible)}
            />
          </TouchableOpacity>,
        );
      }
      return elements;
    };

    // 5 seats (left block)
    seatElements.push(...renderBlock(1, leftBlockCount));

    // First aisle gap
    seatElements.push(
      <View key={`gap1-${row}`} style={{ width: 24 * zoom }} />,
    );

    // 14 seats (middle block)
    seatElements.push(...renderBlock(leftBlockCount + 1, middleBlockCount));

    // Second aisle gap
    seatElements.push(
      <View key={`gap2-${row}`} style={{ width: 24 * zoom }} />,
    );

    // 5 seats (right block)
    seatElements.push(
      ...renderBlock(leftBlockCount + middleBlockCount + 1, rightBlockCount),
    );

    return seatElements;
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.white}>
      <View>
        <Header
          title="The King’s Man"
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

export default CinemaSeatBooking;
