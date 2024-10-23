import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, TextInput, Alert,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Lưu token
import Api from '../../../api/Api';


function SignIn({ navigation }) {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Hàm xử lý đăng nhập
    const handleSignIn = async () => {
        if (!username || !password) {
            Alert.alert('Lỗi', 'Vui lòng nhập username và mật khẩu.');
            return;
        }

        setLoading(true); // Hiển thị loading
        try {
            const response = await Api.post('/login', { username, password });
            console.log('Phản hồi từ server:', response);

            if (response) {
                const token = response.token;

                // Lưu token vào AsyncStorage
                await AsyncStorage.setItem('token', token);
                await AsyncStorage.setItem('username', username);
                console.log('Token lưu thành công:', token);
                // Alert.alert('Thành công', 'Đăng nhập thành công!');
                navigation.replace('Home'); // Chuyển màn hình
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Lỗi', 'Username hoặc mật khẩu không đúng.');
        } finally {
            setLoading(false); // Tắt loading
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../../assets/images/bg-doanthanhnien.png")} style={{
                flex: 1,
                justifyContent: 'center',
            }}>



                <View style={{ marginTop: 250 }}>
                    <Text style={styles.textEmail}>Tên đăng nhập:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nhập username của bạn..."
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Text style={styles.textPassword}>Mật khẩu:</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.textInputPassword}
                            placeholder="Nhập mật khẩu của bạn..."
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <Text style={styles.textForgotpassword}>Quên mật khẩu?</Text>

                    <TouchableOpacity style={styles.container1} onPress={handleSignIn}>
                        <Text style={styles.textSignIn}>
                            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.containerRegister}>
                        <Text style={styles.textCheckbox}>Bạn chưa có tài khoản? </Text>
                        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
                            <Text style={styles.textCheckbox1}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff"
    },
    text1: {
        color: "#114358",
        marginTop: 50,
        fontSize: 35,
        fontWeight: "bold",
        marginHorizontal: 25
    },
    text2: {
        color: "#114358",
        fontSize: 35,
        fontWeight: "bold",
        marginHorizontal: 25
    },
    text3: {
        marginTop: 7,
        color: "#878787",
        marginHorizontal: 25
    },
    textEmail: {
        marginTop: 50,
        marginHorizontal: 25,
        fontWeight: "bold"
    },
    textInput: {
        borderRadius: 10,
        borderColor: "#ccc",
        marginHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
    },
    textPassword: {
        marginTop: 10,
        marginHorizontal: 25,
        fontWeight: "bold"
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10,
        padding: 7.5,
    },
    textInputPassword: {
        flex: 1,
    },
    textForgotpassword: {
        marginLeft: 250,
        marginTop: 10,
        fontSize: 14,
        color: "#114358"
    },
    container1: {
        marginTop: 30,
        padding: 6,
        marginHorizontal: 35,
        paddingVertical: 17,
        paddingHorizontal: 20,
        backgroundColor: "#114358",
        borderRadius: 35
    },
    textSignIn: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    containerRegister: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: "center"
    },
    textCheckbox: {
        marginTop: 14,
        marginLeft: 10,
        fontWeight: "bold"
    },
    textCheckbox1: {
        marginTop: 14,
        color: "#114358",
        fontWeight: "bold"
    },
});
