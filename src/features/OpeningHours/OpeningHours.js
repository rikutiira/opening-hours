import React from 'react'
import PropTypes from 'prop-types'
import * as styles from 'styles'
import { Panel, Icon } from 'components'
import { convertSecondsTo12HourFormat as convertTime } from 'utils/time'
import { useLocalize } from 'i18n/localize'
import formatOpeningHours from './utils/formatOpeningHours'
import * as Styled from './OpeningHours.styles'

/**
 * It's assumed that we can use user's timezone
 */
const isToday = idx => (idx + 1) % 7 === new Date().getDay()

const renderDayPart = (day, idx, localize) => {
  return (
    <Styled.DayPart>
      <div>{localize(`weekdays.${day}`)}</div>
      {isToday(idx) && (
        <Styled.TodayTag>{localize('today')}</Styled.TodayTag>
      )}
    </Styled.DayPart>
  )
}

const renderOpeningHoursPart = openingHours => {
  const hasOpeningHours = !!openingHours.length

  return (
    <Styled.OpeningHoursPart>
      {hasOpeningHours
        ? openingHours.map(([openingHour, closingHour]) => (
          <span key={openingHour.value}>
            {convertTime(openingHour.value)} - {convertTime(closingHour.value)}
          </span>
        ))
        : <span style={{ color: styles.colors.grey03 }}>Closed</span>
      }
    </Styled.OpeningHoursPart>
  )
}

const renderHeader = (localize) => (
  <Styled.Header>
    <Icon name="time" color={styles.colors.grey03} size="1.5rem" />
    <div style={{ marginLeft: styles.sizes.medium }}>{localize('openingHours')}</div>
  </Styled.Header>
)

const renderOpeningHours = (data, localize) =>
  data.map((row, idx) => {
    const { day, openingHours } = row

    return (
      <Styled.OpeningHoursRow key={day}>
        {renderDayPart(day, idx, localize)}
        {renderOpeningHoursPart(openingHours)}
      </Styled.OpeningHoursRow>
    )
  })

const OpeningHours = ({ openingHours }) => {
  const localize = useLocalize()
  const data = formatOpeningHours(openingHours)

  return (
    <Styled.OpeningHours>
      <Panel style={{ maxHeight: '80vh', overflow: 'auto' }}>
        {renderHeader(localize)}
        {renderOpeningHours(data, localize)}
      </Panel>
    </Styled.OpeningHours>
  )
}

OpeningHours.propTypes = {
  openingHours: PropTypes.object.isRequired
}

export default OpeningHours