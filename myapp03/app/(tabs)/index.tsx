import React from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'

/*
Cartão de Produto
Descrição: Construa um cartão de produto que mostre uma imagem do item, nome e preço.

Instruções:
Insira uma imagem do produto usando o componente Image.
Inclua o nome e o preço do produto em Text com destaque para o preço (como fonte em negrito e cor diferente).
Adicione um botão de compra e estilize o cartão com bordas e espaçamento interno (padding).
*/

export default function ProductCard(){
  return(
    <View style={styles.corpo}>
      <Image 
      source= {{ uri: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64624f77d49397.45271659.jpg?lastEdited=1684164477&w=1024&h=1024&f=webp'
      }}
      style={styles.imagem}
      />
      <Text style={styles.produto}>Action figure Cachorro Chupetão</Text>
      <Text style={styles.preco}>R$ 129,00</Text>
      <Button title="Comprar" onPress={() => alert('Prodto adicionado no carrinho')} />
    </View>
  )
};

const styles = StyleSheet.create({
  
  corpo: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },

  produto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  preco: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
