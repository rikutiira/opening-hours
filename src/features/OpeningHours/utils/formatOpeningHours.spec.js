import * as R from 'ramda'
import formatOpeningHours from './formatOpeningHours'

const openingHours = {
  monday: [
    { type: 'close', value: 3600 },
    { type: 'open', value: 36000 },
    { type: 'close', value: 64800 }
  ],
  tuesday: [
    { type: 'open', value: 36000 },
    { type: 'close', value: 64800 }
  ],
  thursday: [
    { type: 'open', value: 36000 },
    { type: 'close', value: 64800 },
    { type: 'open', value: 68400 },
    { type: 'close', value: 75600 }
  ],
  friday: [
    { type: 'open', value: 36000 },
    { type: 'close', value: 39600 },
    { type: 'open', value: 68400 },
  ],
  saturday: [
    { type: 'close', value: 3600 },
    { type: 'open', value: 36000 },
    { type: 'close', value: 39600 }
  ],
  sunday: [
    { type: 'open', value: 45000 }
  ]
}

describe('when formatting opening hours', () => {
  it('should return days in correct order', () => {
    const expectedOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const formatted = formatOpeningHours(openingHours)

    expect(R.pluck('day', formatted)).toEqual(expectedOrder)
  })

  it('should add missing days with empty opening hours', () => {
    const formatted = formatOpeningHours(openingHours)

    expect(formatted[2]).toEqual({ day: 'wednesday', openingHours: [] })
  })

  it('should create pairs of opening hours', () => {
    const formatted = formatOpeningHours(openingHours)

    expect(formatted[3]).toEqual({
      day: 'thursday',
      openingHours: [
        [ { day: 'thursday', type: 'open', value: 36000 },
          { day: 'thursday', type: 'close', value: 64800 } ],

        [ { day: 'thursday', type: 'open', value: 68400 },
          { day: 'thursday', type: 'close', value: 75600 } ]
      ]
    })
  })

  describe('when opening day is different from closing day', () => {
    describe('and opening day is not on Sunday', () => {
      it('should move closing time to the same day as its opening time', () => {
        const formatted = formatOpeningHours(openingHours)

        expect(formatted[4]).toEqual({
          day: 'friday',
          openingHours: [
            [ { day: 'friday', type: 'open', value: 36000 },
              { day: 'friday', type: 'close', value: 39600 } ],

            [ { day: 'friday', type: 'open', value: 68400 },
              { day: 'saturday', type: 'close', value: 3600 } ]
          ]
        })
      })
    })

    describe('and opening day is on Sunday', () => {
      it('should move closing time to the same day as its opening time', () => {
        const formatted = formatOpeningHours(openingHours)

        expect(formatted[6]).toEqual({
          day: 'sunday',
          openingHours: [
            [ { day: 'sunday', type: 'open', value: 45000 },
              { day: 'monday', type: 'close', value: 3600 } ]
          ]
        })
      })
    })
  })
})