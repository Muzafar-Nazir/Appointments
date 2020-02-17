import React from 'react';
import {View, Text, StyleSheet, ShadowPropTypesIOS} from 'react-native';


export const CardSection = (props)=>{
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        flexDirection: 'row',
        position: 'relative'

    }
})