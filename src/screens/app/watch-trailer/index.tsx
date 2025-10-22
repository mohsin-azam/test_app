import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
// import Orientation from 'react-native-orientation-locker';
import { ScreenWrapper } from '~components';
import { AppColors } from '~utils';

interface Props {
  route: { params: { videoKey: string } };
  navigation: any;
}

const WatchTrailer: React.FC<Props> = ({ route, navigation }) => {
  const { videoKey } = route.params;
  const [playing, setPlaying] = useState(true);

  // Lock orientation to landscape
  //   useFocusEffect(
  //     useCallback(() => {
  //       Orientation.lockToLandscape();
  //       return () => Orientation.unlockAllOrientations();
  //     }, []),
  //   );

  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    return () => backHandler.remove();
  }, [navigation]);

  const onStateChange = useCallback(
    (state: string) => {
      if (state === 'ended') {
        setPlaying(false);
        navigation.goBack();
      }
    },
    [navigation],
  );

  return (
    <ScreenWrapper statusBarColor={AppColors.white}>
      <View style={styles?.container}>
        <YoutubePlayer
          height={'100%'}
          width={'100%'}
          play={playing}
          videoId={videoKey}
          onChangeState={onStateChange}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.black,
  },
});

export default WatchTrailer;
