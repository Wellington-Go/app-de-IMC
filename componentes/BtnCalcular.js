import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import Estilos from '../estilos/Estilos.js'



export default props=>{
    return(
        <View style={Estilos.bloco}>
        <TouchableHighlight
        style={Estilos.btnCalc}
        onPress={()=>props.aoClicar()}
        >
 
          <Text style={Estilos.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
       </View>

)
}