import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container, Icon, Picker, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import CreatePostHeader from '../../Components/Header/CreatePostHeader'
const { height, width } = Dimensions.get('window')
const Post = () => {
  const colors = useTheme()
  const [dropdownValue, setDropdownValue] = useState('')
  const [dropdownValue1, setDropdownValue1] = useState('')
  const [select, setselect] = useState('')
  return (
    <Container>
      <CreatePostHeader title='Create New Post' />
      <View style={{
        ...styles.viewLine,
        marginVertical: 0,
        marginBottom: moderateScale(10)
      }} />
      <View
        style={styles.iconName}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={styles.imageUser}
        />
        <View>
          <Text
            style={styles.textStyle}>
            Sara Tylor
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%'
            }}>
            <Picker
              options={[
                {
                  label: 'Public',
                  value: 'Public'
                },
                {
                  label: 'Afinity Group',
                  value: 'Afinity Group'
                },
              ]}
              placeholder="Select"
              textStyle={{
                fontSize: 15
              }}
              selectedValue={dropdownValue}
              onValueChange={(val) => setDropdownValue(val)}
              containerStyle={{
                ...styles.picker,
                width: width / 2.6
              }}

            />

            {dropdownValue == 'Afinity Group' ?
              <Picker
                options={[
                  {
                    label: 'Item1',
                    value: 'Item1'
                  },
                  {
                    label: 'Item2',
                    value: 'Item2'
                  },
                  {
                    label: 'Item3',
                    value: 'Item3'
                  },
                ]}
                placeholder="Select Group"
                textStyle={{
                  fontSize: 15
                }}
                selectedValue={dropdownValue1}
                onValueChange={(val) => setDropdownValue1(val)}
                containerStyle={{
                  ...styles.picker,
                  marginLeft: moderateScale(10)
                }}

              />
              : null
            }
          </View>
        </View>
      </View>

      <AppTextInput
        inputStyle={{
          ...styles.fontStyl,
          fontSize: moderateScale(18)
        }}
        inputContainerStyle={{
          ...styles.inputContainer,
          height: moderateScale(100)
        }}
        placeholder='Share Moments That Matters'

      />
      <View style={{ flex: 1 }} />
      <View style={styles.viewLine} />
      <View
        style={styles.IconView}>
        <Image
          source={require('../../Assets/post/Camera.png')}
          resizeMode='contain'
          style={{
            ...styles.postImage,
          }}
        />
        <Image
          source={require('../../Assets/post/Gallery.png')}
          resizeMode='contain'
          style={{
            ...styles.postImage,
            marginHorizontal: moderateScale(35)
          }}
        />
        <Image
          source={require('../../Assets/post/Attach.png')}
          resizeMode='contain'
          style={{
            ...styles.postImage,
          }}
        />
      </View>
    </Container>
  )
}

export default Post

const styles = StyleSheet.create({
  profileImage: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(3),
    borderColor: '#D4A218'

  },
  inputContainer: {
    borderWidth: 0,
    height: moderateScale(100)
  },
  inputBox: {
    width: '100%',
    marginVertical: moderateScale(8)
  },
  topCard: {
    backgroundColor: '#f5f5f5f5',
    marginHorizontal: moderateScale(13),
    marginTop: moderateScale(10),
    paddingHorizontal: 0
  },
  fontStyl: {
    fontFamily: FONTS.Roboto.light,
    fontSize: moderateScale(14),
    marginLeft: moderateScale(10)
  },
  viewLine: {
    height: moderateScale(0.59),
    width: '100%',
    backgroundColor: '#818181',
    marginVertical: moderateScale(10)
  },
  inputContainer: {
    borderWidth: 0
  },
  IconView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: moderateScale(10),
    marginHorizontal: moderateScale(15)
  },
  postImage: {
    height: moderateScale(20),
    width: moderateScale(20)
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(13)
  },
  iconName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(15),
    marginTop: moderateScale(15)
  },
  imageUser: {
    height: moderateScale(40),
    width: moderateScale(40),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(80)
  },
  picker: {
    justifyContent: 'center',
    height: moderateScale(25),
    width: '45%',
    borderRadius: moderateScale(5)
  },
  textStyle: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(15)
  },

})