import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, ActivityIndicator, Alert } from 'react-native';
import PostService from '../../../service/PostService';
import { ApiImages } from '../../../api/ApiImage';
import { useRoute } from '@react-navigation/native'; // Chú ý cách import chính xác

const PostDetail = () => {
    const route = useRoute();
    const { postId } = route.params || {}; // Kiểm tra nếu params không tồn tại

    console.log('Received postId:', postId); // Debug

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!postId) {
            setError('Không tìm thấy ID bài viết.');
            setLoading(false);
            return;
        }

        const fetchPostDetail = async () => {
            try {
                const data = await PostService.getId(postId);
                setPost(data.post);
            } catch (err) {
                console.error(err);
                setError('Không thể tải nội dung bài viết.');
                Alert.alert('Lỗi', 'Không thể tải nội dung bài viết. Vui lòng thử lại sau.');
            } finally {
                setLoading(false);
            }
        };

        fetchPostDetail();
    }, [postId]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Nội dung bài viết</Text>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.posttitle}>{post?.title}</Text>
                <Text style={styles.postdate}>{post?.created_at}</Text>
                {post?.thumbnail && (
                    <Image
                        source={{ uri: `${ApiImages}/images/post/${post.thumbnail}` }}
                        style={styles.postImage}
                    />
                )}

                <Text style={styles.postContent}>{post?.content}</Text>
            </ScrollView>
        </View>
    );
};

export default PostDetail;

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#221ee6",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
    },
    postImage: {
        width: "auto",
        height: 200,
        margin: 10,
        borderRadius: 10,
    },
    posttitle: {
        margin: 10,
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: 'bold'
    },
    postdate: {
        margin: 10,
        color: "#888",
        fontSize: 12
    },
    postContent: {
        margin: 10,
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});
