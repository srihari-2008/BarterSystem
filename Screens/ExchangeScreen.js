import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Modal, ScrollView, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import db from "../config"
import firebase from "firebase"
import MyHeader from "../Components/MyHeader" 

export default class ExchangeScreen extends React.Component{
    constructor(){
        super()
        this.state={
           itemName:"",
            descriptionForItem:"",
            userId:firebase.auth().currentUser.email
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addRequest=(itemName,descriptionForItem)=>{
        var userId=this.state.userId
        var randomRequestId=this.createUniqueId()
        db.collection("Exchange_Request").add({
            user_Id:userId,
            item_Name:itemName,
            descriptionForItem:descriptionForItem,
            request_Id:randomRequestId
        })
         this.setState({
             itemName:"",
             descriptionForItem:""
            
         })
         return Alert.alert("Item Ready To Exchange")  
    }

    render(){
        return(
            <View style={{flex:1}}>
                 <MyHeader title="ExchangeItems" navigation ={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyboardStyle}>

                <TextInput 
              style={styles.formTextInput}
              placeholder="Enter The Item Name"
              onChangeText={text=>this.setState({itemName:text})}
              value={this.state.itemName}
              />

              <TextInput 
              style={[styles.formTextInput,{height:300}]}
              placeholder="Describe The Item"
              onChangeText={text=>this.setState({descriptionForItem:text})}
              multiline={true}
              value={this.state.descriptionForItem}
              />
              <TouchableOpacity style={styles.button} onPress={()=>{
                  this.addRequest(this.state.itemName,this.state.descriptionForItem)
              }}>
                  <Text>
                  Exchange
                  </Text>
              </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    keyboardStyle:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center'
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  
   button:{
     width:"75%",
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:10,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  });
  