import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ListRenderItem,
} from 'react-native';
import Images from '~assets/images';
import { AppText, Button, Header, ScreenWrapper, Spacer } from '~components';
import ScreenNames from '~routes/routes';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';
import { navProps } from '~utils/globalProps';
import { dates, sessions } from './data';
import styles from './styles';
import { useState } from 'react';

export default function ViewScreens({ navigation }: navProps) {
  const [selectedDate, setSelectedDate] = useState('1');
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  // render functions
  const renderDateItem: ListRenderItem<(typeof dates)[0]> = ({ item }) => {
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
  };

  const renderSessionItem: ListRenderItem<(typeof sessions)[0]> = ({
    item,
  }) => {
    const isActive = selectedSession === item.id;

    return (
      <View>
        <View style={styles.horizontalTexts}>
          <AppText size={3} color={AppColors.black} fontFamily="poppinsMedium">
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
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      footerUnScrollable={() => (
        <View style={styles.footerButtonContainer}>
          <Button
            title="Select Seats"
            onPress={() => navigation.navigate(ScreenNames.BOOKING)}
            width={width(90)}
            backgroundColor={AppColors.button}
          />
        </View>
      )}
    >
      <Header
        title="Movie Details"
        subTitle="In theaters December 22, 2021"
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <Spacer vertical={height(15)} />

        <AppText size={4} fontFamily="poppinsMedium" color={AppColors.black}>
          Date
        </AppText>

        <FlatList
          data={dates}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderDateItem}
          style={styles.growZero}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
          ItemSeparatorComponent={() => <View style={styles.dateListGap} />}
        />

        <Spacer vertical={height(2)} />

        <FlatList
          data={sessions}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderSessionItem}
          style={styles.growZero}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sessionList}
          ItemSeparatorComponent={() => <View style={styles.dateListGap} />}
        />
      </View>
    </ScreenWrapper>
  );
}
