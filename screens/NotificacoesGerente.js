import * as React from 'react';
import { Component } from "react";
import { View, Text } from "react-native";
import { FlatList, StyleSheet } from "react-native";
import { receberServico } from "./CadastroServico";
import servicoService from '../services/ServicoService';

class ListItem extends Component {
    render(){
        const {item} = this.props;
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', paddingLeft:20, marginTop: 25, backgroundColor:"#000080"}}>
                <Text style={{fontSize:20, color:"#fff"}} onPress={this.props.notificar}>{item.title}</Text>
            </View>
        );
    }
}

class BasicFlatList extends Component {
    state = {
        notificacoes: this.getNotificacoes(),
    }
    
    onPressAction = (item) => {
        receberServico(item);
        this.props.navigation.navigate("Cadastro Servico")
    }
    
    getNotificacoes() { 
        servicoService.obterNotificacoes()
        .then((response) => {
            this.setState({
                notificacoes: response.data,
            })
        })
        .catch((error) => {
            console.log(error);     
        });
    }

    render() {
      return(
        <View style={styles.container}>
            <FlatList
                data={this.state.notificacoes}
                renderItem={({item, index}) => (
                    <ListItem 
                        item={item}
                        notificar={() => this.onPressAction(item)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            </View>
      );
    }
}

export default function Notificação({navigation}) {
    return (
        <BasicFlatList navigation={navigation}></BasicFlatList>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#b0c4de",
    paddingTop: 22
},
item: {
    padding: 10,
    fontSize: 17,
    height: 40,
},
});