import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import SubCategoryService from '../../../service/SubCategoryService';

const SubCategory = ({ route }) => {
    const { categoryId } = route.params; // Nhận categoryId từ params
    const [subCategories, setSubCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await SubCategoryService.getListByCategoryId(categoryId);
                console.log('Category ID:', categoryId);
                if (result.subCategories) {
                    setSubCategories(result.subCategories);
                    console.log('data:', result.subCategories);
                } else {
                    throw new Error('Không có danh mục con nào được trả về');
                }
            } catch (err) {
                console.error(err);
                setError(err.message);
                Alert.alert('Lỗi', 'Không thể tải danh mục con. Vui lòng thử lại sau.');
            }
        })();
    }, [categoryId]);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.grid}>
                    {subCategories.map((item) => (
                        <View key={item.id} style={styles.item}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Cho phép các mục xuống dòng
        justifyContent: 'space-between', // Căn đều các mục
    },
    item: {
        marginBottom: 12,
        padding: 15,
        backgroundColor: '#ddd',
        borderRadius: 8,
        width: '48%', // Đảm bảo 2 mục mỗi dòng
        alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default SubCategory;
