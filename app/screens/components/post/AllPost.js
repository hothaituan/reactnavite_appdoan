import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import TopicService from '../../../service/TopicService';
import PostService from '../../../service/PostService';
import { ApiImages } from '../../../api/ApiImage';
import { useNavigation } from '@react-navigation/native';

const AllPost = () => {
    const [topics, setTopics] = useState([]);
    const [posts, setPosts] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null); // Quản lý topic được chọn
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    // Lấy danh sách topic từ API
    useEffect(() => {
        (async () => {
            try {
                const result = await TopicService.getList();
                const topics = result.topics || [];
                setTopics(topics);

                // Nếu có topic, mặc định lấy bài viết của topic đầu tiên
                if (topics.length > 0) {
                    const firstTopicId = topics[0].id;
                    setSelectedTopic(firstTopicId); // Chọn topic đầu tiên
                    fetchPostsByTopic(firstTopicId);
                }
            } catch (err) {
                console.error(err);
                setError(err.message);
                Alert.alert('Lỗi', 'Không thể tải topic. Vui lòng thử lại sau.');
            }
        })();
    }, []);

    // Hàm lấy bài viết theo topic
    const fetchPostsByTopic = async (id) => {
        try {
            const result = await TopicService.getId(id);
            setPosts(result || []);
        } catch (err) {
            console.error(err);
            setError(err.message);
            Alert.alert('Lỗi', 'Không thể tải bài viết. Vui lòng thử lại sau.');
        }
    };

    // Hàm xử lý khi người dùng chọn một topic
    const handleSelectTopic = (id) => {
        setSelectedTopic(id); // Cập nhật topic được chọn
        fetchPostsByTopic(id);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bài viết</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#dddd' }}>
                    <AntDesign
                        name="bars"
                        size={24}
                        color="black"
                        style={{ marginTop: 10, marginLeft: 15 }}
                    />
                </View>
                <ScrollView horizontal style={{ backgroundColor: '#dddd' }}>
                    {topics.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handleSelectTopic(item.id)} // Chọn topic
                        >
                            <Text
                                style={[
                                    styles.topicText,
                                    selectedTopic === item.id && styles.selectedTopicText, // Đổi màu nếu được chọn
                                ]}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={{ margin: 10 }}>
                <ScrollView>
                    {posts.map((post) => (
                        <TouchableOpacity
                            key={post.id}
                            style={{ flexDirection: 'row', marginBottom: 15 }}
                            onPress={() => navigation.navigate('PostDetail', { postId: post.id })}
                        >
                            <View style={{ flex: 0.6 }}>
                                <Image
                                    source={{ uri: `${ApiImages}/images/post/${post.thumbnail}` }}
                                    style={styles.postImage}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.postTitle}>{post.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default AllPost;

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#221ee6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    topicText: {
        margin: 15,
        marginLeft: 30,
        color: 'black', // Màu mặc định
    },
    selectedTopicText: {
        color: '#221ee6', // Màu khi được chọn
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    postTitle: {
        marginLeft: 15,
        fontWeight: 'bold',
    },
});
