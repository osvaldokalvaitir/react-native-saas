import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Text, TextInput, TouchableOpacity } from 'react-native';

import { createProjectRequest } from '~/store/modules/projects/actions';

import Modal from '~/components/Modal';

import styles from './styles';

export default function NewProject({ visible, onRequestClose }) {
  const dispatch = useDispatch();
  const [newProject, setNewProject] = useState('');

  function handleSubmit() {
    dispatch(createProjectRequest(newProject));
    setNewProject('');
    onRequestClose();
  }

  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Text style={styles.label}>TÍTULO</Text>
      <TextInput
        style={styles.input}
        autoFocus
        underlineColorAndroid="transparent"
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={newProject}
        onChangeText={text => setNewProject(text)}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>CRIAR PROJETO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRequestClose} style={styles.cancel}>
        <Text style={styles.cancelText}>CANCELAR</Text>
      </TouchableOpacity>
    </Modal>
  );
}

NewProject.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
