import React from 'react';
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '~assets/images';
import styles from './styles';

interface MovieCardProps {
  title: string;
  image: ImageSourcePropType;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={image ? { uri: image } : Images.dummy_movie_image}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default MovieCard;
