import React from 'react';
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '~assets/images';
import styles from './styles';

interface CategoryCardProps {
  title: string;
  image?: ImageSourcePropType;
}

const MovieCategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={image ? { uri: image } : Images.dummy_movie_image}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        {/* Full dark shadow overlay */}
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
          style={styles.overlay}
        >
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default MovieCategoryCard;
