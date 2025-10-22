import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '~assets/images';
import styles from './styles';

interface MovieCardProps {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={image || Images.dummy_movie_image}
          style={styles.image}
          imageStyle={styles.imageRadius}
        >
          {/* Gradient overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientOverlay}
          />

          {/* Text should be placed AFTER gradient to stay visible */}
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
