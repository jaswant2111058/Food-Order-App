import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackPramList } from "../../App"
import { useData } from '../hooks/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Loader from '../components/loader';



type LoginProps = NativeStackScreenProps<RootStackPramList, "Login">
const Login = ({ navigation }: LoginProps) => {

    const { isLoading, startLoading, stopLoading, setUser, baseURL } = useData();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const login = async () => {
    //     startLoading();
    //     try {
    //       const user = { email, password };
    //       console.log(user)
    //       const response = await axios.post(`${baseURL}/login`, user);
    //       console.log(response.data)
    //       if (response && response.data.user) {
    //         setUser(response.data.user);
    //         await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    //         navigation.navigate('Home');
    //       } else {
    //         console.error('Login failed. Unexpected response:', response);
    //         Alert.alert('Error', 'An unexpected error occurred during login.');
    //       }
    //     } catch (error) {
    //       console.error('Error during login:', error);
    //       Alert.alert('Error', 'An unexpected error occurred during login.');
    //     } finally {
    //       stopLoading();
    //     }
    //   };
    


    return (
        <>
            {isLoading?(<Loader />):null}
            <View>
                <View style={styles.images}>
                    <Image
                        style={styles.image1}
                        source={require('../../assets/images/login1.png')}
                    />
                    <View>
                        <Image
                            style={styles.image2}
                            source={require('../../assets/images/login2.png')}
                        />
                        <Image
                            style={styles.image3}
                            source={require('../../assets/images/login3.png')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.welcome}>
                        WELCOME TO FOOD BREAK !
                    </Text>
                </View>
                <View >
                    <TextInput
                        style={styles.input1}
                        onChangeText={(value) => { setEmail(value) }}
                        value={email}
                        placeholder="Email"
                        placeholderTextColor="gray"

                    />
                    <TextInput
                        style={styles.input1}
                        onChangeText={(value) => { setPassword(value) }}
                        value={password}
                        placeholder="Password"
                        placeholderTextColor="gray"
                    />
                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => {  navigation.navigate('Home'); }}>
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                </View>
                <View style={styles.lineWrapper}>
                    <Text style={styles.line} >Not Have Account  <Text style={styles.signup} onPress={() => navigation.navigate("SignUp")}>SignUp </Text> </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    images: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        padding: 20,
        height: 460,
        marginTop: 5
    },
    image1: {
        width: 150,
        height: 420,
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: 20,
    },
    image2: {
        width: 145,
        height: 210,
        borderRadius: 20,
    },
    image3: {
        width: 145,
        height: 200,
        borderRadius: 20,
        marginTop: 10
    },
    welcome: {
        textAlign: 'center',
        fontSize: 20,
        color: "black"
    },
    input1: {

        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        backgroundColor: 'transparent',
        width: 310,
        height: 40,
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: "black",
    },
    input2: {

        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        backgroundColor: 'transparent',
        width: 310,
        height: 40,
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        backgroundColor: '#FBBD10',
        marginTop: 10,
        width: 310,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    lineWrapper: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    line: {
        color: "black",
    },
    signup: {
        color: '#FBBD10'
    }

});
export default Login;