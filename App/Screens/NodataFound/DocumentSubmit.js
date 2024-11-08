import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
const DocumentSubmit = ({tittle = false}) => {
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <LottieView
        source={require('../../Assets/Images/subdock.json')}
        style={{
          width: moderateScale(250),
          height: moderateScale(250),
          top: -70,
        }}
        autoPlay
        loop
      />
      {tittle && <Text style={{...styles.Searches_text}}>{tittle}</Text>}
    </View>
  );
};

export default DocumentSubmit;

const styles = StyleSheet.create({
  Searches_text: {
    color: 'rgba(255, 0, 60, 1)',
    fontSize: moderateScale(20),
    fontFamily: FONTS.Roboto.regular,
    alignSelf: 'center',
    justifyContent: 'center',
    // alignItems:"center"
    marginTop: moderateScale(70),
  },
});
