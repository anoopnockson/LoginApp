import React, {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import Storage from "@react-native-community/async-storage"
//import { NavigationBar } from 'navigationbar-react-native';

import {createSwitchNavigator, createStackNavigator, createDrawerNavigator , createAppContainer} from 'react-navigation';
    
import Login from'./Screens/Login'
import Tab from'./Screens/Tab'
//import LoginScreen from './Screens/Login';

const RootStack = createStackNavigator( {
    Login: {
      screen: Login,
    },
    Tab: {
        screen: Tab,
    },
})

class AuthLoadingScreen extends Component {
    async componentDidMount(){
        const {navigation: {navigate}} = this.props;
        const token = await Storage.getItem("@token");
        if(token){
            navigate("home");
        }else { 
            navigate("auth");
        }
    }
    
    render(){
        return (
            <View/>
        )
    }
}

const LoginScreen = ({navigation: {navigate}}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                alert('clicekd')
                navigate("register")
            }}>
                
            <Text>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate("home")}>
            <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const RegisterScreen = () => {
    return (
        <View>
            <Text>Regisetr</Text>
        </View>
    )
}

const MainScreen = ({navigation: {navigate}}) => {
    return (
        <View>
            <Text>Hello</Text>

            <TouchableOpacity onPress={() => navigate("login")}>
            <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const SettingsScreen = () => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}
const AuthStack = createStackNavigator({ 
    login: LoginScreen,
    register: RegisterScreen
}, {
    defaultNavigationOptions: {
        header: null
    }
 });

const HomeStack = createDrawerNavigator({ 
    main: MainScreen,
    settings: SettingsScreen
}, {
    drawerWidth: 300
  });



const switchNavigator = createSwitchNavigator({
    authLoading: AuthLoadingScreen,
    auth: AuthStack,
    home: HomeStack
});

const App = createAppContainer(switchNavigator);

export default App;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
