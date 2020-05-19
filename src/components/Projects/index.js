import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import NewProject from '~/components/NewProject';

import { getProjectsRequest } from '~/store/modules/projects/actions';

import styles from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);
  const activeTeam = useSelector(state => state.teams.active);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!activeTeam) return null;

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.projectsList}
        data={projects.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.projectContainer}>
            <Text style={styles.projectTitle}>{item.title}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.newProjectButton}
        onPress={() => setIsModalOpen(true)}
      >
        <Icon name="add" size={28} color="#FFF" />
      </TouchableOpacity>

      <NewProject
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </View>
  );
}
