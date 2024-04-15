import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function TodoInput({onAddTodo}) {

    const [text, setText] = useState('');

    function handleAddTodo() {
        if (text) {
            onAddTodo(text);
            setText('');
        }
    }

    return (
        <View>
            <TextInput
                label="Add Todo"
                value={text}
                onChangeText={text => setText(text)}
                mode="outlined"
            />
            <Button
                onPress={handleAddTodo}
                mode="text">
            Add
            </Button>
        </View>
    );
};

