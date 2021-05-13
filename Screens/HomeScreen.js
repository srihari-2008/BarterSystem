import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Modal, ScrollView, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import db from "../config"
import firebase from "firebase"
import { FlatList } from 'react-native-gesture-handler';
import {ListItem} from "react-native-elements"
import MyHeader from "../Components/MyHeader"

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            requestedItem:[]
        }
        this.requestRef=null
    }

    getrequestedItem=()=>{
     this.requestRef=db.collection("Exchange_Request")
     .onSnapshot((snapshot)=>{
      var bookRequested=snapshot.docs.map(docs=>docs.data())
      this.setState({
          requestedItem:bookRequested
      })
     })
    }

    componentDidMount(){
        this.getrequestedItem()
    }

    componentWillUnmount(){
        this.requestRef()
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,index})=>{
    return(
        <ListItem
        key={index}
        title={
            item.item_Name
            
        }
        subtitle={item.descriptionForItem}
        titleStyle={{color:"black",fontWeight:"bold"}}
        rightElement={
            <TouchableOpacity>

            <Text style={{color:"red"}}>
                view
            </Text>

            </TouchableOpacity>
        }
        />
    )
    }


    render(){
        return(
            <View style={{flex:1}}>
                 <MyHeader title="ExchangeItems" navigation ={this.props.navigation}/>
                {
                    this.state.requestedItem.length===0?(
                        <View>
                            <Text>
                                There Are No Items For Exchange
                            </Text>
                            </View>
                    ):(
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.requestedItem}
                        renderItem={this.renderItem}
                        />
                    )
                     
                }
            </View>
        )
    }
}