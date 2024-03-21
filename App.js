import { SafeAreaView, View, Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { Academia } from './components/Academia.js'

export default function App() {

  function handlePressIn() {
    console.log('Clicou o PRESS')
  }

  function handlePressOut() {
    console.log('Soltou o PRESS')
  }


  function handleLongPress() {
    console.log('Segurou o PRESS')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Good Shape</Text>
        <Text style={styles.subtitle}>Treinos</Text>

        <Academia 
          name={'Muay-Thai'}
          price={80}
          items={['Personal Trainer: Lucas Lessa e Daniel Vasconcelos']}
          propOnPress={handlePressOut}
        />
        
        <Academia 
          name={'Crossfit'}
          price={100}
          items={['Personal Trainer: Narcelio Silvino e Paulo Muzy']}
          propOnPress={handlePressIn}
        />

        <Academia 
          name={'Funcional'}
          price={55}
          items={['Personais: Raul Barbosa, Icaro Lermen, Ramon Dino']}
          propOnPress={handleLongPress}
        />
              <Academia 
          name={'Diária'}
          price={15}
          items={['Observação: Direito a todos equipamentos da academia.']}
          propOnPress={handleLongPress}
        />
              <Academia 
          name={'Plano Tri-mensal'}
          price={125}
          items={['Pagamento de três em três meses']}
          propOnPress={handleLongPress}
        />
              <Academia 
          name={'Plano Anual'}
          price={230}
          items={['Pagamento anual ']}
          propOnPress={handleLongPress}
        />
        <Text style={styles.subtitle}>Suplementos</Text>
              <Academia 
          name={'Whey Protein Growth 2kg'}
          price={140}
          items={['Sabores: Morango, Chocolate, Baunilha, Cookies']}
          propOnPress={handleLongPress}
        />
              <Academia 
          name={'Creatina Growth 150g'}
          price={80}
          items={['100% pura']}
          propOnPress={handleLongPress}
        />
              <Academia 
          name={'Hipercalórico IntegralMedica 2kg'}
          price={145}
          items={['Cookies, Chocolate, Morango, Baunilha, Doce de Leite']}
          propOnPress={handleLongPress}
        />
              <Academia 
          name={'Termogêneo'}
          price={70}
          items={['Max Titanium, Growth, IntegralMedica']}
          propOnPress={handleLongPress}
        />
               <Academia 
          name={'BCAA'}
          price={50}
          items={['150 Cápsulas']}
          propOnPress={handleLongPress}
        />
      </ScrollView>
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#FFFF',
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 15,
    color: '#ffff',
    textAlign: 'center',
  },
  scroll:{
    backgroundColor: 'blue'
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
})