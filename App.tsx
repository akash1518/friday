
import { StyleSheet, Text, View ,Button} from 'react-native';

import React, { Component } from 'react'

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



WebBrowser.maybeCompleteAuthSession();



// React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { authentication } = response;
//       }
//   }, [response]);

// export default class App extends Component {




//   render() {
//     return (
//      <Button
//       disabled={false}
//       title="Login"
//       onPress={() => {
//         promptAsync();
//         }}
//     />
//     )
//   }
// }

function LoginScreen( { navigation}:any ) {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '36574076097-1ig4noh32rpqtgn25p4f65spsbalbfhu.apps.googleusercontent.com',
    androidClientId: '36574076097-u9n7pb3od9frih67jur10ippkb8qa4r2.apps.googleusercontent.com',
    webClientId: '36574076097-m8ogpa0cpouon58khgi7r4jt1tmp4sei.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      navigation.navigate("Home");
      }
      else{
        console.log("Not able to login");
      }
  }, [response]);

  return (
    <View style = {styles.container}>
      <Text>Hello this my login screen</Text>
    <Button
      disabled={!request}
      title="Login with google"
      onPress={() => {
        promptAsync();
        }}
    />
    </View>
  );
}


function HomeScreen() {
    return (
      <View style = {styles.container}>
        <Text>Successfully logged in with google</Text>
      </View>
    );
}


const Stack = createNativeStackNavigator();


export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
