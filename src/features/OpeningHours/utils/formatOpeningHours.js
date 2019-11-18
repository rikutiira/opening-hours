import * as R from 'ramda'

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const flattenHoursInOrder = R.pipe(
  R.mapObjIndexed((openingHours, day) => openingHours.map(R.merge({ day }))),
  R.props(days),
  R.filter(Boolean),
  R.unnest,
  R.when(R.pathSatisfies(R.equals('close'), [0, 'type']), R.move(0, -1)),
)

const pairOpeningHoursByDay = R.pipe(
  R.splitEvery(2),
  R.groupBy(R.path([0, 'day']))
)

export default (openingHours) => {
  const openingHoursByDay = R.pipe(
    flattenHoursInOrder,
    pairOpeningHoursByDay
  )(openingHours)

  return days.map((day) => ({
    day,
    openingHours: openingHoursByDay[day] || []
  }))
}