import { combineReducers } from 'redux'
import {collectionsReducer} from './collections'
import {chatReducer} from '../Store/chats'
import {profileReducer} from '../Store/profile/reducer'
export const reducer = combineReducers({
  collections: collectionsReducer,
  chats: chatReducer,
  profileReducer
  })