// src/components/News.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import PostService from '../../../service/PostService';
import { ApiImages } from '../../../api/ApiImage';
import { useNavigation } from 'expo-router';


const NewsItem = ({ item, navigation }) => (

    <TouchableOpacity style={styles.newsItem} onPress={() => {
        console.log('Navigating to PostDetail with postId:', item.id); // Debug
        navigation.navigate('PostDetail', { postId: item.id });
    }}>
        {item.thumbnail && (
            <Image src={`${ApiImages}/images/post/${item.thumbnail}`} alt={item.thumbnail} style={styles.newsImage} />
        )}
        <Text
            style={styles.newsTitle}
            numberOfLines={2}  // Giới hạn hiển thị 2 dòng
            ellipsizeMode="tail"  // Hiển thị "..." ở cuối nếu vượt quá
        >
            {item.title}
        </Text>
        <Text style={styles.newsDate}>{item.created_at}</Text>
    </TouchableOpacity>
);

const News = () => {
    const navigation = useNavigation();
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await PostService.getList();
                // Giả sử API trả về một mảng các bài viết
                setNewsData(data.posts);
                console.log("data post", data.posts)
            } catch (err) {
                console.error(err);
                setError('Không thể tải dữ liệu tin tức.');
                Alert.alert('Lỗi', 'Không thể tải dữ liệu tin tức. Vui lòng thử lại sau.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

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
        <View style={{ marginHorizontal: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {newsData.map((item) => (
                    <NewsItem key={item.id} item={item} navigation={navigation} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    newsItem: {
        marginTop: 20,
        width: 250,
        marginRight: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    newsImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    newsTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
        lineHeight: 20,
        // textTransform: 'uppercase'
    },
    newsDate: {
        fontSize: 12,
        color: '#888',
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

export default News;
