/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Pressable} from '@react-native-material/core';

import {HomeLayout} from './HomeLayout';
import {ChatsLayout} from './ChatsLayout';
import {SettingsLayout} from './SettingsLayout';

import {
  default_window_background_dark,
  default_btn_inactive_bg_dark,
  default_btn_active_bg,
  default_white,
  default_primary_dark,
} from './Theme';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const default_btn_inactive_bg = isDarkMode
  //   ? default_btn_inactive_bg_dark
  //   : default_btn_inactive_bg_light;
  const default_btn_inactive_bg = default_btn_inactive_bg_dark;
  const [showHome, showHomeFunc] = useState(true);
  const [bgHome, setHomeActive] = useState(default_btn_active_bg);
  const [showChats, showChatsFunc] = useState(false);
  const [bgChats, setChatsActive] = useState(default_btn_inactive_bg);
  const [showSettings, showSettingsFunc] = useState(false);
  const [bgSettings, setSettingsActive] = useState(default_btn_inactive_bg);

  const backgroundStyle = {
    // backgroundColor: isDarkMode
    //   ? default_window_background_dark
    //   : default_window_background_light,
    backgroundColor: default_window_background_dark,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
      <StatusBar barStyle={'light-content'} />
      <View
        style={{
          // backgroundColor: isDarkMode
          //   ? default_window_background_dark
          //   : default_window_background_light,
          backgroundColor: default_window_background_dark,
        }}>
        <View style={styles.action_bar}>
          <Pressable
            style={[styles.action_bar_tab, {backgroundColor: bgHome}]}
            pressEffectColor={default_white}
            onPress={() => {
              showHomeFunc(true);
              showChatsFunc(false);
              showSettingsFunc(false);
              setHomeActive(default_btn_active_bg);
              setChatsActive(default_btn_inactive_bg);
              setSettingsActive(default_btn_inactive_bg);
            }}>
            <Text style={styles.action_bar_tab_text}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.action_bar_tab, {backgroundColor: bgChats}]}
            pressEffectColor={default_white}
            onPress={() => {
              showHomeFunc(false);
              showChatsFunc(true);
              showSettingsFunc(false);
              setHomeActive(default_btn_inactive_bg);
              setChatsActive(default_btn_active_bg);
              setSettingsActive(default_btn_inactive_bg);
            }}>
            <Text style={styles.action_bar_tab_text}>Chats</Text>
          </Pressable>
          <Pressable
            style={[styles.action_bar_tab, {backgroundColor: bgSettings}]}
            pressEffectColor={default_white}
            onPress={() => {
              showHomeFunc(false);
              showChatsFunc(false);
              showSettingsFunc(true);
              setHomeActive(default_btn_inactive_bg);
              setChatsActive(default_btn_inactive_bg);
              setSettingsActive(default_btn_active_bg);
            }}>
            <Text style={styles.action_bar_tab_text}>Settings</Text>
          </Pressable>
        </View>
        {showHome ? <HomeLayout /> : null}
        {showChats ? <ChatsLayout /> : null}
        {showSettings ? <SettingsLayout /> : null}
      </View>
    </SafeAreaView>
  );
};

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
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
  action_bar_tab: {
    height: 56,
    width: '33.33333333333333336%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: default_primary_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action_bar: {
    flexDirection: 'row',
    backgroundColor: default_primary_dark,
  },
  action_bar_tab_text: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
