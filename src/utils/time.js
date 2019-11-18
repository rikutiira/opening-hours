import * as R from 'ramda'

const addTrailingZero = timePart => timePart < 10 ? `0${timePart}` : timePart

const toReadableTime = (hours, minutes) =>
  minutes
    ? `${hours}:${addTrailingZero(minutes)}`
    : `${hours}`

export const convertSecondsTo24Format = seconds => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(seconds % 3600 / 60)

  return toReadableTime(hours, minutes)
}

export const convert24HourTo12HourFormat = time24 => {
  const [hours, minutes] = time24.split(':').map(Number)
  const suffix = hours < 12 || hours === 24 ? 'AM' : 'PM'
  const hours12 = hours % 12 || 12

  return `${toReadableTime(hours12, minutes)} ${suffix}`
}

export const convertSecondsTo12HourFormat = R.pipe(
  convertSecondsTo24Format,
  convert24HourTo12HourFormat
)