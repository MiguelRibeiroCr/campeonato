import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import { useState } from "react";
import TeamEntity from "../entities/team_entity";


export default function DetailPage({route, navigation}){
    
    
    
    const {id, team_shield_url, team_name, position, team_points, team_gols_pro, team_gols_contra, team_saldo_gols} = route.params;
    console.log();
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={team_shield_url}/>
            <Text>{team_name} </Text>
            <Text>Posição:{position} </Text>
            <Text>Pontos: {team_points}</Text>            
            <Text>Gols: {team_gols_pro} </Text>
            <Text>Gols Contra: {team_gols_contra} </Text>
            <Text>Saldo de Gols: {team_saldo_gols} </Text>
            
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginBottom: 16,
        marginHorizontal: 16,
    },
    img:{
        width: 80,
        height: 80,
        marginTop: 30,
    }
});