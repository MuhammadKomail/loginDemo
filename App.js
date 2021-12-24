import React from "react";
import { Text, StyleSheet, View, ScrollView, Button, TextInput, Image, ImageBackground, TouchableOpacity } from "react-native";
import bgimg from './img/bjimg.jpg'
import img from './img/logo.png'

const TextInANest = () => {

  return (
    <>
      <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
        {/* <ScrollView style={styles.scrollView}> */}
        <Image                
          style={{ width: 200, height: 50, alignSelf: "center", marginTop: 210 }}
          source={img}
        />
          <View style={styles.baseText}>
            <TextInput
              keyboardType="email-address"
              style={{ height: 45, width: "100%", borderColor: 'white', color: 'black', backgroundColor: 'white', borderWidth: 1, marginBottom: 20, borderRadius: 20, paddingHorizontal: 20 }}
              placeholder="Enter Your Email"
              underlineColorAndroid="transparent"
            />
            <TextInput
              secureTextEntry={true}
              style={{ height: 45, width: "100%", borderColor: 'white', backgroundColor: 'white', color: 'black', borderWidth: 1, marginBottom: 20, borderRadius: 20, paddingHorizontal: 20 }}
              placeholder="Enter Your Password"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={{ marginHorizontal: 75, marginTop: 30 }}>
              <Text style={styles.btncust}>LOG IN</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "column", marginTop: 120 }}>
              <TouchableOpacity>
                <Text style={{ backgroundColor: '#5099f4', color: 'white', borderRadius: 10, paddingHorizontal: 75, paddingVertical: 20, marginBottom: 20 }}>SIGN IN WITH GOOGLE</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ backgroundColor: '#5099f4', color: 'white', borderRadius: 10, paddingHorizontal: 65, paddingVertical: 20 }}>SIGN IN WITH FACEBOOK</Text>
              </TouchableOpacity>
            </View>
          </View>



        {/* </ScrollView> */}
      </ImageBackground>


    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: 30,
    paddingTop: 40
  },
  last: {
    fontFamily: "Cochin",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  btncust: {
    color: 'white',
    alignContent: "center",
    backgroundColor: '#5099f4',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
  },
  btncust2: {
    color: 'white',
    alignContent: "center",
    backgroundColor: '#5099f4',
    paddingTop: 15,
    paddingBottom: 15,
    // paddingLeft:20,
    // paddingRight:20,
    borderRadius: 10,
  }

})
export default TextInANest;











{/* <Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text>
<Text style={styles.titleText}></Text> */}
{/* <Text style={styles.titleText}></Text> */ }