import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { firebase} from '../config'

const LoginScreen=  () =>{

    const navigation = useNavigation()
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    loginStudent = async (email, password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch( error){
            alert(error.message)
        }
    }

    return (
        <View style ={StyleSheet.container}>
            <Text style= {{fontWeight:'bold', fontSize:26}}>Login</Text>
            <View style={{marginTop:40}}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Email'}
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize= 'none'
                    autoCorrect = {false}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'Password'}
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize= 'none'
                    autoCorrect = {false}
                    secureTextEntry = {true}
                />
            </View>
            <TouchableOpacity
            onPress={()=> loginStudent(email, password)}
            style= {styles.button}
            >
                <Text style={{fontSize:16}} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> navigation.navigate('SignUpStudent')}
            style= {styles.button}
            >
                <Text style={{fontSize:16}} >Register as Student</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> navigation.navigate('SignUpTutor')}
            style= {styles.button}
            >
                <Text style={{fontSize:16}} >Register as Tutor</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

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