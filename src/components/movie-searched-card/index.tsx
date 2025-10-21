import MaterialIcons from '@react-native-vector-icons/material-icons';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '~assets/images';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';
import styles from './styles';

interface MovieSearchedProps {
  title: string;
  category: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const MovieSearchedCard: React.FC<MovieSearchedProps> = ({
  title,
  category,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={image ? image : Images.dummy_movie_image}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <MaterialIcons
          name="more-horiz"
          color={AppColors.button}
          size={width(6)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieSearchedCard;
