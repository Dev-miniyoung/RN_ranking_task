import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';



const HomePresenter = () => {
    return ( 
        <View style = { styles.container } >
            <Text>Home</Text>
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default HomePresenter;