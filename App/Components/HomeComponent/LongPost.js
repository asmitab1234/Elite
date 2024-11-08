import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-basic-elements';
import { FONTS } from '../../Constants/Fonts';
import { modeToNum } from 'react-native-big-calendar';
import { moderateScale } from '../../Constants/PixelRatio';

const LongPost = ({ content }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    // Function to count words in the content
    const countWords = (text) => {
        return text.split(/\s+/).length;
    };

    // Determine if the content should be truncated
    const shouldTruncate = countWords(content) > 100;

    return (
        <View
        style={{marginTop:moderateScale(13)}}>
            <Text numberOfLines={showFullContent ? undefined : 3}>{content}</Text>
            {shouldTruncate && !showFullContent && (
                <TouchableOpacity onPress={() => setShowFullContent(true)}>
                    <Text style={{
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: moderateScale(13)
                    }}>...See more</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default LongPost;
