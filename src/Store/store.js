import { createStore } from 'redux';
import { profileReducer } from '../Store/reducers/reducer'

export const store = createStore(profileReducer);


