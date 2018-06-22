import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import axios from 'axios'
import ItemRow from './Row';

export default class Liste extends Component {

    static navigationOptions = {
        title : 'Ürün Listesi',
        headerBackTitle : 'Geri',
    }

    componentWillMount() {
       const url = 'http://jsonbulut.com/json/product.php?ref=ce7f46683b56cb84131405b848678c51&start=0'
       axios.get(url)
       .then( (response) => this.setState({items : response.data.Products[0].bilgiler })  ) 
    }

  state = {
      items : [],
  }

  renderItem(navigate) {
    return this.state.items.map( (item) => { 
        return  <ItemRow key={item.productId} item={item} navigation={navigate} ></ItemRow>;
        });
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <ScrollView>
        {this.renderItem(navigate)}
     </ScrollView>
    )
  }
}