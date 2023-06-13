import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TeamEntity from './src/entities/team_entity';
import { Image } from 'expo-image';

export default function App() {

  const [teams, setTeam] = useState<TeamEntity[]>([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_3f8e4374204db29e858bad81c22d24 ");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition: TeamEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/2/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {

          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            team_gols_pro: team['gols_pro'],
            team_gols_contra: team['gols_contra'],
            team_saldo_gols: team['saldo_gols']
          };

          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brasileirão série B</Text>
      <View style={styles.table}>
        <View style={styles.itens}>
          <Text style={styles.gls}>gls</Text>
          <Text style={styles.gc}>gc</Text>
          <Text style={styles.sg}>sg</Text>
        </View>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <View style={styles.item}>
              <Image style={styles.team_shield} source={team.item.team_shield_url} />
              <Text style={styles.team_position}>{team.item.position}</Text>
              <Text style={styles.team_name}>{team.item.team_name}</Text>
              <Text style={styles.team_position}>{team.item.team_points}</Text>
              <Text style={styles.team_position}>{team.item.team_gols_pro}</Text>
              <Text style={styles.team_position}>{team.item.team_gols_contra}</Text>
              <Text style={styles.team_position}>{team.item.team_saldo_gols}</Text>
            </View>
          }

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 30
  },
  table: {
    flex: 1,
    width: '100%'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 50
  },
  team_shield: {
    width: 30,
    height: 30
  },
  team_name: {
    fontSize: 20,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  team_position: {
    width: 30,
    fontSize: 20,
  },
  gls: {
    width: 30,
    fontSize: 20,


  },
  gc: {
    width: 30,
    fontSize: 20,
  },
  sg: {
    width: 30,
    fontSize: 20,
  },
  itens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 50,
    marginHorizontal:300
  },

});