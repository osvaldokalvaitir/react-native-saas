import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import TeamSwitcher from '~/components/TeamSwitcher';
import Projects from '~/components/Projects';

import styles from './styles';

export default function Main() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const activeTeam = useSelector(state => state.teams.active);

  return (
    <View style={styles.backgroundWrapper}>
      <SideMenu
        isOpen={leftOpen}
        disableGestures
        onChange={isOpen => setLeftOpen(isOpen)}
        openMenuOffset={70}
        menu={<TeamSwitcher />}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
              onPress={() => {
                setLeftOpen(true);
              }}
            >
              <Icon name="menu" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.teamTitle}>
              {activeTeam ? activeTeam.name : 'Selecione um time'}
            </Text>
            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
              onPress={() => {}}
            >
              <Icon name="group" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <Projects />
        </View>
      </SideMenu>
    </View>
  );
}
