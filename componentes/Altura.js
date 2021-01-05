import React from 'react';
import {Text,View,TextInput} from 'react-native';
import Estilos from '../estilos/Estilos.js'



export default props=>{
    return(
      <View style={Estilos.bloco}>
       <Text> Informe a altura:</Text>
        <TextInput
        style={Estilos.txt}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={text=>props.aoModificar(text)}>
        </TextInput>

      </View>
    )
}

