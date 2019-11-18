import React from 'react'
import { LocalizationProvider } from 'i18n/localize'
import openingHours from 'assets/json/openingHours.json'
import { OpeningHours } from './features'

const App = () => {
  return (
    <LocalizationProvider lang="en">
      <OpeningHours openingHours={openingHours} />
    </LocalizationProvider>
  )
}

export default App;