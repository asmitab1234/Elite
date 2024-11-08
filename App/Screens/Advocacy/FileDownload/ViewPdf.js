import { ActivityIndicator, Alert, Dimensions, Linking, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppBar, AppButton, Container } from 'react-native-basic-elements';
import { COLORS } from '../../../Constants/Colors';
import RNFS from 'react-native-fs';
import FileViewer from "react-native-file-viewer";
import { FONTS } from '../../../Constants/Fonts';
import { moderateScale } from '../../../Constants/PixelRatio';
import NavigationService from '../../../Services/Navigation';
import { getOriginalname } from '../../../Utils/HttpClient';
// import NavigationService from '../../../Services/Navigation';
// import Pdf from 'react-native-pdf';
// import { getOriginalname } from '../../../Utils/HttpClient';
// import { getOriginalname } from '../../../Utils/HttpClient';
// import RNFetchBlob from 'rn-fetch-blob';

const ViewPdf = ({ route }) => {

  const { url } = route.params
  const [AllData, setAllData] = useState(null);

  const [DownLoding, setDownLoding] = useState(false)

  const [NotFoundPath, setNotFoundPath] = useState(false)
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Not started');


  const downloadProgress = (data) => {
    const progressValue = (data.bytesWritten / data.contentLength) * 100;
    setProgress(Math.round(progressValue));
  };
  // console.log("url", url);
  async function downloadPdf() {

    let originalnam = await getOriginalname(url)
    let pdfPath = `${RNFS.DownloadDirectoryPath}/${originalnam}`;
    const exists = await RNFS.exists(pdfPath);
    if (exists) {

      FileViewer.open(pdfPath) // absolute-path-to-my-local-file.
        .then(() => {
          NavigationService.back()
        })
        .catch((error) => {
          setNotFoundPath(pdfPath.split('.').pop())
        });
    } else {
      setDownLoding(true)
      RNFS.downloadFile({
        fromUrl: url,
        toFile: pdfPath,
        progressDivider: 1,
        begin: (res) => {
          setStatus('Downloading...');
        },
        progress: downloadProgress,

      }).promise.then(r => {
        setDownLoding(false)
        FileViewer.open(pdfPath) // absolute-path-to-my-local-file.
          .then(() => {

            NavigationService.back()
          })
          .catch((error) => {

            setNotFoundPath(pdfPath.split('.').pop())
          })
          .catch(err => {
            // NavigationService.back()
            // Alert.alert("Unso")
          })
        // setAllData(pdfPath);
        console.log('complete');
      });


    }

  }
  // RNFetchBlob.config({
  //   useDownloadManager : true, 
  //   fileCache : true
  // })
  // .fetch('GET',url)
  // .then(res => {
  //   console.log(res);
  //   alert("Download");
  //   alert('The file saved to ', res.path());
  // })
  useEffect(() => {
    if (Platform.OS == "ios") {
      Linking.openURL(url)
      NavigationService.back()
    } else {
      downloadPdf()
    }
    return () => {

    }
  }, [])

  return (
    <Container>
      <AppBar.Back title='View File' onLeftIconPress={() => NavigationService.back()} />
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 20
      }}>
        {DownLoding &&
          <>
            <ActivityIndicator color={COLORS.primaryFontColor} size={'large'} />
            <Text style={{
              color: COLORS.primaryFontColor,
              fontFamily: FONTS.Roboto.regular,
              fontSize: moderateScale(18),
              marginTop: moderateScale(15)
            }}>Downloading File ({progress}%) ...</Text>
          </>}
        {NotFoundPath && <><Text style={{
          color: COLORS.primaryFontColor,
          fontFamily: FONTS.Roboto.bold,
          fontSize: moderateScale(17),
          textAlign: "center"
        }}> {NotFoundPath} Viewer is Not Available on Your Device! 📁</Text>
          <Text style={{
            color: COLORS.primaryFontColor,
            fontFamily: FONTS.Roboto.regular,
            fontSize: moderateScale(15),
            textAlign: "center",
            marginTop: 15
          }}> Please download the appropriate viewer to access this file.</Text>
          <AppButton
            textStyle={{
              color: "#fff",

            }}
            style={{
              marginTop: 20,
              height: 40,
              paddingHorizontal: 20
            }}
            title='Download From Playstore'
            onPress={() => {
              Linking.openURL(`https://play.google.com/store/search?q=${NotFoundPath}+viewer&c=apps`)
            }}
          />
        </>}
      </View>

    </Container>
  )
}

export default ViewPdf

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})