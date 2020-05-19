import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getTeamsRequest, selectTeam } from '~/store/modules/teams/actions';

import NewTeam from '~/components/NewTeam';

import styles from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getTeamsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <TouchableOpacity
        style={styles.newTeam}
        onPress={() => setIsModalOpen(true)}
      >
        <Icon name="add" size={24} color="#999" />
      </TouchableOpacity>

      <NewTeam
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </View>
  );
}
