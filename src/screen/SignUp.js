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

const SignUp = ({navigation}) => {
  const signUp = () =>{
    if (data.username == ''|| data.email == ''|| data.password == ''|| data.cpassword == ''){
      Alert.alert(
        'Bruh','Bruh',
        [
          {text: 'Again'}
        ]
      )
    }
    if (data.password != data.cpassword){
      Alert.alert(
        'Bruh','Bruh',
        [
          {text: 'Again'}
        ]
      )
    }
    
  }
  const [data, setData] = useState({
    username:'',
    email: '',
    password: '',
    cpassword: ''
  });
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.texttitle}>Username</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={false}
          onChangeText={(text) => setData({...data, username: text})}
        />
      </View>

      <Text style={styles.texttitle}>Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={false}
          onChangeText={(text) => setData({...data, email: text})}
        />
      </View>

      <Text style={styles.texttitle}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={true}
          onChangeText={(text) => setData({...data, password: text})}
        />
      </View>

      <Text style={styles.texttitle}>Confirm Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={true}
          onChangeText={(text) => setData({...data, cpassword: text})}
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Already have an account?
        </Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignIn')}
          style = {{marginLeft: 20}}
        >
          <Text style={styles.forgot}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

export const styles = StyleSheet.create({
  screen: {
      flex: 1,
      backgroundColor: "#F0F1F5",
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
    fsize: {
      fontSize: 17,
      color: "#000",
      paddingLeft: 20,
    },
    container: {
      marginTop: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    container1: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    loginBtn: {
      alignItems: "center",
      justifyContent: "center",
      width: "69.5%",
      backgroundColor: "#3B3DBF",
      borderRadius: 15,
      height: 50,
      width: "60%",
    },
    texttitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000000",
    },
    forgot: {
      color: "#3B3DBF",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
});
