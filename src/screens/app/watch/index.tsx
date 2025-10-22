import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '~assets/images';
import {
  getMovieCategories,
  getUpcomingMovies,
  searchMovies,
} from '~backend/api';
import {
  MovieCard,
  MovieCategoryCard,
  MovieSearchedCard,
  ScreenWrapper,
  SearchBar,
  Spacer,
} from '~components';
import ScreenNames from '~routes/routes';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';
import { Movie, MovieCategory, navProps } from '~utils/globalProps';
import styles from './styles';

export default function WatchScreen({ navigation }: navProps) {
  const [isCategory, setIsCategory] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [categories, setCategories] = useState<MovieCategory[]>([]);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchUpComingMovies();
    fetchCategories();
  }, []);
  const fetchUpComingMovies = async () => {
    await getUpcomingMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(() => {
        //handle error here
      });
  };
  const fetchCategories = async () => {
    await getMovieCategories()
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => {
        //handle error here
      });
  };
  const fetchMovies = useCallback(async (text: string) => {
    if (!text) {
      setIsSearching(false);
      setSearchedMovies([]); // Clear list when there's no search input
      return;
    }

    try {
      await searchMovies(text).then(movies => {
        setSearchedMovies(movies);
      });
    } catch (error) {
      console.log('Error fetchMovies:', error);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleSearch = useCallback(
    (text: string) => {
      setIsSearching(true);
      // setSearch(text);

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        fetchMovies(text);
      }, 500);
    },
    [fetchMovies],
  );
  //render functions
  const renderSearchedMoviesHeader = () => {
    return (
      <View style={styles.topResultsContainer}>
        <Text style={styles.topResultsText}>Top Results</Text>
      </View>
    );
  };
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      headerUnScrollable={() => (
        <>
          {isCategory ? (
            <View style={styles.watchHeaderContainer}>
              <SearchBar
                placeholder="TV shows, movies and more"
                onSearch={handleSearch}
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
          <>
            {isSearching ? (
              <ActivityIndicator size={'small'} color={AppColors.primary} />
            ) : (
              <>
                {searchedMovies?.length != 0 ? (
                  <FlatList
                    data={searchedMovies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                      <MovieSearchedCard
                        title={item.title}
                        image={
                          item.poster_path
                            ? {
                                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                              }
                            : Images.dummy_movie_image
                        }
                        category={item?.original_title}
                        onPress={() => {
                          navigation.navigate(ScreenNames.MOVIE_DETAIL, {
                            details: item,
                          });
                        }}
                      />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                      <Spacer vertical={height(2)} />
                    )}
                    ListHeaderComponent={renderSearchedMoviesHeader}
                    contentContainerStyle={styles.contentContainer}
                  />
                ) : (
                  <FlatList
                    key={isCategory ? 'categories' : 'movies'}
                    data={categories}
                    keyExtractor={item => item.id?.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <MovieCategoryCard title={item.name} />
                      </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    ItemSeparatorComponent={() => (
                      <Spacer vertical={height(1.5)} />
                    )}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <FlatList
            data={movies}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard
                title={item.title}
                image={
                  item.poster_path
                    ? {
                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                      }
                    : Images.dummy_movie_image
                }
                onPress={() => {
                  navigation.navigate(ScreenNames.MOVIE_DETAIL, {
                    details: item,
                  });
                }}
              />
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
