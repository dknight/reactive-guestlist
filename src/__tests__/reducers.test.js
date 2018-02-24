import {
  guest,
  guests,
  events,
  guestFilterTerm,
  guestSortReducer
} from '../reducers'
import ActionsTypes from '../ActionsTypes'

describe('guest reducer', () => {
  it('should return the initial state', () => {
    expect(guest(undefined, {})).toEqual({})
  })

  it('should handle GUEST_CHECKIN', () => {
    expect(
      guest({}, {
        type: ActionsTypes.GUEST_CHECKIN,
        guest: __initialState__.guests[0]
      }).checkedin_at
    )
    .toBeInstanceOf(Date)
  })

  it('should handle GUEST_CHECKOUT', () => {
    expect(
      guest({}, {
        type: ActionsTypes.GUEST_CHECKOUT,
        guest: __initialState__.guests[0]
      })
    )
    .toEqual({ checkedin_at: null})
  })
})

describe('guests reducer', () => {
  it('should return the initial state', () => {
    expect(guest(undefined, {})).toEqual({})
  })

  it('should handle GUEST_CHECKIN and GUEST_CHECKOUT', () => {
    expect(
      guests(__initialState__.guests, {
        type: ActionsTypes.GUEST_CHECKIN,
        guest: __initialState__.guests[0]
      })
    )
    .toEqual(__store__.getState().guests)

    expect(
      guests(__initialState__.guests, {
        type: ActionsTypes.GUEST_CHECKOUT,
        guest: __initialState__.guests[0]
      })
    )
    .toEqual(__store__.getState().guests)
  })

  it('should handle GUEST_FILTER', () => {
    expect(
      guests(__initialState__.guests, {
        type: ActionsTypes.GUEST_FILTER,
        guest: __initialState__.guests[0]
      })
    )
    .toEqual([...__store__.getState().guests])
  })

  it('should handle GUEST_SORT by last name', () => {
    expect(
      guests(__initialState__.guests, {
        type: ActionsTypes.GUEST_SORT,
        sortBy: 'SORT_BY_LASTNAME'
      })
    )
    .toEqual([...__store__.getState().guests.sort((a,b) => a.name.last > b.name.last)])
  })

  it('should handle GUEST_SORT by default', () => {
    expect(
      guests(__initialState__.guests, {
        type: ActionsTypes.GUEST_SORT,
        sortBy: 'SORT_BY_FIRSTNAME'
      })
    )
    .toEqual([...__store__.getState().guests.sort((a,b) => a.name.first > b.name.first)])
  })

    it('should handle GUEST_SORT by first name by default', () => {
    expect(
      guests(__initialState__.guests, {
        type: ActionsTypes.GUEST_SORT,
        sortBy: 'NOT_EXISTING_SORT_PARAM'
      })
    )
    .toEqual([...__store__.getState().guests.sort((a,b) => a.name.first > b.name.first)])
  })
})

describe('events reducer', () => {
  it('should return the initial state', () => {
    expect(events(undefined, {})).toEqual([])
  })
})

describe('sort reducer', () => {
  it('should return the initial state', () => {
    expect(guestSortReducer('', {})).toEqual('')
  })
  it('should return the hello sort key', () => {
    expect(guestSortReducer('hello', {})).toEqual('hello')
  })

  it('should handle GUEST_SORT', () => {
    const sortBy = 'Krja-Krja'
    expect(
      guestSortReducer('', {
        type: ActionsTypes.GUEST_SORT,
        sortBy
      })
    )
    .toEqual(sortBy)
  })
})

describe('guestFilterTerm reducer', () => {
  it('should return the initial state', () => {
    expect(guestFilterTerm(undefined, {})).toEqual('')
  })

  it('should handle GUEST_FILTER', () => {
    const needle = 'mockmock'
    expect(
      guestFilterTerm('', {
        type: ActionsTypes.GUEST_FILTER,
        needle
      })
    )
    .toEqual(needle)
  })

  it('should handle GUEST_FILTER_RESET', () => {
    expect(
      guestFilterTerm(__initialState__.guests, {
        type: ActionsTypes.GUEST_FILTER_RESET
      })
    )
    .toEqual('')
  })
})