import { capitalize } from '../lib/string-helper'
import { filterGuests, isCheckedIn } from '../lib/guests-helper'

describe('String helpers', () => {
  it('should capitalize string', () => {
    expect(capitalize('hello')).toEqual('Hello')
  })
})

describe('Guests helpers', () => {
  it('should filter 1 user', () => {
    expect(filterGuests('luc', __initialState__.guests).length).toBe(1)
  })
  it('should filter 0 user', () => {
    expect(filterGuests('BAMBARBIA', __initialState__.guests).length).toBe(0)
  })
  it('should filter 4 user', () => {
    expect(filterGuests('', __initialState__.guests).length).toBe(4)
  })
  it('isnt checked in', () => {
    expect(isCheckedIn(__initialState__.guests[0])).toBeFalsy()
  })
  it('is checked in', () => {
    const guest = __initialState__.guests[0]
    guest.checkedin_at = new Date()
    expect(isCheckedIn(guest)).toBeTruthy()
  })
})