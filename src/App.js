import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const initialTodos = [
    { id: uuid.v4(), text: 'Learn React Native', isCompleted: false },
    { id: uuid.v4(), text: 'Finish Homework', isCompleted: false },
];

export default function App() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(text) {
        setTodos([...todos, { id: uuid.v4(), text, isCompleted: false }]);
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function handleEditTodo(id, text) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text } : todo));
    }

    function handleToggleCompleted(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }


    return (
        <SafeAreaProvider>
            <PaperProvider>
                <View style={styles.container}>
                    <TodoInput onAddTodo={handleAddTodo} />
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} onToggleCompleted={handleToggleCompleted}/>
                </View>
            </PaperProvider>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        marginBottom:50,
        marginHorizontal: 25,
    }
});

