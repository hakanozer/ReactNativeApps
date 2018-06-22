import React, { Component } from 'react';
import {
    StyleSheet,
    View, ScrollView, Text, TextInput, Button
} from 'react-native';


export default class login extends React.Component {

    fncLogin() {
        console.warn("Btn Tıklandı")
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={styles.container} >
                <Text>User Login</Text>
                <TextInput
                    style = {styles.textStyle}
                    placeholder='Mail Adres'
                    keyboardType='email-address'
                    returnKeyType='next'
                ></TextInput>

                <TextInput
                    style = {styles.textStyle}
                    secureTextEntry
                    placeholder='Şifre'
                    returnKeyType='next'
                ></TextInput>

                <Button
                    title='Giriş Yap'
                    onPress={this.fncLogin}
                ></Button>

                <Button
                    title='Kayıt Ol'
                    onPress={() => navigate('Register')}
                ></Button>

            </ScrollView>)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        padding: 5,
        borderColor: '#999',
        borderWidth: 1,
        margin: 6,
    },
});
