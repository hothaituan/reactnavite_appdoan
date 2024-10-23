
import 'react-native-gesture-handler';

import * as React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import MyTab from './screens/MyTab';

import PostDetail from './screens/components/post/PostDetail';
import AllPost from './screens/components/post/AllPost';
import Login from './screens/components/Athur/Login';
import SubCategory from './screens/components/category/SubCategory';



const Stack = createStackNavigator();

function App() {
    return (

        <Stack.Navigator initialRouteName="Login">


            <Stack.Screen
                name="Home"
                component={MyTab}
                options={{
                    headerShown: false,
                    title: 'Home Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetail}
                options={{
                    headerShown: false,
                    title: 'Home Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name="AllPost"
                component={AllPost}
                options={{
                    headerShown: false,
                    title: 'Home Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    title: 'Home Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    // headerShown: false
                }}
            />
            <Stack.Screen
                name="subcategory"
                component={SubCategory}
                options={{
                    headerShown: false,
                    title: 'Home Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                    // headerShown: false
                }}
            />

        </Stack.Navigator>

    );
}

export default App;
