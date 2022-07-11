import React from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View } from "react-native";
import {Dimensions} from 'react-native';
import {Pressable} from '@react-native-material/core';
import { default_accent, default_black, default_white } from "./Theme";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function ChatsLayout() {
  return (
    <View style={styles.layout}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
      <View style={styles.fab_frame}>
        <Pressable style={styles.fab} />
      </View>
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
    color: '#cecece',
    fontSize: 16,
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: default_accent,
    shadowColor: default_black,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  fab_frame: {
    width: 64,
    height: 64,
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});

AppRegistry.registerComponent('ChatsLayout', () => ChatsLayout);
