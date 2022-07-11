import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Button} from '@react-native-material/core';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function HomeLayout() {
  return (
    <View style={styles.layout}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Header />
          <Button title="Click Me" onPress={() => alert('🎉🎉🎉')} />
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curability
            leo ante, aliquam et varius et, euismod sit amet sapien. Morbi et
            euismod leo. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Curabitur vulputate in nulla id
            tristique. Aenean ornare ac est non scelerisque. Sed tempus bibendum
            commodo. Fusce at ultricies massa. Nam lobortis eros id magna
            malesuada, quis scelerisque velit venenatis. Aenean dictum tempor
            ornare. Fusce eget vulputate augue. Nam ullamcorper lorem eget
            gravida facilisis.
          </Text>
          <Text style={styles.text}>
            Aliquam ac nisi nec sapien rhoncus dictum. Curabitur vel aliquam
            libero. Mauris molestie pharetra nibh, varius interdum nisi
            fringilla sed. Nam tincidunt augue sed tristique ultrices. Nam
            tincidunt convallis tincidunt. Cras commodo dui lorem, at fermentum
            augue gravida eget. Etiam quis rutrum nisl. Duis mollis eros vel ex
            dapibus, vitae convallis magna sagittis. Phasellus quis malesuada
            augue. Maecenas vestibulum sit amet erat nec mollis.
          </Text>
          <Text style={styles.text}>
            Nam malesuada aliquam volutpat. Curabitur non ultrices dui.
            Suspendisse potenti. Nunc euismod et lacus id pharetra. Donec
            accumsan semper mi, nec feugiat metus. Suspendisse ex eros, lacinia
            sit amet volutpat non, ornare eget mauris. Nullam tempor non ipsum
            nec volutpat. Aliquam erat volutpat. Etiam nunc libero, viverra eu
            tellus ut, sodales finibus lacus. Integer quis efficitur nibh,
            maximus lobortis justo. Vivamus sollicitudin malesuada risus nec
            porta. Suspendisse dignissim dolor vitae ex pretium, ornare eleifend
            lectus semper. Nullam eu volutpat lectus. Aliquam ac mattis eros,
            sit amet fermentum turpis. Donec iaculis leo vitae luctus pulvinar.
            Aliquam quis magna nec quam vulputate luctus vitae tincidunt libero.
          </Text>
          <Text style={styles.text}>
            Sed in mauris eget orci egestas mattis. Maecenas pretium orci justo,
            a semper nulla imperdiet ut. Duis vel felis sapien. Praesent quis
            nisl convallis, feugiat nulla et, malesuada tellus. Duis elementum
            euismod ex dapibus laoreet. Ut eget ex porttitor ipsum euismod
            commodo a in risus. Quisque ullamcorper dapibus ultricies.
          </Text>
          <Text style={styles.text}>
            Aliquam et ante ac neque cursus porttitor. Donec purus metus,
            hendrerit a facilisis vitae, ultricies placerat dolor. Praesent
            augue ipsum, dapibus quis erat eu, tincidunt interdum tellus.
            Aliquam erat volutpat. Nullam ac arcu ac orci bibendum fringilla. Ut
            et urna aliquet, ultrices risus pharetra, porta elit. Aenean maximus
            molestie dui, eget convallis ex. Maecenas odio augue, dapibus nec
            ante tincidunt, hendrerit ultrices lacus. Nullam nec tortor feugiat,
            vehicula ante in, venenatis mi. Nunc ut volutpat diam. Donec
            interdum venenatis ex eget convallis. Nulla libero enim, pulvinar et
            lectus accumsan, ullamcorper efficitur nisi. Mauris a condimentum
            erat. Praesent lobortis semper justo consequat rutrum. Ut non
            ultricies est.
          </Text>
          <Text style={styles.text}>
            Nulla vel venenatis magna. Integer sit amet blandit felis, quis
            lacinia nisi. Phasellus maximus, nulla molestie euismod dictum,
            massa velit porttitor nisl, ac aliquam dui sem id dolor. Donec
            sollicitudin mi metus, nec porta turpis tincidunt vitae. Praesent
            ultrices mauris vel varius gravida. Pellentesque vestibulum quam
            lorem, ut mattis ex gravida semper. Proin at risus tortor. Quisque
            at diam nisl. Duis leo justo, pretium ac odio eget, rhoncus
            convallis urna. Vestibulum id imperdiet leo, vel vestibulum magna.
            Nullam sit amet volutpat quam. Nam id odio metus.
          </Text>
          <Text style={styles.text}>
            In leo est, sagittis et erat sed, cursus molestie arcu. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec auctor bibendum
            luctus. Aenean id magna ac lectus egestas tincidunt. Sed in lacinia
            risus, a tincidunt urna. Quisque vehicula tortor augue, et tempor
            erat laoreet nec. Maecenas et libero nec erat congue interdum. Nulla
            pulvinar scelerisque urna ut ornare. Nam tincidunt arcu at tortor
            tempus vestibulum. Proin eget urna et massa porta fermentum.
            Vestibulum euismod, orci non sodales tincidunt, est erat commodo
            orci, ac scelerisque risus magna vitae orci. Etiam vulputate ex
            fringilla arcu laoreet aliquam. Morbi vel fringilla est. Donec
            feugiat euismod massa, at iaculis augue semper vitae. Nullam odio
            erat, molestie ut ante sit amet, pretium lacinia nulla. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </Text>
          <Text style={styles.text}>
            Mauris elit nibh, ullamcorper quis tellus sit amet, vulputate
            faucibus enim. Nullam tempor posuere nibh, at volutpat risus
            tincidunt a. Suspendisse tristique nisl sed luctus laoreet. Etiam
            nec sapien ut quam auctor elementum. Mauris semper nisl posuere
            felis scelerisque fermentum. Etiam egestas, leo vitae varius ornare,
            orci massa pellentesque erat, quis posuere nunc dolor at metus. Cras
            a massa molestie neque tincidunt ultrices quis vitae elit. Aliquam
            semper neque id mi bibendum sollicitudin. Sed id purus eu dui
            scelerisque dapibus. Nunc aliquet magna eu arcu elementum mollis.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
            eu justo in purus commodo tempor.
          </Text>

          <Text style={styles.text}>
            Nulla fermentum dui non magna tincidunt hendrerit. Donec mollis, ex
            vel sodales euismod, turpis dui bibendum urna, vel iaculis turpis
            elit in felis. Praesent iaculis cursus sapien. Sed hendrerit orci
            augue, sollicitudin hendrerit nibh mattis vitae. Suspendisse
            ultricies velit pretium quam faucibus maximus. Maecenas commodo
            interdum quam, quis hendrerit purus. Suspendisse potenti. Maecenas
            enim lectus, tempor vitae est ut, hendrerit mollis nibh. Nulla
            facilisi. Aliquam a ante porta, gravida lorem eu, pulvinar nisl. Ut
            velit velit, egestas porta purus sit amet, rhoncus vulputate ipsum.
          </Text>
        </View>
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
    color: '#cecece',
    fontSize: 16,
  },
  progress_bar: {
    width: 100,
    height: 100,
  },
});

AppRegistry.registerComponent('HomeLayout', () => HomeLayout);
