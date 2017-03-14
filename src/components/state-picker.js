import React, {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import states from '../states.json'

const styles = StyleSheet.create({
  container: {
    margin: '10px'
  }
})

export default function StatePicker ({onStateChange, state}) {
  return (
    <MuiThemeProvider>
      <SelectField
        className={css(styles.container)}
        floatingLabelText="Select Your State"
        value={state}
        onChange={(event, index, value) => onStateChange(value)}>
        {states.map(renderState)}
      </SelectField>    
    </MuiThemeProvider>
  )
}

function renderState(item) {
  return <MenuItem
            value={item.abbreviation}
            key={item.abbreviation}
            primaryText={`${item.abbreviation}${item.abbreviation ? ' - ' : ''}${item.name}`}
          />
}

StatePicker.propTypes = {
  onStateChange: PropTypes.func.isRequired,
  state: PropTypes.string
}
