import styled from 'styled-components'
import * as styles from 'styles'

export const OpeningHours = styled.div`
  width: 500px;
  max-width: 90%;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export const Header = styled.div`
  flex: 0 0 auto;
  font: ${styles.fonts.large};
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-bottom: ${styles.sizes.medium};
  border-bottom: 1px solid ${styles.colors.dark};
`

export const OpeningHoursRow = styled.div`
  font: ${styles.fonts.normal};
  display: flex;
  padding: ${styles.sizes.medium} 0;
  border-bottom: 1px solid #EEEEEE;
  align-items: flex-start;
`
export const DayPart = styled.div`
  flex: 1 0 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
`

export const TodayTag = styled.div`
  font: ${styles.fonts.small};
  font-weight: 700;
  color: ${styles.colors.green};
  margin-left: ${styles.sizes.medium};
  text-transform: uppercase;
`

export const OpeningHoursPart = styled.div`
  display: flex;
  flex-flow: column;
  text-align: right;
`