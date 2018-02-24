import { capitalize } from './string-helper'

export const filterGuests = (needle='', guests) => {
  let result
  if (needle.length < 1) {
    result = guests
  } else {
    result = guests.filter(guest => 
      guest.name.first.includes(needle.toLowerCase()) ||
      guest.name.last.includes(needle.toLowerCase())
    )
  }
  return result
}

export const fullname = guest =>
  `${capitalize(guest.name.first)} ${capitalize(guest.name.last)}`

export const isCheckedIn = guest =>
  !!guest.checkedin_at