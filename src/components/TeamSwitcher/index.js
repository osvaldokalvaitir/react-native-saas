import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getTeamsRequest, selectTeam } from '~/store/modules/teams/actions';

import styles from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);
  const activeTeam = useSelector(state => state.teams.active);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getTeamsRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!activeTeam) return null;

  return (
    <View style={styles.container}>
      {teams.data.map(team => (
        <TouchableOpacity
          key={team.id}
          style={styles.teamContainer}
          onPress={() => {
            dispatch(selectTeam(team));
          }}
        >
          <Image
            style={styles.teamAvatar}
            source={{
              uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`,
            }}
          />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.newTeam} onPress={() => {}}>
        <Icon name="add" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
}
