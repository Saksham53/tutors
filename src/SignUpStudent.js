import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {firebase} from '../config'

const SignUpStudent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    signUpStudent = async (email, password, firstName, lastName) =>{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            firebase.auth().currentStudent.sendEmailVerification({
                handleCodeInApp: true,
                url:'https://tutors-d8164.firebaseapp.com'
            })
            .then (()=>{
                alert('Verification email sent')
            }).catch((error) =>{
                alert(error.message)
            })
            .then (() => {
                firebase.firestore().collection('students')
                .doc(firebase.auth().currentStudent.sid)
                .set({
                    firstName,
                    lastName,
                    email,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) =>{
            alert(error.message)
        })
    }

    return (
        <View style={StyleSheet.container}>
            <Text style={{fontWeight:'bold', fontSize:16}}>Register</Text>
            <View style={{marginTop:20}}>
            <TextInput
                style={StyleSheet.TextInput}
                placeholder= "First Name"
                onChangeText={(firstname)=> setFirstName(firstName)}
                autoCorrect={false}
            />
            <TextInput
                style={StyleSheet.TextInput}
                placeholder= "Last Name"
                onChangeText={(lastName)=> setLastName(lastName)}
                autoCorrect={false}
            />
            <TextInput
                style={StyleSheet.TextInput}
                placeholder= "Email"
                onChangeText={(email)=> setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType= "email-address"
            />
            <TextInput
                style={StyleSheet.TextInput}
                placeholder= "Password"
                onChangeText={(password)=> setPassword(password)}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
            />
            </View>
            <TouchableOpacity>
                <Text style={styles.button}
                onPress={()=>signUpStudent(email, password, firstName, lastName)}></Text>
            </TouchableOpacity>
        </View>

    )
}

export default SignUpStudent

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
        alignContent:'center'
    },
    textInput:{
        padding:20,
        width:400,
        fontSize:20,
        textAlign:'center',
        backgroundColor:'#fff',
        borderBottomColor:'#000',
        borderBottomStartRadius:1

    },
    button:{
        marginTop:20,
        padding:15,
        width:"80%",
        borderRadius:10,
        alignSelf: 'center',
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:'10%',
        backgroundColor:"#fff",
        position: 'relative',

    }
})