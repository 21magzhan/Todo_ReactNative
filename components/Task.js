import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Task = (props) => {

  return (
    <View style={Styles.item}>
      <View style={Styles.itemLeft}>
        <Text style={Styles.itemText}>{props.text}</Text>
      </View>
      <View style={Styles.circular}>
      <Text style={{color:"black"}}>
        x
      </Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  item: {
    backgroundColor: '#5555',
    padding: 16,
    borderRadius: 35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  itemLeft: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '100%',
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: 'black',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Task;