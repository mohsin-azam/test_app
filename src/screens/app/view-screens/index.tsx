import { Header, ScreenWrapper } from '~components';
import { navProps } from '~utils/globalProps';
import styles from './styles';
import { View } from 'react-native';

export default function ViewScreens({ navigation }: navProps) {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header
          title="Movie Details"
          onBackPress={() => navigation?.goBack()}
        />
      </View>
    </ScreenWrapper>
  );
}
