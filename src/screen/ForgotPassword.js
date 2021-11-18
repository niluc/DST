import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,} from 'react-native';
import { COLORS, icons } from "../constants"

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.texttitle}>Email or Username</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={false}
          onChangeText={(text) => setData({...data, username: text})}
        />
      </View>


      <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => []}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Send Verification code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

export const styles = StyleSheet.create({
  screen: {
      flex: 1,
      backgroundColor: COLORS.background1,
      flexDirection: "column",
      padding: 30,
      alignItems: "stretch",
    },
 
    inputView: {
      marginVertical: 20,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    container: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
    },
    fsize: {
      fontSize: 17,
      color: "#000",
      paddingLeft: 20,
    },
    loginBtn: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#3B3DBF",
      borderRadius: 15,
      height: 50,
      width: "80%",
    },
    texttitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000000",
    },
});
