import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Heard from '../../screens/components/Heard'

import BannerOne from '../../screens/components/banner/BannerOne'
import News from '../../screens/components/post/News'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from '@mui/icons-material'
import Category from '../../screens/components/category/Category'



const Feed = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Heard />
            <ScrollView style={{ flex: 1 }}>
                <BannerOne />
                <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: "bold", fontSize: 15 }}>Danh mục</Text>
                <Category />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 20, marginLeft: 20, fontWeight: "bold", fontSize: 15, }}>Bài viết mới nhất</Text>
                    <TouchableOpacity style={styles.seeAllContainer} onPress={() => navigation.navigate('AllPost')}>
                        <Text style={styles.seeAllText}>Xem tất cả</Text>
                        <Icon name="chevron-right" size={20} color="#888" />
                    </TouchableOpacity>
                </View>
                <News />
            </ScrollView>
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    seeAllContainer: {
        flexDirection: 'row', // Sắp xếp theo hàng ngang
        alignItems: 'center', // Căn giữa theo chiều dọc
        marginTop: 20,
        marginLeft: 150,
    },
    seeAllText: {
        fontSize: 14,
        color: '#888',
        marginRight: 5, // Khoảng cách giữa text và icon
    },
})