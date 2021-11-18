import React, { useState } from 'react';
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

const Account = ({navigation}) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 145,
            width: 141,
            resizeMode: "contain",
            marginBottom: 20,
          }}
          source={icons.add_exclusive}
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>Change avatar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.texttitle}>Username</Text>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Text style={styles.forgot}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          onChangeText={(text) => setData({ ...data, username: text })}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={styles.texttitle}>Email</Text>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Text style={styles.forgot}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.fsize}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
      </View>

      <TouchableOpacity>
        <Text style={{ ...styles.forgot, marginTop: 20 }}>Change Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Account;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background1,
    flexDirection: "column",
    padding: 30,
    alignItems: "stretch",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
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