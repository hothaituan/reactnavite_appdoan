import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { ApiImages } from '../../../api/ApiImage';
import CategoryService from '../../../service/CategoryService';
import { useNavigation } from 'expo-router';


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        (async () => {
            try {
                const result = await CategoryService.getList();
                if (result.categorys) {
                    setCategories(result.categorys);
                } else {
                    throw new Error('Không có danh mục nào được trả về');
                }
            } catch (err) {
                console.error(err);
                setError(err.message);
                Alert.alert('Lỗi', 'Không thể tải danh mục. Vui lòng thử lại sau.');
            }
        })();
    }, []);

    const handleCategoryPress = (categoryId) => {
        navigation.navigate('subcategory', { categoryId }); // Chuyển sang màn hình SubCategory
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                {categories.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.item}
                        onPress={() => handleCategoryPress(item.id)}
                    >
                        <View style={styles.iconContainer}>
                            {item.thumbnail && (
                                <Image
                                    source={{ uri: `${ApiImages}/images/category/${item.thumbnail}` }}
                                    style={styles.icon}
                                />
                            )}
                        </View>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        marginTop: 10,
    },
    item: {
        alignItems: 'center',
        marginBottom: 12,
        width: 90,
    },
    iconContainer: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    text: {
        marginTop: 6,
        textAlign: 'center',
        fontSize: 10,
        color: '#333',
    },
});

export default Category;
