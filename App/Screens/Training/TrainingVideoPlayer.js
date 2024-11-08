import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    ActivityIndicator,
    Pressable, // Import ActivityIndicator for the loader
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
// import NavigationService from '../../../Services/Navigation';
// import Rn from 'first'
// import { verticalScale } from '../../../Constants/PixelRatio';
import { Icon as RnIcon } from 'react-native-basic-elements';
import { moderateScale, verticalScale } from '../../Constants/PixelRatio';
import NavigationService from '../../Services/Navigation';


const TrainingVideoPlayer = ({ url }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Loading state added
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const onProgress = (data) => {
        setCurrentTime(data.currentTime);
        // data.seekableDuration
        // console.log(data);

    };

    const onLoad = (data) => {
        setDuration(data.duration);

        setIsLoading(false); // Set loading to false when video is loaded
    };

    const onEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        videoRef.current?.seek(0);
    };

    const onSliderValueChange = (value) => {
        setIsPlaying(false)
        videoRef.current?.seek(value);
    };

    const renderPlayPauseIcon = () => {
        return isPlaying ? 'pause' : 'play';
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.round(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (videoRef.current) {
            //   videoRef.current.setVolume(isMuted ? 1 : 0); // Mute/unmute the video
        }
    };

    return (
        <View style={styles.container}>
            {/* Loader displayed while video is loading */}
            {isLoading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            )}
            <View style={styles.arrowSettingView}>
                <RnIcon name='left' type='AntDesign' color={'#FFFFFF'}
                    onPress={() => NavigationService.back()}
                />
                <View style={{ flex: 1 }} />

                {/* <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww' }}
                    style={styles.settingImgStyl}
                /> */}
            </View>

            <Video
                ref={videoRef}
                source={{ uri: url }}
                style={styles.video}
                resizeMode="contain"
                onProgress={onProgress}
                onLoad={onLoad}
                onEnd={onEnd}
                volume={isMuted ? 0 : 1}
                paused={!isPlaying}
            />
            <View style={styles.playBtn}>
                <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
                    <Icon name={renderPlayPauseIcon()} size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.controls}>
                <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseButton}>
                    <Icon name={renderPlayPauseIcon()} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.timer}>
                    {formatTime(currentTime)}
                </Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={duration}
                        value={currentTime}
                        minimumTrackTintColor="#fff"
                        maximumTrackTintColor="rgba(255, 255, 255, 0.5)"
                        thumbTintColor="#fff"
                        onValueChange={onSliderValueChange}
                    />
                </View>
                <Text style={styles.timer}>
                    {formatTime(duration)}
                </Text>
                {/* <Pressable onPress={toggleMute}>
                    <Image
                        source={require('../../../Assets/images/Profile/speaker.png')}
                        style={[styles.speakeraStyl, {

                        }]}
                        resizeMode='contain'
                    />

                </Pressable> */}
                {/* <TouchableOpacity
                >
                    <Image
                        source={require('../../../Assets/images/Profile/arrowexpand.png')}
                        style={[styles.speakeraStyl, {
                            marginHorizontal: moderateScale(7),
                        }]}
                        resizeMode='contain'
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999ab',
    },
    video: {
        width: '100%',
        height: verticalScale(230), // 16:9 aspect ratio
    },
    playBtn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    controls: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // backgroundColor:"red"
    },
    playPauseButton: {
        padding: 10,
        paddingVertical: 5,
    },
    sliderContainer: {
        flex: 1,
        marginHorizontal: 0,
    },
    slider: {
        width: '100%',
        height: 30,
    },
    timer: {
        color: '#fff',
    },
    loaderContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowSettingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        position: 'absolute',
        zIndex: 1,
        top: moderateScale(40)
    },
    settingImgStyl: {
        height: moderateScale(21),
        width: moderateScale(21)
    },
    vdoIconImage: {
        // height: moderateScale(100),
        // width: moderateScale(100),
        alignSelf: 'center',
        position: 'absolute',
        top: moderateScale(215) / 2,
        left: moderateScale(320) / 2
    },
    speakeraStyl: {
        height: moderateScale(13),
        width: moderateScale(13),
        marginLeft: moderateScale(10)
    },
});

export default TrainingVideoPlayer;
