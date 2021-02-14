import ticketListReducer from '../../reducers/ticket-list-reducer';

describe ('ticketListReducer', () => {
  test ('SHould return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  })
})