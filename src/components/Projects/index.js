import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getProjectsRequest } from '~/store/modules/projects/actions';

import styles from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(getProjectsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <TouchableOpacity style={styles.newProjectButton} onPress={() => {}}>
        <Icon name="add" size={28} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
