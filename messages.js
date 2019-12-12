import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { actions } from './store';

const Messages = (props) => {
  return(
    <View style={styles.container}>
      <Text>Native Message App</Text>
    </View>
  )
}

const mapStateToProps = state => ({
  messages: state.messages,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(actions.fetchMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});