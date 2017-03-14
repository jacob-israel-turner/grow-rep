import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const types = ['', 'Senators', 'Representatives']

export default function TypePicker ({type, onTypeChange}) {
  return (
    <MuiThemeProvider>
      <SelectField
        floatingLabelText="Select Representative Type"
        value={type}
        onChange={(event, index, value) => onTypeChange(value)}>
        {types.map(item => <MenuItem value={item} key={item} primaryText={item}/>)}
      </SelectField>    
    </MuiThemeProvider>
  )
}
