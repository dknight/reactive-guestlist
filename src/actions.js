import ActionsTypes from './ActionsTypes'

export const guestCheckIn = guest => ({
  type: ActionsTypes.GUEST_CHECKIN,
  ...guest
})

export const guestCheckOut = guest => ({
  type: ActionsTypes.GUEST_CHECKOUT,
  ...guest
})

export const guestFilterTerm = needle => ({
  type: ActionsTypes.GUEST_FILTER,
  needle
})

export const resetGuestFilterTerm = needle => ({
  type: ActionsTypes.GUEST_FILTER_RESET
})

export const guestSort = sortBy => ({
  type: ActionsTypes.GUEST_SORT,
  sortBy
})