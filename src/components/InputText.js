import React ,{useState}from 'react';
import {View, TextInput, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('screen');

const InputText = (props)=>{
  
    
    return(
        <View>
            <TextInput 
                placeholder={props.name}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.email}
               
            />
        </View>
    )
}


export default InputText

const styles = {

  email: {
    borderColor: '#d8d6d6',
    borderRadius: 7,
    borderWidth: 2,
    width: width - 70,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    marginBottom: 10
  },
  
};
