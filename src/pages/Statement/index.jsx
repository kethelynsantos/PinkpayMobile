import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import TransactionItem from '../../components/TransactionItem/TransactionItem';
import axiosInstance from '../../sevices/axiosInstance';
import styles from './styles';
import { useSelector } from 'react-redux';

const Statement = () => {
  const { token } = useSelector((state) => state.userReducer);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axiosInstance.get('transactions/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });

        setTransactions(response.data);
      } catch (error) {
        console.error('Erro ao obter transações:', error.response.data);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text style={styles.titleBlack}>Transferências:</Text>

        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Statement;
