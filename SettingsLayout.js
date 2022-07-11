import React, {useState} from 'react';
import {AppRegistry, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {ListItem, Switch} from '@react-native-material/core';
import {
  default_window_background_dark,
  default_text_color,
  default_header_text_color,
} from './Theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function SettingsLayout() {
  const [checked, setChecked] = useState(true);
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.layout}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.text}>Settings</Text>
        </View>
        <ListItem
          style={styles.settings_element}
          title="List Item"
          trailing={
            <Switch
              value={checked}
              onValueChange={() => setChecked(!checked)}
            />
          }
          onPress={() => setChecked(!checked)}
        />
        <ListItem
          title="List Item"
          style={styles.settings_element}
          trailing={
            <Switch
              value={enabled}
              onValueChange={() => setEnabled(!enabled)}
            />
          }
          onPress={() => setEnabled(!enabled)}
        />
        <ListItem
          title="List Item"
          style={styles.settings_element}
          trailing={<Switch disabled />}
          disabled
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  layout: {
    height: screenHeight - 56,
  },
  text: {
    color: default_text_color,
    fontSize: 16,
  },
  settings_element: {
    color: default_header_text_color,
    fontSize: 16,
    backgroundColor: default_window_background_dark,
  },
});

AppRegistry.registerComponent('SettingsLayout', () => SettingsLayout);
