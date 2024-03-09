import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        F A Ç A  L O G I N
      </Text>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/')}
      />



      <TextInput style={estilos.input} placeholder="Usuário" />
      <TextInput style={estilos.input} placeholder="Senha" />



      <TouchableOpacity style={estilos.button}>
        <Text>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5CC6BA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto: {
    color: "#BLACK",
    fontSize: 30, 
    marginBottom : 25
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom : 20

  },

  button: {
    backgroundColor: "#179042",
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 16,
  }
});