import React, { Component } from 'react'
import axios from 'axios'
import {StyleSheet, css} from 'aphrodite'
import injectTapEventPlugin from 'react-tap-event-plugin'

import StatePicker from './components/state-picker'
import TypePicker from './components/type-picker'
import RepList from './components/rep-list'
import RepInfo from './components/rep-info'

injectTapEventPlugin()

const baseUrl = 'http://localhost:9001'

const styles = StyleSheet.create({
  repContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
})

class App extends Component {
  state = {
    state: '',
    type: '',
    reps: [],
    selectedRep: null
  }
  async handleChange() {
    this.setState({selectedRep: null})
    if (!this.state.state || !this.state.type) return
    const {data: {results: reps}} = await axios.get(`${baseUrl}/${this.state.type}/${this.state.state}`)
    this.setState({reps})
  }
  render() {
    return (
      <div className="App">
        <StatePicker state={this.state.state} onStateChange={state => this.setState({state}, this.handleChange)} />
        <TypePicker type={this.state.type} onTypeChange={type => this.setState({type}, this.handleChange)} />
        <div className={css(styles.repContainer)}>
          <RepList reps={this.state.reps} selectRep={index => this.setState({selectedRep: index})} />
          <RepInfo rep={this.state.reps ? this.state.reps[this.state.selectedRep] : null} />
        </div>
      </div>
    );
  }
}

export default App
