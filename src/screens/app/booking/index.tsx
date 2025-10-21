import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { Armchair, Plus, Minus } from 'lucide-react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const Booking = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const scale = useRef(new Animated.Value(1)).current;
  const baseScale = useRef(1);

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
  const bookedSeats = ['1-5', '2-8', '3-12', '4-15', '5-20', '7-10', '3-4'];

  const handleSeatPress = (seatId, isBooked) => {
    if (isBooked) return;

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const getSeatColor = (seatId, rowNum, isBooked) => {
    if (selectedSeats.includes(seatId)) return '#FFD700'; // Golden
    if (isBooked) return '#9CA3AF'; // Gray
    if (rowNum === 10) return '#7C3AED'; // Purple (Premium)
    return '#3B82F6'; // Blue (Normal)
  };

  const zoomIn = () => {
    const newZoom = Math.min(zoom + 0.2, 2.5);
    setZoom(newZoom);
  };

  const zoomOut = () => {
    const newZoom = Math.max(zoom - 0.2, 0.6);
    setZoom(newZoom);
  };

  const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: false,
  });

  const onPinchStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const newZoom = baseScale.current * event.nativeEvent.scale;
      const clampedZoom = Math.max(0.6, Math.min(2.5, newZoom));
      setZoom(clampedZoom);
      baseScale.current = clampedZoom;
      scale.setValue(1);
    }
  };

  const renderSeats = rowData => {
    const { row, seats, leftGap, rightGap } = rowData;
    const seatElements = [];

    // Add left gap
    for (let i = 0; i < leftGap; i++) {
      seatElements.push(
        <View key={`left-gap-${i}`} style={{ width: 24 * zoom }} />,
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
          onPress={() => handleSeatPress(seatId, isBooked)}
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

    // Center aisle
    seatElements.push(
      <View key={`aisle-${row}`} style={{ width: 32 * zoom }} />,
    );

    // Right side seats
    for (let i = leftSeats + 1; i <= seats; i++) {
      const seatId = `${row}-${i}`;
      const isBooked = bookedSeats.includes(seatId);

      seatElements.push(
        <TouchableOpacity
          key={seatId}
          onPress={() => handleSeatPress(seatId, isBooked)}
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
        <View key={`right-gap-${i}`} style={{ width: 24 * zoom }} />,
      );
    }

    return seatElements;
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <PinchGestureHandler
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={onPinchStateChange}
      >
        <Animated.View style={styles.gestureContainer}>
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
                        height: 80 * zoom,
                        borderRadius: 100 * zoom,
                        borderWidth: 3 * zoom,
                        borderBottomLeftRadius: 10 * zoom,
                        borderBottomRightRadius: 10 * zoom,
                      },
                    ]}
                  >
                    <Text style={[styles.screenText, { fontSize: 18 * zoom }]}>
                      SCREEN
                    </Text>
                  </View>
                </View>

                {/* Seat Grid */}
                <View style={styles.seatsContainer}>
                  {seatLayout.map(rowData => (
                    <View
                      key={rowData.row}
                      style={[styles.row, { marginBottom: 8 * zoom }]}
                    >
                      <Text
                        style={[
                          styles.rowLabel,
                          {
                            width: 30 * zoom,
                            fontSize: 16 * zoom,
                            marginRight: 10 * zoom,
                          },
                        ]}
                      >
                        {rowData.row}
                      </Text>
                      <View style={styles.seatsRow}>
                        {renderSeats(rowData)}
                      </View>
                    </View>
                  ))}
                </View>

                {/* Legend */}
                <View
                  style={[
                    styles.legend,
                    {
                      marginTop: 30 * zoom,
                      padding: 15 * zoom,
                      borderRadius: 10 * zoom,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.legendItem,
                      { marginHorizontal: 10 * zoom, marginVertical: 5 * zoom },
                    ]}
                  >
                    <Armchair size={20 * zoom} color="#3B82F6" fill="#3B82F6" />
                    <Text
                      style={[
                        styles.legendText,
                        { marginLeft: 8 * zoom, fontSize: 14 * zoom },
                      ]}
                    >
                      Available
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.legendItem,
                      { marginHorizontal: 10 * zoom, marginVertical: 5 * zoom },
                    ]}
                  >
                    <Armchair size={20 * zoom} color="#FFD700" fill="#FFD700" />
                    <Text
                      style={[
                        styles.legendText,
                        { marginLeft: 8 * zoom, fontSize: 14 * zoom },
                      ]}
                    >
                      Selected
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.legendItem,
                      { marginHorizontal: 10 * zoom, marginVertical: 5 * zoom },
                    ]}
                  >
                    <Armchair size={20 * zoom} color="#7C3AED" fill="#7C3AED" />
                    <Text
                      style={[
                        styles.legendText,
                        { marginLeft: 8 * zoom, fontSize: 14 * zoom },
                      ]}
                    >
                      Premium
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.legendItem,
                      { marginHorizontal: 10 * zoom, marginVertical: 5 * zoom },
                    ]}
                  >
                    <Armchair size={20 * zoom} color="#9CA3AF" fill="#9CA3AF" />
                    <Text
                      style={[
                        styles.legendText,
                        { marginLeft: 8 * zoom, fontSize: 14 * zoom },
                      ]}
                    >
                      Booked
                    </Text>
                  </View>
                </View>

                {/* Selected Seats Info */}
                {selectedSeats.length > 0 && (
                  <View
                    style={[
                      styles.selectedInfo,
                      {
                        marginTop: 20 * zoom,
                        padding: 15 * zoom,
                        borderRadius: 10 * zoom,
                      },
                    ]}
                  >
                    <Text
                      style={[styles.selectedText, { fontSize: 16 * zoom }]}
                    >
                      Selected Seats: {selectedSeats.join(', ')} (
                      {selectedSeats.length})
                    </Text>
                  </View>
                )}
              </View>
            </ScrollView>
          </ScrollView>
        </Animated.View>
      </PinchGestureHandler>

      {/* Zoom Controls */}
      <View style={styles.zoomControls}>
        <TouchableOpacity
          onPress={zoomIn}
          style={styles.zoomButton}
          disabled={zoom >= 2.5}
          activeOpacity={0.7}
        >
          <Plus size={24} color={zoom >= 2.5 ? '#9CA3AF' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={zoomOut}
          style={styles.zoomButton}
          disabled={zoom <= 0.6}
          activeOpacity={0.7}
        >
          <Minus size={24} color={zoom <= 0.6 ? '#9CA3AF' : '#000'} />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  gestureContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: 20,
  },
  screenContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  screen: {
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#E5E7EB',
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontWeight: 'bold',
    color: '#6B7280',
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
    fontWeight: 'bold',
    color: '#374151',
    textAlign: 'right',
  },
  seatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#FFF',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    color: '#374151',
  },
  selectedInfo: {
    backgroundColor: '#FFD700',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  zoomControls: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    gap: 10,
  },
  zoomButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Booking;
