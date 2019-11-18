import React, { useContext } from 'react'
import * as R from 'ramda'
import localizations from './localizations.json'

const LocalizationContext = React.createContext();

const localize = R.curry((lang, key) => {
  const path = [...key.split('.'), lang]

  return R.path(path, localizations)
})

export const LocalizationProvider = ({ children, lang }) => (
  <LocalizationContext.Provider value={{ lang }}>
    {children}
  </LocalizationContext.Provider>
)

export const useLocalize = () => {
  const { lang } = useContext(LocalizationContext)

  return localize(lang)
}