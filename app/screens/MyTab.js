import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './../pages/home/Feed';
import Notifications from './../pages/home/Notifications';
import Profile from './../pages/home/Profile';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function MyTab() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0058c0',
                tabBarInactiveTintColor: '#777777',

                tabBarStyle: {
                    backgroundColor: '#fff',

                },
                // tabBarIconStyle: {
                //     marginBottom: -40, // Điều chỉnh margin để đưa icon xuống giữa
                // },

            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline" size={20} color={color} />),

                }}
            />
            <Tab.Screen
                name="QR"
                component={Profile}
                options={{
                    tabBarLabel: ' QR Điểm danh',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="qrcode-scan" size={20} color={color} />

                    ),
                }}
            />
            <Tab.Screen
                name="news"
                component={Profile}
                options={{
                    tabBarLabel: 'Tin tức',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="news" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-reactivate-outline" size={20} color={color} />

                    ),
                }}
            />
        </Tab.Navigator>
    );
}
