import React, {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const types = ['', 'Senators', 'Representatives']

const styles = StyleSheet.create({
  container: {
    margin: '10px'
  }
})

export default function TypePicker ({type, onTypeChange}) {
  return (
    <MuiThemeProvider>
      <SelectField
        className={css(styles.container)}
        floatingLabelText="Select Representative Type"
        value={type}
        onChange={(event, index, value) => onTypeChange(value)}>
        {types.map(item => <MenuItem value={item} key={item} primaryText={item}/>)}
      </SelectField>    
    </MuiThemeProvider>
  )
}


TypePicker.propTypes = {
  onTypeChange: PropTypes.func.isRequired,
  type: PropTypes.string
}
