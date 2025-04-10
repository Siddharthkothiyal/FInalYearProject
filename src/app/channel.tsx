import {View , Text ,TouchableOpacity,ScrollView,Image ,Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const channel={
    
        "input": {
          "url": "https://www.youtube.com/@jaidenanimations/about"
        },
        "url": "https://www.youtube.com/@jaidenanimations/about",
        "handle": "@jaidenanimations",
        "handle_md5": "4e2083f32de8c4dca0e500600bd36486",
        "banner_img": "https://yt3.googleusercontent.com/9b5DW0WsoUtzke1Q54ARDE26FqU4FXAgjnWKEihmDCgYAu2ZLN8qLhvD1WjQT-lFjDbg43HsHQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        "profile_image": "https://yt3.googleusercontent.com/6uDu4HmbcorfDWch6L4FAzv-DFMOstOwhTks-5VUm-kY5puZ_oU4EeA1YOqEM_EDvCTj3UPUW68=s160-c-k-c0x00ffffff-no-rj",
        "name": "JaidenAnimations",
        "subscribers": 14400000,
        "Description": "hi it's jaiden and bird\n\nchannel profile picture made by: me\nchannel banner art made by: https://twitter.com/motiCHIKUBI\n",
        "videos_count": 183,
        "created_date": "2014-02-16T00:00:00.000Z",
        "views": 2841930141,
        "Details": {
          "location": "United States"
        },
        "Links": [
          "jaidenanimations.com",
          "twitch.tv/jaidenanimations",
          "twitter.com/JaidenAnimation",
          "instagram.com/jaiden_animations"
        ],
        "identifier": "UCGwu0nbY2wSkW8N-cghnLpA",
        "id": "UCGwu0nbY2wSkW8N-cghnLpA",
        "timestamp": "2025-04-09T03:23:47.959Z"
      };


export default function Channel(){
    const handleLinkPress = (link: string) => {
        Linking.openURL(`https://${link}`);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1">
                {/* Banner Image */}
                <View className="w-full h-48">
                    <Image
                        source={{ uri: channel.banner_img }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                {/* Channel Info Section */}
                <View className="px-4 py-6">
                    <View className="flex-row items-center gap-4">
                        <Image
                            source={{ uri: channel.profile_image }}
                            className="w-20 h-20 rounded-full"
                        />
                        <View>
                            <Text className="text-2xl font-bold text-gray-900">{channel.name}</Text>
                            <Text className="text-gray-600">{channel.handle}</Text>
                            <View className="mt-2 flex-row gap-4">
                            <Text className="text-gray-600">{channel.subscribers.toLocaleString()} subscribers</Text>
                        </View>
                    </View>
                    </View>

                    {/* Description */}
                    <View className="mt-6">
                        <Text className="text-gray-900 font-semibold mb-2">About</Text>
                        <Text className="text-gray-700 leading-6">{channel.Description}</Text>
                    </View>

                    {/* Channel Stats */}
                    <View className="flex-row justify-between mt-6 bg-gray-50 p-4 rounded-lg">
                        <View className="items-center">
                            <Text className="text-2xl font-bold text-gray-900">{channel.videos_count}</Text>
                            <Text className="text-gray-600">Videos</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-bold text-gray-900">
                                {Math.floor(channel.views / 1000000)}M
                            </Text>
                            <Text className="text-gray-600">Views</Text>
                        </View>
                        <View className="items-center">
                            <Text className="text-2xl font-bold text-gray-900">
                                {new Date(channel.created_date).getFullYear()}
                            </Text>
                            <Text className="text-gray-600">Joined</Text>
                        </View>
                    </View>

                    {/* Location */}
                    {channel.Details.location && (
                        <View className="mt-6">
                            <Text className="text-gray-900 font-semibold mb-2">Location</Text>
                            <Text className="text-gray-700">{channel.Details.location}</Text>
                        </View>
                    )}

                    {/* Links */}
                    <View className="mt-6">
                        <Text className="text-gray-900 font-semibold mb-2">Links</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {channel.Links.map((link, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleLinkPress(link)}
                                    className="bg-gray-100 px-4 py-2 rounded-full"
                                >
                                    <Text className="text-blue-600">{link}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
