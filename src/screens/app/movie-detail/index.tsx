import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppText, Button, ScreenWrapper, Spacer } from '~components';
import { Movie, navProps } from '~utils/globalProps';
import styles from './styles';
import { height, width } from '~utils/dimensions';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { AppColors } from '~utils';
import LinearGradient from 'react-native-linear-gradient';
import ScreenNames from '~routes/routes';

export default function MovieDetail({ navigation, route }: navProps) {
  const details: Movie = route?.params?.details;
  const genres = [
    { name: 'Genres', color: 'rgba(21, 210, 188, 1)' },
    { name: 'Thriller', color: 'rgba(226, 108, 165, 1)' },
    { name: 'Science', color: 'rgba(86, 76, 163, 1)' },
    { name: 'Fiction', color: 'rgba(205, 157, 15, 1)' },
  ];
  return (
    <ScreenWrapper
      transclucent
      statusBarColor="transparent"
      barStyle="light-content"
      backgroundColor={AppColors.white}
    >
      <View style={styles?.container}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${details?.poster_path}`,
            }}
            resizeMode="cover"
            style={styles.headerImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.imageShadow}
          />
        </View>

        <TouchableOpacity
          style={styles?.header}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={width(6)}
            color={AppColors.white}
          />
          <Text style={styles?.headerText}>Watch</Text>
        </TouchableOpacity>
        <View style={styles.actionContent}>
          <Text style={styles.actionText}>
            In theaters {details?.release_date}
          </Text>
          <Spacer vertical={height(1)} />
          <Button
            title="Get Tickets"
            onPress={() => navigation.navigate(ScreenNames.VIEW_SCREENS)}
            width={width(60)}
            backgroundColor={AppColors.button}
          />
          <Spacer vertical={height(1)} />
          <TouchableOpacity style={styles?.outlineButton} activeOpacity={0.7}>
            <MaterialIcons
              name="play-arrow"
              size={width(6)}
              color={AppColors.white}
            />
            <Text style={styles.outlineButtonText}>Watch Trailer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles?.bottomContent}>
          <AppText
            size={4}
            fontFamily="poppinsMedium"
            color={AppColors.black}
            numberOfLines={2}
          >
            Genres
          </AppText>

          <View style={styles.genresContainer}>
            {genres.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.genresButton, { backgroundColor: item.color }]}
                activeOpacity={0.8}
              >
                <AppText
                  size={3}
                  fontFamily="poppinsMedium"
                  color={AppColors.white}
                  numberOfLines={1}
                >
                  {item.name}
                </AppText>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.thinLine} />
          <AppText
            size={4}
            fontFamily="poppinsMedium"
            color={AppColors.black}
            numberOfLines={2}
          >
            Overview
          </AppText>
          <Spacer vertical={height(2)} />
          <AppText
            size={3}
            fontFamily="poppinsRegular"
            color={AppColors.lightText}
            numberOfLines={7}
          >
            {details?.overview}
          </AppText>
        </View>
      </View>
    </ScreenWrapper>
  );
}
