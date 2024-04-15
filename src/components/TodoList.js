import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {  List, TextInput, Button } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

export default function TodoList({todos, onDeleteTodo, onEditTodo, onToggleCompleted }) {
    const [editItem, setEditItem] = useState(null);
    const [editText, setEditText] = useState('');

    function startEditing(item) {
        setEditItem(item.id);
        setEditText(item.text);
    }

    function saveEdit(id) {
        onEditTodo(id, editText);
        cancelEditing();
    }

    function cancelEditing() {
        setEditItem(null);
        setEditText('');
    }

    return (
        <ScrollView>
            {todos.map((item) => {
                return (
                    <View key={item.id}>
                    
                        {editItem === item.id ? 
                        (   
                            <View>
                                <TextInput
                                mode="outlined"
                                label="Edit Todo"
                                value={editText}
                                onChangeText={setEditText}
                                />
                                <View style={styles.editContainer}>
                                    <Button mode="contained" onPress={() => saveEdit(item.id)}>Save</Button>
                                    <Button mode="outlined" onPress={cancelEditing}>Cancel</Button>
                                </View>
                            </View>
                        ) : (
                        <View  style={styles.itemContainer}>
                        <CheckBox
                            value={item.isCompleted}
                            onValueChange={() => onToggleCompleted(item.id)}
                            
                        />
                        <List.Item
                            title={item.text}
                            titleStyle={{ textDecorationLine: item.isCompleted ? 'line-through' : 'none'}}
                            right={props => (
                                <View style={{ flexDirection: 'row' }}>
                                    <Button
                                        onPress={() => startEditing(item)}
                                    >Edit</Button>
                                    <Button
                                        onPress={() => onDeleteTodo(item.id)}
                                    >Delete</Button>
                                </View>
                            )}
                        />
                        </View>
                        )}
                    </View>
                )
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '2%',
    },
    editContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        margin:'4%'
    }
});

