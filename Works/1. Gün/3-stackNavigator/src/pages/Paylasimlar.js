import React, { Component } from 'react';
import {
    View,Text, Button
} from 'react-native';

export default class Paylasimlar extends React.Component {

    static navigationOptions = {
        title : 'Paylaşımlar',
        headerBackTitle : 'Geri',
    }

    render () {
        const title = this.props.navigation.state.params.baslik;
        const { navigate } = this.props.navigation;

        return (
            <View style= {{ flex:1, justifyContent: 'center', }}>
                <Text style= {{ textAlign: 'center' }}>{title}</Text>
                
            <Button
            title = 'Geri'
            onPress = { () => this.props.navigation.goBack() }
            ></Button>

            <Button title = "Ürün Sayfasını Dön"
                    onPress = { () =>  navigate('Urunler', { baslik: 'Ürünler' }) }
            ></Button>
                    
            <Button title='En Başa Dön'
                    onPress = { () =>  navigate('Anasayfa', { baslik: 'Anasayfa' }) }
            ></Button>


            </View>
        );
    }


}