import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Card } from 'react-native-elements'

import Deck from './src/Deck'

// test data
const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends Component {
  renderCard(card) {
    return (
      <Card
        key={card.id}
        title={card.text}
        image={{ uri: card.uri }}
      >
        <Text style={{ marginBottom: 10 }}>I can customize the card further</Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03a9f4"
          title="View now!"
        />
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title= "All done!">
        <Text style={{ marginBottom: 10 }}>
          All cards have been swiped! No more. 
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03a9f4"
          title="Load More!"
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

Expo.registerRootComponent(App);
