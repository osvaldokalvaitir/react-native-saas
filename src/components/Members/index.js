import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { getMembersRequest } from '~/store/modules/members/actions';

import InviteMember from '~/components/InviteMember';
import RoleUpdater from '~/components/RoleUpdater';

import styles from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);
  const activeTeam = useSelector(state => state.teams.active);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [memberEdit, setMemberEdit] = useState(null);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getMembersRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEMBROS</Text>

      <FlatList
        style={styles.memberList}
        data={members.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.memberContainer}>
            <Text style={styles.memberName}>{item.user.name}</Text>

            <TouchableOpacity
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
              onPress={() => {
                setIsRoleModalOpen(true);
                setMemberEdit(item);
              }}
            >
              <Icon name="settings" size={20} color="#b0b0b0" />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsInviteModalOpen(true)}
          >
            <Text style={styles.buttonText}>Convidar</Text>
          </TouchableOpacity>
        )}
      />

      {memberEdit && (
        <RoleUpdater
          visible={isRoleModalOpen}
          onRequestClose={() => {
            setIsRoleModalOpen(false);
            setMemberEdit(null);
          }}
          member={memberEdit}
        />
      )}

      <InviteMember
        visible={isInviteModalOpen}
        onRequestClose={() => setIsInviteModalOpen(false)}
      />
    </View>
  );
}
