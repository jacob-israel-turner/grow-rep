import React, { Component } from 'react'
import axios from 'axios'
import {StyleSheet, css} from 'aphrodite'
import injectTapEventPlugin from 'react-tap-event-plugin'
import autobind from 'autobind-decorator'

import StatePicker from './components/state-picker'
import TypePicker from './components/type-picker'
import RepList from './components/rep-list'
import RepInfo from './components/rep-info'

injectTapEventPlugin() // A temporary requirement of the Material UI Component library

const baseUrl = 'http://localhost:9001'

const styles = StyleSheet.create({
  repContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  pickerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

class App extends Component {
  state = {
    state: '',
    type: '',
    reps: [],
    selectedRep: null
  }
  @autobind
  handleStateChange(state) {
    if (state === this.state.state) return;
    this.setState({ selectedRep: null, reps: [], state }, this.fetchReps)
  }
  @autobind
  handleTypeChange(type) {
    if (type === this.state.type) return;
    this.setState({ selectedRep: null, reps: [], type }, this.fetchReps)
  }
  async fetchReps() {
    if (!this.state.state || !this.state.type) return
    const {data: {results: reps}} = await axios.get(`${baseUrl}/${this.state.type}/${this.state.state}`)
    this.setState({reps})
  }
  handleChange({state, type}) {
    if ((state && state === this.state.state) || (type && type === this.state.type)) return;
    let newState = {selectedRep: null, reps: []}
    if (state) newState.state = state
    if (type) newState.type = type
    this.setState(newState, async () => {
    })
  }
  render() {
    return (
      <div className="App">
        <div className={css(styles.pickerContainer)}>
          <StatePicker state={this.state.state} onStateChange={this.handleStateChange} />
          <TypePicker type={this.state.type} onTypeChange={this.handleTypeChange} />
        </div>
        <div className={css(styles.repContainer)}>
          <RepList reps={this.state.reps} selectRep={index => this.setState({selectedRep: index})} />
          <RepInfo rep={this.state.reps ? this.state.reps[this.state.selectedRep] : null} />
        </div>
      </div>
    );
  }
}

export default App
