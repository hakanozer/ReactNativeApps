import React, { Component } from 'react';
import {
  StyleSheet,Alert,
  View, ScrollView, Text, TextInput,Button,KeyboardAvoidingView
} from 'react-native';


export default class register extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            userName : '',
            userSurname : '',
            userPhone : '',
            userMail : '',
            userPass : '',
            mesaj : '',
        }
    }


     fncLogin = () =>  {
        const userName = this.state.userName
        const userSurname = this.state.userSurname
        const userPhone = this.state.userPhone
        const userMail = this.state.userMail
        const userPass = this.state.userPass

        const data = {
            ref : 'ce7f46683b56cb84131405b848678c51',
            userName : userName,
            userSurname : userSurname,
            userPhone : userPhone,
            userMail : userMail,
            userPass : userPass,
        }

        var esc = encodeURIComponent;
        var query = Object.keys(data)
        .map(k => esc(k) + '=' + esc(data[k]))
        .join('&')
        const url = 'http://jsonbulut.com/json/userRegister.php?'+query
        
        // servise data gönderiliyor
        fetch(url,
            {
                method : "GET",
                headers : {
                    'Content-Type': 'application/json',
                }
            }
        )
        .then((response) => response.json())
        .then(jsonData => {
            const mesaj = jsonData.user[0].mesaj;
            const durum = jsonData.user[0].durum;
            if(durum) {
                // kayıt başarılı
                const userid = jsonData.user[0].kullaniciId;
                Alert.alert("KulID : " + userid);
            }
            Alert.alert(mesaj);
        }).catch((error) => {
            console.error(error);
        });
        
    }

    render () {
        return (
         <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> 
        <ScrollView 
        keyboardShouldPersistTaps = 'always'
        contentContainerStyle ={styles.container} >
            <Text>User Register</Text>

            <TextInput 
                style = {styles.textStyle}
                placeholder = 'Adı'
                returnKeyType = 'next'
                onChangeText = { (val) => this.setState({userName : (val)}) }
             ></TextInput>

            <TextInput 
            style = {styles.textStyle}
                placeholder = 'Soyadı'
                returnKeyType = 'next'
                onChangeText = { (val) => this.setState({userSurname : (val)}) }
             ></TextInput>

            <TextInput 
            style = {styles.textStyle}
                placeholder = 'Telefon'
                keyboardType = "phone-pad"
                returnKeyType = 'next'
                onChangeText = { (val) => this.setState({userPhone : (val)}) }
             ></TextInput>

            <TextInput 
            style = {styles.textStyle}
                placeholder = 'Mail Adres'
                keyboardType = 'email-address'
                returnKeyType = 'next'
                onChangeText = { (val) => this.setState({userMail : (val)}) }
             ></TextInput>

            <TextInput
            style = {styles.textStyle}
                secureTextEntry
                placeholder = 'Şifre'
                returnKeyType = 'next'
                onChangeText = { (val) => this.setState({userPass : (val)}) }
             ></TextInput>

             <Button
             title='Giriş Yap'
            onPress = { (this.fncLogin) }
             ></Button>

        </ScrollView>
        </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },textStyle: {
        padding: 5,
        borderColor: '#999',
        borderWidth: 1,
        margin: 6,
    },
  });
  