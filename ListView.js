import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

const ListView = () => {
  //   useEffect(() => {
  //     kuchb();
  //   }, []);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Himani',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Rahul',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Shraya',
    },
  ];

  //   const kuchb = () => {
  //     const ab = {name: 'Rohan', address: 'Delhi'};

  //     const {address} = ab; //destructuring
  //     console.log(address);
  //   };

  //   const Item = ({title}) => (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );

  const flatMethod = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        // keyExtractor={item => item.id}
      /> */}

      <FlatList data={DATA} renderItem={param => flatMethod(param)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOffset: {width: 3, height: 3},
    shadowColor: 'gray',
    shadowOpacity: 0.6,
    elevation: 2,
    // background color must be set
    // backgroundColor: '#0000', // invisible color
  },
  title: {
    fontSize: 32,
  },
  shadow: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    backgroundColor: '#0000', // invisible color
  },
});

export default ListView;
