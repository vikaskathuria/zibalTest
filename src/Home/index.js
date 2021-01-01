import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:["1","2","3","4"]
        }
    }
    
    componentDidMount(){
        let arr=[]
        for (let i = 0; i < 15; i++) {
           for (let j = 0; j < 15; j++) {
               arr.push({id:i})
           }
            
        }
    }

    renderItem=({item,index})=>{
         return(
             <View>

             </View>
         )
    }
    render() {
        const {arr}=this.state
        return (
            <View style={{flex:1,backgroundColor:"#fff"}}>
                <FlatList
                data={arr}
                renderItem={this.renderItem}

                />
            </View>
        )
    }
}
