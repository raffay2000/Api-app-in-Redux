import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Routes from "./src/Routes/index";
import { store } from "./src/Redux/Store/store";
import { Provider } from "react-redux";
const App = () => {
  return( 
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
};

export default App;

// const styles = StyleSheet.create({})
