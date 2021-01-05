
import React,{useState} from 'react';
import { View,Text,SafeAreaView,Image} from 'react-native';
import Estilos from './estilos/Estilos.js'
import Peso from './componentes/Peso.js'
import Altura from './componentes/Altura.js'
import BtnCalcular from './componentes/BtnCalcular.js'
import Result from './componentes/Result.js'


/* 
importaçao dos componentes usado para app1

*/

export default function App1(){

  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  const [result,setResult] = useState(0);

  const calcImc=()=>{
    if(peso == 0 || !peso){
      alert('informe o peso')
      return
    }
    if(altura == 0 || !altura) {
      alert('informe a altura')
      return
    }
      const r=peso/(Math.pow(altura,2))
      setResult(r.toFixed(1))
    

    

  }

  return (
    <SafeAreaView style={Estilos.corpo}>
      <View style={Estilos.bloco}>
        <Text>Calculadora de IMC</Text>
      </View>
     
     <Peso aoModificar={setPeso} 
     />
     <Altura aoModificar={setAltura}
     />
     <BtnCalcular aoClicar={calcImc}
     />
     <Result Result={result}
     />
     <View style={Estilos.corpo}
     // embaixo imagem da tabela
     >
     <Image source={require('./assets/tabela.png')}
            style={Estilos.tabela}
     />
     </View>
    </SafeAreaView>

    
    
  );
};

