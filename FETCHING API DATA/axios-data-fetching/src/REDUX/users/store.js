import {userReducer} from './users.reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'

let middleware = [thunk, logger]

let store = createStore(userReducer , composeWithDevTools(applyMiddleware(...middleware)))

export {store}