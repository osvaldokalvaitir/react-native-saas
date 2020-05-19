import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Text, TextInput, TouchableOpacity } from 'react-native';

import { inviteMemberRequest } from '~/store/modules/members/actions';

import Modal from '~/components/Modal';

import styles from './styles';

export default function InviteMember({ visible, onRequestClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  function handleSubmit() {
    dispatch(inviteMemberRequest(email));
    setEmail('');
    onRequestClose();
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        autoFocus
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>CONVIDAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRequestClose} style={styles.cancel}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}

InviteMember.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
