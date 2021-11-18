import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,} from 'react-native';
import { COLORS, icons } from "../constants"

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.texttitle}>Username</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <Text style={styles.texttitle}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.container1}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.forgot}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    alignItems: "stretch",
    backgroundColor: COLORS.background1,
  },
    texttitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
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
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#3B3DBF",
    borderRadius: 15,
    height: 50,
  },
  forgot: {
    color: "#3B3DBF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
