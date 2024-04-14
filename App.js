import { TextInput, SafeAreaView, StyleSheet, Image, Pressable, Text} from 'react-native';

import { useState } from 'react'


export default function App() {
  const [cpfField, setcpfField] = useState('')
  const [cpf, setcpf] = useState('')

  
  const handleSendcpf = () => {
    setcpf(cpfField)
  }

  const handleClear = () => {
    setcpf('')
    setcpfField('')
  }


  return (
    <SafeAreaView style={styles.container}>
      {cpf == '' &&
      <>
        <Image source={require('./assets/perfil.png')} style={styles.image}/>

        <TextInput 
              style={styles.input}
              placeholder='CPF'
              placeholderTextColor='#999'
              value={cpfField}
              onChangeText={text => setcpfField(text)}
            />

        <Pressable style={styles.botao}>
          <Text style={styles.texto_botao} onPress={handleSendcpf}>LOGAR</Text>
        </Pressable>
      </>
      }

      {cpf == '000.000.000-00'  &&
        <>
          <Image source={require('./assets/homem.png')} style={styles.img_homem}/>
          <Text style={styles.logado}>Você está logado com CPF: {cpf}</Text>
         
      
        {cpf != '' &&
          <>
            <Pressable style={styles.clear_botao} onPress={handleClear}>
              <Text style={styles.texto_clear_botao}>CPF NÃO É {cpf}</Text>
            </Pressable>
          </>
        }
        </>
      }
      {cpf != '000.000.000-00' &&
      <>
        
      </>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 100,
    height: 100,
    marginTop: 150
  },
   input: {
    backgroundColor: '#eee',
    padding: 5,
    margin: 20,
    border: 'solid',
    borderWidth: 8,
    width: 300
  },
  botao:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 25,
    backgroundColor: '#000',
  },
  texto_botao:{
    color: '#fff',
    textAlign: 'center',
  },

  img_homem:{
    width: 100,
    height: 100,
    marginTop: 150
  },
  clear_botao:{
    backgroundColor: '#000',
    textAlign: 'center',
    marginTop: 20,
    height: 30,
    width: 180,
  },
  texto_clear_botao:{
    color: '#fff',
    paddingTop: 5,
    paddingLeft: 7
  },
  logado:{
    marginTop: 10,
  }
});
