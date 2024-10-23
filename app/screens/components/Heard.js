import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Heard = () => {
    const [username, setUsername] = useState('');

    // Lấy username từ AsyncStorage khi thành phần được mount
    useEffect(() => {
        const fetchUsername = async () => {
            const storedUsername = await AsyncStorage.getItem('username');
            if (storedUsername) {
                setUsername(storedUsername);
            }
        };
        fetchUsername();
    }, []);

    return (
        <View style={{}}>
            <View style={{ backgroundColor: "#221ee6", flexDirection: "column", height: 70 }}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../../../assets/images/icon.png')}
                        style={styles.iconStyle}
                        resizeMode="contain"
                    />
                    <View>
                        <Text style={styles.greetingText}>Xin chào, {username}</Text>
                    </View>
                    <View style={styles.searchIconContainer}>
                        <MaterialIcons name="search" size={26} color="white" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Heard;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    greetingText: {
        fontWeight: "bold",
        color: "white",
    },
    searchIconContainer: {
        marginLeft: 'auto',
        justifyContent: "center",
        alignItems: "center",
    },
});
