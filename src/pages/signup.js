
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable,Alert } from 'react-native';

export default function SignUp({navigation}) {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    return (
        <>
            <View>
                <View style={styles.images}>
                    <Image
                        style={styles.image1}
                        source={require('../../assets/images/signup1.png')}
                    />
                    <View style={styles.images23}>
                        <Image
                            style={styles.image2}
                            source={require('../../assets/images/signup2.png')}
                        />
                        <Image
                            style={styles.image3}
                            source={require('../../assets/images/signup3.png')}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.welcome}>
                        START WITH FOOD BREAK !
                    </Text>
                </View>
                <View>

                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setUsername(value) }}
                        placeholderTextColor="gray"
                        value={username}
                        placeholder="Full Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setEmail(value) }}
                        placeholderTextColor="gray"
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setPassword(value) }}
                        value={password}
                         placeholderTextColor="gray"
                        placeholder="Password"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => { setRepass(value) }}
                        value={repass}
                         placeholderTextColor="gray"
                        placeholder="Re-Password"
                    />

                </View>
                <View>
                    <Pressable style={styles.button} onPress={() => { () => console.log("y");  }}>
                        <Text style={styles.text}>SignUp</Text>
                    </Pressable>
                </View>
                <View style={styles.line}>
                    <Text style={styles.note}>Allready Have Account  <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Login </Text> </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    images: {
        width: '100%',
        padding: 20,
        height: 350,
    },
    images23:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        gap:20,
    },
    image1: {
        width: '100%',
        height: 120,
        borderRadius: 20,
    },
    image2: {
        width: 145,
        height: 170,
        borderRadius: 20,
    },
    image3: {
        width: 145,
        height: 170,
        borderRadius: 20,
    },
    welcome: {
        textAlign: 'center',
        fontSize: 20,
        color:"black",
    },
    input: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        backgroundColor: 'transparent',
        width: 310,
        height: 40,
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 7,
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
    line:{
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
    },
    signup:{
        color:'#FBBD10'
    },

    note:{
        color:"black",
    }

});
