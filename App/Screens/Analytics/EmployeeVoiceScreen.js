import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Container, Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import BackHeader from '../../Components/Header/BackHeader'
import { BarChart, LineChart } from 'react-native-gifted-charts'
import PieChart from 'react-native-pie-chart'

const EmployeeVoiceScreen = () => {
  const responseArr = [
    {
      color: '#08E2FF',
      title: 'Response'
    },
    {
      color: '#4CB773',
      title: 'Skip'
    },
  ]
  const stackData = [
    {
      stacks: [
        { value: 10, color: '#A11717' },
        { value: 10, color: '#0D0368', marginBottom: 2 },
      ],
      label: 'Jan',
    },
    {
      stacks: [
        { value: 10, color: '#A11717' },
        { value: 11, color: '#0D0368', marginBottom: 2 },
      ],
      label: 'Mar',
    },
    {
      stacks: [
        { value: 10, color: '#A11717' },
        { value: 14, color: '#0D0368', marginBottom: 2 },
      ],
      label: 'Feb',
    },
    {
      stacks: [
        { value: 7, color: '#A11717' },
        { value: 11, color: '#0D0368', marginBottom: 2 },
      ],
      label: 'Mar',
    },
  ];
  const widthAndHeight = 150
  const series = [330, 321, 123]
  const sliceColor = ['#A11717', '#A0A0A0', '#0D0368']
  const data = [{ value: 15, label: 'Jan' }, { value: 30, label: 'Feb' }, { value: 26, label: 'Mar' }, { value: 40, label: 'Apr' }];
  return (
    <Container>
      <BackHeader title='Employee Voice' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

        <Text
          style={{
            ...styles.regularText,
            fontFamily: FONTS.Roboto.medium,
            // marginBottom: moderateScale(10)
          }}>
          Total Responses{" "}
          <Text
            style={{
              ...styles.regularText
            }}>
            36%
          </Text>
        </Text>

        <Text
          style={{
            ...styles.regularText,
            fontFamily: FONTS.Roboto.medium,
            marginBottom: moderateScale(10)
          }}>
          Rate{" "}
          <Text
            style={{
              ...styles.regularText
            }}>
            62%
          </Text>
        </Text>

        {responseArr.map((item, index) => (
          <View
            key={index}
            style={styles.row_view}>
            <View style={{
              width: moderateScale(10),
              height: moderateScale(10),
              backgroundColor: item.color
            }} />
            <Text
              style={{
                ...styles.regularText,
                marginLeft: moderateScale(8)
              }}>
              {item.title}
            </Text>
          </View>
        ))}
        <BarChart
          horizontal
          width={340}
          rotateLabel
          noOfSections={4}
          stackData={stackData}
        />
        <Text
          style={{
            ...styles.heading
          }}>
          Overall Score
        </Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.70}
        // coverFill={'#FFF'}
        />
        <LineChart
          data={data}
          color={'#3D89D1'}
          thickness={3}
          // dataPointsColor={'red'}
          hideDataPoints
          xAxisThickness={0}
          yAxisThickness={0}
        />
        <Card
          style={{
            marginTop: moderateScale(15),
          }}>
          <Text
            style={{
              ...styles.regularText,
              marginBottom: moderateScale(10)
            }}>
            Participant
          </Text>
          <View
            style={{
              ...styles.cardBox
            }}>
            <Text
              style={styles.heading}>
              Participattion Rate: 100%
            </Text>
            <View
              style={styles.row_view}>
              <Image
                source={require('../../Assets/Analytics/grenscore.png')}
                resizeMode='contain'
                style={styles.scoreImg}
              />
              <Text
                style={{
                  ...styles.regularText,
                  marginLeft: moderateScale(10)
                }}>
                Excellent
              </Text>
            </View>
          </View>
          <Text
            style={{
              ...styles.regularText,
              marginTop: moderateScale(10),
              textAlign: 'center'
            }}>
            Employess Surveyed
          </Text>
          <Text
            style={{
              ...styles.heading,
              // marginTop: moderateScale(10),
              textAlign: 'center'
            }}>
            3 Employess
          </Text>
        </Card>

        <Card
          style={{
            marginTop: moderateScale(15),
          }}>
          <Text
            style={{
              ...styles.regularText,
              marginBottom: moderateScale(10)
            }}>
            eNPS
          </Text>
          <View
            style={{
              ...styles.cardBox
            }}>
            <Text
              style={styles.heading}>
              Score-2
            </Text>
            <View
              style={styles.row_view}>
              <Image
                source={require('../../Assets/Analytics/redScore.png')}
                resizeMode='contain'
                style={styles.scoreImg}
              />
              <Text
                style={{
                  ...styles.regularText,
                  marginLeft: moderateScale(10)
                }}>
                To Improve
              </Text>
            </View>
            <View
              style={{
                height: moderateScale(1),
                width: '90%',
                backgroundColor: '#CAC9C9',
                marginVertical: moderateScale(10)
              }}
            />
            <Text
              style={{
                ...styles.regularText
              }}>
              Score = % of Promoters - % of Detractors
            </Text>
          </View>
          <Text
            style={{
              ...styles.regularText,
              marginTop: moderateScale(10),

            }}>
            Score Breakdown
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: moderateScale(10)
            }}>
            <View
              style={{
                width: moderateScale(85),
                height: moderateScale(30),
                backgroundColor: '#A11717',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Text
                style={{
                  ...styles.regularText,
                  color: '#FFFFFF'
                }}>
                30%
              </Text>
            </View>
            <View
              style={{
                width: moderateScale(70),
                height: moderateScale(30),
                backgroundColor: '#0D0368',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Text
                style={{
                  ...styles.regularText,
                  color: '#FFFFFF'
                }}>
                30%
              </Text>
            </View>
            <View
              style={{
                width: moderateScale(100),
                height: moderateScale(30),
                backgroundColor: '#A0A0A0',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Text
                style={{
                  ...styles.regularText,
                  color: '#FFFFFF'
                }}>
                30%
              </Text>
            </View>
          </View>
        </Card>

        <Card
          style={{
            marginVertical: moderateScale(15),

          }}>
          <Text
            style={{
              ...styles.regularText,
              marginBottom: moderateScale(10)
            }}>
            Biggest Change
          </Text>
          <View
            style={{
              ...styles.cardBox
            }}>
            <Image
              source={require('../../Assets/Analytics/bigchange.png')}
              style={styles.scoreImg}
              resizeMode='contain'
            />
            <Text
              style={styles.heading}>
              Learning & Development
            </Text>
          </View>
          <View
            style={{
              ...styles.row_view,
              justifyContent: 'space-between',
              marginVertical: moderateScale(10)
            }}>
            <View
              style={{
                alignItems: 'center'
              }}>
              <Text
                style={styles.regularText}>
               Previous Score
              </Text>
              <View
                style={styles.row_view}>
                <Image
                  source={require('../../Assets/Analytics/grenscore.png')}
                  resizeMode='contain'
                  style={styles.scoreImg}
                />
                <Text
                  style={{
                    ...styles.regularText,
                    marginLeft: moderateScale(10)
                  }}>
                  8
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center'
              }}>
              <Text
                style={styles.regularText}>
                Current Score
              </Text>
              <View
                style={styles.row_view}>
                <Image
                  source={require('../../Assets/Analytics/redScore.png')}
                  resizeMode='contain'
                  style={styles.scoreImg}
                />
                <Text
                  style={{
                    ...styles.regularText,
                    marginLeft: moderateScale(10)
                  }}>
                  8
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    </Container>
  )
}

export default EmployeeVoiceScreen

const styles = StyleSheet.create({
  row_view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  regularText: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(13),
  },
  heading: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(13),
  },
  cardBox: {
    backgroundColor: '#D6D6D6',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    marginHorizontal: moderateScale(20)
  },
  scoreImg: {
    height: moderateScale(25),
    width: moderateScale(25)
  }
})