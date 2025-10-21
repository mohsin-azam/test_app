import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {
  MovieCard,
  MovieCategoryCard,
  ScreenWrapper,
  SearchBar,
  Spacer,
} from '~components';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

import { navProps } from '~utils/globalProps';
import styles from './styles';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';

const categories = [
  { id: '1', title: 'Action' },
  { id: '2', title: 'Comedy' },
  { id: '3', title: 'Horror' },
  { id: '4', title: 'Romance' },
  { id: '5', title: 'Sci-Fi' },
  { id: '6', title: 'Thriller' },
];

const movies = [
  {
    id: '1',
    title: 'Free Guy',
    // image: require('~assets/movies/freeguy.jpg'),
  },
  {
    id: '2',
    title: 'The Batman',
    // image: require('~assets/movies/batman.jpg'),
  },
  {
    id: '3',
    title: 'Inception',
    // image: require('~assets/movies/inception.jpg'),
  },
  {
    id: '4',
    title: 'Avatar',
    // image: require('~assets/movies/avatar.jpg'),
  },
];

export default function WatchScreen({ navigation }: navProps) {
  const [isCategory, setIsCategory] = useState(false);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      headerUnScrollable={() => (
        <>
          {isCategory ? (
            <View style={styles.watchHeaderContainer}>
              <SearchBar
                placeholder="TV shows, movies and more"
                onSearch={() => {}}
                handleCross={() => setIsCategory(!isCategory)}
              />
            </View>
          ) : (
            <View style={styles.watchHeaderContainer}>
              <Text style={styles.headerText}>Watch</Text>
              <TouchableOpacity
                hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
                onPress={() => setIsCategory(!isCategory)}
              >
                <MaterialIcons
                  name="search"
                  size={width(5)}
                  color={AppColors.black}
                />
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    >
      <View style={styles.container}>
        {isCategory ? (
          <FlatList
            key={isCategory ? 'categories' : 'movies'}
            data={categories}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <MovieCategoryCard title={item.title} image={item.image} />
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            ItemSeparatorComponent={() => <Spacer vertical={height(1.5)} />}
          />
        ) : (
          <FlatList
            data={movies}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <MovieCard title={item.title} image={item.image} />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer vertical={height(2)} />}
            contentContainerStyle={styles.contentContainer}
          />
        )}
      </View>
    </ScreenWrapper>
  );
}
