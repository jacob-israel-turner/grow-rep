import React, {PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function RepList ({reps, selectRep}) {
  if (!reps) return null
  return (
    <MuiThemeProvider>
      <List>
        {reps.map(renderRep)}
      </List>
    </MuiThemeProvider>
  )

  function renderRep ({name, party, link}, index) {
    return <ListItem
              onClick={selectRep.bind(null, index)}
              key={link}
              primaryText={`${party[0]} - ${name}`}
            />
  }
}


RepList.propTypes = {
  selectRep: PropTypes.func.isRequired,
  reps: PropTypes.array
}
