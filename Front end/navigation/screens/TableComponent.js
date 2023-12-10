import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const data = [
  { id: '1', indexNo: '20IT0500', result: 'Pass' },
  { id: '2', indexNo: '20IT0501', result: 'Fail' },
  { id: '3', indexNo: '20IT0502', result: 'Pass' },
  { id: '4', indexNo: '20IT0503', result: 'Pass' },
  { id: '5', indexNo: '20IT0504', result: 'Fail' },
  { id: '6', indexNo: '20IT0505', result: 'Pass' },
  { id: '7', indexNo: '20IT0506', result: 'Pass' },
  { id: '8', indexNo: '20IT0507', result: 'Fail' },
  { id: '9', indexNo: '20IT0508', result: 'Pass' },
  { id: '10', indexNo: '20IT0509', result: 'Pass' },
  { id: '11', indexNo: '20IT0510', result: 'Fail' },
  { id: '12', indexNo: '20IT0511', result: 'Pass' },
  { id: '13', indexNo: '20IT0512', result: 'Pass' },
  { id: '14', indexNo: '20IT0513', result: 'Fail' },
  { id: '15', indexNo: '20IT0514', result: 'Pass' },
  { id: '16', indexNo: '20IT0515', result: 'Pass' },
  { id: '17', indexNo: '20IT0516', result: 'Fail' },
  { id: '18', indexNo: '20IT0517', result: 'Pass' },
];

const TableComponent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.indexNo}>
        <Text style={styles.indexNoText}>{item.indexNo}</Text>
      </View>
      <View style={[styles.result, { backgroundColor: item.result === 'Pass' ? '#4CAF50' : '#F44336' }]}>
        <Text style={styles.resultText}>{item.result}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Quiz Results</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTextIndex}>Index No</Text>
          <Text style={styles.headerTextResult}>Result</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7edf9',
    paddingTop:50
  },
  titleContainer: {
    backgroundColor: '#7167f5',
    padding: 16,
    marginBottom: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#7167f5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerTextIndex: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginLeft:26
  },
  headerTextResult: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginRight:80
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 4,
  },
  indexNo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  indexNoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  result: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 6,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TableComponent;
