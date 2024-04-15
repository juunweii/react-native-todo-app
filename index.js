import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src/App';

export default function Main() {
    return (
        <SafeAreaProvider>
            <PaperProvider>
                <App />
            </PaperProvider>
        </SafeAreaProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
