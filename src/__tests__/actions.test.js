import { guestCheckIn,
         guestCheckOut,
         guestFilterTerm,
         resetGuestFilterTerm,
         guestSort
       } from '../actions'
import ActionsTypes from '../ActionsTypes'
import Config from '../Config'

describe('actions', () => {

  it('should dispatch guestCheckIn', () => {
    const guest = __initialState__.guests[0]
    const expectedPayload = {
      type: ActionsTypes.GUEST_CHECKIN,
      ...guest
    }
    let actions = __store__.getActions()
    __store__.dispatch(guestCheckIn(guest))
    expect(actions[0]).toEqual(expectedPayload)
  })

  it('should dispatch guestCheckOut', () => {
    const guest = __initialState__.guests[0]
    const expectedPayload = {
      type: ActionsTypes.GUEST_CHECKOUT,
      ...guest
    }
    const actions = __store__.getActions()
    __store__.dispatch(guestCheckOut(guest))
    expect(actions[1]).toEqual(expectedPayload)
  })

  it('should dispatch guestFilterTerm', () => {
    const needle = 'MockMock'
    const expectedPayload = {
      type: ActionsTypes.GUEST_FILTER,
      needle
    }
    const actions = __store__.getActions()
    __store__.dispatch(guestFilterTerm(needle))
    expect(actions[2]).toEqual(expectedPayload)
  })

  it('should reset guestFilterTerm', () => {
    const expectedPayload = {
      type: ActionsTypes.GUEST_FILTER_RESET
    }
    const actions = __store__.getActions()
    __store__.dispatch(resetGuestFilterTerm())
    expect(actions[3]).toEqual(expectedPayload)
  })

  it('should sort guests', () => {
    const expectedPayload = {
      type: ActionsTypes.GUEST_SORT,
      sortBy: Config.SORT_BY_FIRSTNAME
    }
    const actions = __store__.getActions()
    __store__.dispatch(guestSort(Config.SORT_BY_FIRSTNAME))
    expect(actions[4]).toEqual(expectedPayload)
  })
})