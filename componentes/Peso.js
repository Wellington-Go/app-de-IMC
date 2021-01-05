import React from 'react';
import {Text,View,TextInput} from 'react-native';
import Estilos from '../estilos/Estilos.js'



export default props=>{
    return(
      <View style={Estilos.bloco}>
       <Text> Informe seu Peso:</Text>
        <TextInput
        style={Estilos.txt}
        autoFocus={true}
        keyboardType={'numeric'}
        onChangeText={text=>props.aoModificar(text)}>
        </TextInput>
      </View>

    )
    
}
