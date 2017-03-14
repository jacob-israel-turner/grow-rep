import React, {PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function RepInfo({rep}) {
  if (!rep) return <div />
  const { name, district, link, office, party, phone, state } = rep
  return (
    <MuiThemeProvider>
      <Card>
        <CardHeader 
          title={name}
          subtitle={`${party} - ${state}`}
        />
        <CardText>
          <div>{district ? <div>District {district}</div> : null}</div>
          <div>Office: {office}</div>
          <div>Phone: {phone}</div> 
        </CardText>
        <CardActions>
          <RaisedButton label={"Visit Office"} href={`http://maps.google.com/?q=${office}`} target="_blank"/>
          <RaisedButton label={"Website"} href={link} target="_blank" />
          <RaisedButton label={"Call"} href={`tel:${phone}`} target="_blank" />
        </CardActions>
      </Card>
    </MuiThemeProvider>
  )
}

RepInfo.propTypes = {
  rep: PropTypes.shape({
    name: PropTypes.string.isRequired,
    district: PropTypes.string,
    link: PropTypes.string.isRequired,
    office: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })
}
