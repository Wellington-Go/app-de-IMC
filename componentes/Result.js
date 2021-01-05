import React from 'react';
import {Text,View} from 'react-native';
import Estilos from '../estilos/Estilos.js'



export default props=>{
    return(
        <View style={Estilos.bloco}>
        <Text>Resultado:{props.Result}</Text>
      </View>

    )
}