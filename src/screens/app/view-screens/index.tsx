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

export default function ViewScreens({ navigation }: navProps) {
  const [selectedDate, setSelectedDate] = useState('1');
  return (
    <ScreenWrapper
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
      <Header title="Movie Details" onBackPress={() => navigation?.goBack()} />
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
          renderItem={({ item }) => (
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
                style={[
                  styles.sessionCard,
                  { borderColor: AppColors.selectedBorder },
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
          )}
        />
      </View>
    </ScreenWrapper>
  );
}
