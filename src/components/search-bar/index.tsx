import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Icons } from '~assets';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';
import styles from './styles';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  handleCross?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  handleCross,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
    onSearch?.('');
    handleCross?.();
  };

  const handleChange = (text: string) => {
    setSearchText(text);
    onSearch?.(text);
  };

  return (
    <View style={styles.container}>
      {/* Left search icon */}

      <MaterialIcons
        name="search"
        size={width(5)}
        color={AppColors.black}
        style={styles.leftIcon}
      />

      {/* Middle input */}
      <TextInput
        value={searchText}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={styles.input}
      />

      {/* Right cross icon (only visible when there's text) */}
      <TouchableOpacity
        onPress={handleClear}
        hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
      >
        <Image
          source={Icons.close}
          style={styles.iconRight}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
