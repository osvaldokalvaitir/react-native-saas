import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Modal as RNModal,
} from 'react-native';

import styles from './styles';

export default function Modal({ visible, children, onRequestClose }) {
  return (
    <RNModal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={styles.content}>{children}</View>
      </KeyboardAvoidingView>
    </RNModal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
