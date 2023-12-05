import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <Text>Type: {transaction.type}</Text>
      <Text>Date: {transaction.date_time}</Text>
      <Text>Operation: {transaction.operation}</Text>
      <Text>Balance: {transaction.balance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FF007F',
    padding: 10,
    marginBottom: -3,
    margin: 18,
  },
});

export default TransactionItem;
