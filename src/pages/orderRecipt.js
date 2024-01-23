import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableHighlight } from 'react-native';
import { useData } from '../hooks/hooks';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Rupee from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default function OrderRecipt({ navigation }) {

    const {recipt,baseURL} =useData()

    // useEffect(() => {
    //     const isUser = async () => {
    //         try {
    //             const value = await AsyncStorage.getItem('order');
    //             console.log(value)
    //             if (value !== null) {
    //                 setRecipt(JSON.parse(value))
                   
    //             } else {
    //                 console.log('No data found');
    //             }
    //         } catch (error) {
    //             console.log('Error retrieving data: ', error);
    //         }
    //     };
    //     isUser();
    //     console.log(recipt)
    // }, [])

    return (
        <>
            <View style={styles.homeWrapper}>
                <View style={styles.homeMain}>
                    <View style={styles.header}>
                        <Text>
                            <Icon name="menu" size={30} />
                        </Text>
                        <Text>
                            <Icon1 name="user" size={30} />
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.eatSomething}>
                            Let's Eat Something !
                        </Text>
                        <Text style={styles.delicious}>
                            DELICIOUS
                        </Text>
                    </View>

                    <View style={styles.container}>
                        <View>
                            <Image
                                style={styles.foodImage}
                                source={{ uri: `${baseURL}/img/${recipt?.img}` }}
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.foodName} >
                                {recipt?.item_name}
                            </Text>
                        </View>
                        <View style={styles.qrcode}>
                            <QRCode
                                value={recipt?.orderHash}
                                size={200}
                                color="black"
                                backgroundColor="white"
                            />
                        </View>
                        <View>
                            <Text
                                style={styles.name} >
                                {recipt.name}
                            </Text>
                        </View>
                        <View style={styles.delevery}>
                            <View style={styles.addressWrapper}>
                                <Icon1 name='location' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.address} >
                                    {recipt?.fullAddress}
                                </Text>
                            </View>
                            <View style={styles.dateWrapper}>
                                <Icon1 name='calendar' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.date} >
                                    {recipt.date[0]+recipt.date[1]+recipt.date[2]+recipt.date[3]+recipt.date[4]+recipt.date[5]+recipt.date[6]+recipt.date[7]+recipt.date[8]+recipt.date[9]}
                                </Text>
                            </View>
                            <View style={styles.timeWrapper}>
                                <Icon1 name='clock' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.time} >
                                    {`${recipt.startTime[11]+recipt.startTime[12]+recipt.startTime[13]+recipt.startTime[14]+recipt.startTime[15]} - ${recipt.endTime[11]+recipt.endTime[12]+recipt.endTime[13]+recipt.endTime[14]+recipt.endTime[15]}`}
                                </Text>
                            </View>
                            <View style={styles.priceWrapper}>
                                <Rupee name='rupee' size={25} color={'#FBBD10'} />
                                <Text
                                    style={styles.price} >
                                    {recipt?.price}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.NavWrapper}>
                <View style={styles.NavMain}>
                    <TouchableHighlight onPress={() => { navigation.navigate('Home') }}>
                        <Rupee name='home' size={30} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { navigation.navigate('OrderRecipt') }}>
                        <Text>Order</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { navigation.navigate('Login') }}>
                        <Icon2 name='logout' size={30} />
                    </TouchableHighlight>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    homeWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    homeMain: {

        width: '100%',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    eatSomething: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    delicious: {
        color: '#FBBD10',
        textAlign: 'center',
        fontSize: 20,
    },
    container: {
        width: 'auto',
        height: 'auto',
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    foodName: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 25,
        color: '#FBBD10'
    },
    addressWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    timeWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    dateWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    priceWrapper: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
    delevery: {
        width: 250,
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    name: {
        textAlign: 'center',
        fontSize: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
    },
    qrcode: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    NavWrapper: {
        position: 'absolute',
        bottom: 0,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
    },
    NavMain: {

        flexDirection: 'row',
        gap: 125,
    }

});
