import { StyleSheet, View, Image } from 'react-native';

export default function Loader() {

    return (
        <>
            <View style={styles.Loader}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/loading.gif')}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
       width:200,
       height:80,
      
    },
    Loader: {
       position:"absolute",
       left:50,
       top:50,
       zIndex:3
    }


});
