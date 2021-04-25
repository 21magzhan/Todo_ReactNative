// Magzhan Omirtay - 20MD0222

import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
    Keyboard.dismiss();
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={bestStyles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={bestStyles.tasksBody}>
        <Text style={{fontSize: 26, color:"black"}}>MyTodo 20MD0222</Text>
        <View style={bestStyles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </KeyboardAwareScrollView>

      <KeyboardAvoidingView 
        style={bestStyles.writeTaskBody}
      >
        <TextInput style={bestStyles.input} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={bestStyles.addBody}>
            <Text>Apply</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const bestStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksBody: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 20,
  },
  writeTaskBody: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    width: 340,
  },
  addBody: {
    width: 60,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
});