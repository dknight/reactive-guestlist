import { saver, logger } from '../store'

const createLogger = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = (action) => logger(store)(next)(action)

  return {store, next, invoke}
}

const createSaver = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = (action) => saver(store)(next)(action)

  return {store, next, invoke}
}

it('logger: passes through non-function action', () => {
  const { next, invoke } = createLogger()
  const action = {type: 'TEST'}
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})

it('saver: passes through non-function action', () => {
  const { next, invoke } = createSaver()
  const action = {type: 'TEST'}
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})
