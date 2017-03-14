import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import states from '../states.json'

export default function StatePicker ({onStateChange, state}) {
  return (
    <MuiThemeProvider>
      <SelectField
        floatingLabelText="Select Your State"
        value={state}
        onChange={(event, index, value) => onStateChange(value)}>
        {states.map(item => <MenuItem value={item.abbreviation} key={item.abbreviation} primaryText={`${item.abbreviation}${item.abbreviation ? ' - ' : ''}${item.name}`}/>)}
      </SelectField>    
    </MuiThemeProvider>
  )
}
