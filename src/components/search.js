import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Search() {
    const [field, setField] = useState()
    const [query, setQuery] = useState()

    return (
        <>
            <View style={styles.seachWrapper}>
                <View style={styles.searchMain}>
                    <View style={styles.filter}>
                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={field}
                                onValueChange={(itemValue) => setField(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="All" value="All" color='black' />
                                <Picker.Item label="Price" value="price" color='black' />
                                <Picker.Item label="vegetarian" value="vegetarian" color='black' />
                                <Picker.Item label="non-vegetarian" value="non_vegetarian" color='black' />
                                <Picker.Item label="fast food" value="fast_food" color='black' />
                            </Picker>
                            <Text style={styles.downTriangle}>
                                <Icon name="sort-down" size={30} color={'gray'} />
                            </Text>
                        </View>
                        <Text style={styles.filterIcon}>
                            <Icon name="filter" size={30} color={'gray'} />
                        </Text>
                    </View>
                    <View style={styles.space}>
                        <Text style={styles.SearchIcon}>
                            <Icon name="search" size={20} color={'gray'} />
                        </Text>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={(value) => { setQuery(value) }}
                            type='email'
                            value={query}
                            placeholder={`Search In ${field}`}
                            placeholderTextColor={"gray"}
                        />
                    </View>
                    <View >

                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    space: {
        flexDirection: 'row',
        justifyContent: 'left',
        borderWidth: 1,
        borderRadius: 20,
        gap: 10,
        borderColor: 'black',
        marginBottom: 10,
    },
    searchInput: {

        width: 230,
    },
    SearchIcon: {
        marginTop: 10,
        marginLeft: 10
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    pickerWrapper: {
        width: '60%',
        position: "relative",
    },
    picker:{
        marginLeft:10
    },
    filterIcon: {
        marginTop: 10,
    },
    downTriangle:{
        position:"absolute",
        marginTop:3
        
    }



});
