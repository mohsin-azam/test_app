import { AppText, Button, Header, ScreenWrapper, Spacer } from '~components';
import { navProps } from '~utils/globalProps';
import styles from './styles';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { AppColors } from '~utils';
import { dates, sessions } from './data';
import { useState } from 'react';
import { height, width } from '~utils/dimensions';
import Images from '~assets/images';
import ScreenNames from '~routes/routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ViewScreens({ navigation }: navProps) {
  const [selectedDate, setSelectedDate] = useState('1');
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper
      transclucent
      statusBarColor={AppColors.white}
      footerUnScrollable={() => {
        return (
          <View style={styles.footerButtonContainer}>
            <Button
              title="Select Seats"
              onPress={() => navigation.navigate(ScreenNames.BOOKING)}
              width={width(90)}
              backgroundColor={AppColors.button}
            />
          </View>
        );
      }}
    >
      <View style={{ marginTop: insets.top }}>
        <Header
          title="Movie Details"
          subTitle="In theaters december 22, 2021"
          onBackPress={() => navigation?.goBack()}
        />
      </View>

      <View style={styles.container}>
        <Spacer vertical={height(15)} />
        <AppText size={4} fontFamily="poppinsMedium" color={AppColors.black}>
          Date
        </AppText>
        <FlatList
          data={dates}
          style={styles?.growZero}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
          ItemSeparatorComponent={() => {
            return <View style={styles.dateListGap} />;
          }}
          renderItem={({ item }) => {
            const isActive = selectedDate === item.id;
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSelectedDate(item.id)}
                style={[
                  styles.dateButton,
                  {
                    backgroundColor: isActive
                      ? AppColors.button
                      : AppColors.inActiveSmallButtons,
                  },
                ]}
              >
                <AppText
                  fontFamily="poppinsMedium"
                  size={3}
                  color={isActive ? AppColors.white : AppColors.black}
                >
                  {item.label}
                </AppText>
              </TouchableOpacity>
            );
          }}
        />
        <Spacer vertical={height(2)} />
        <FlatList
          data={sessions}
          horizontal
          style={styles?.growZero}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.sessionList}
          ItemSeparatorComponent={() => {
            return <View style={styles.dateListGap} />;
          }}
          renderItem={({ item }) => {
            const isActive = selectedSession === item.id;
            return (
              <View>
                <View style={styles.horizontalTexts}>
                  <AppText
                    size={3}
                    color={AppColors.black}
                    fontFamily="poppinsMedium"
                  >
                    {item.time}
                  </AppText>
                  <AppText
                    size={3}
                    color={AppColors.lightText}
                    fontFamily="poppinsRegular"
                  >
                    {'  '}
                    {item.hall}
                  </AppText>
                </View>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setSelectedSession(item.id)}
                  style={[
                    styles.sessionCard,
                    {
                      borderColor: isActive
                        ? AppColors.selectedBorder
                        : AppColors.border,
                    },
                  ]}
                >
                  <Image
                    source={Images.seats}
                    resizeMode="contain"
                    style={styles.sessionImage}
                  />
                </TouchableOpacity>

                <Text style={styles.priceText}>
                  From <Text style={styles.bold}>{item.price}</Text> or{' '}
                  <Text style={styles.bold}>{item.bonus} bonus</Text>
                </Text>
              </View>
            );
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
