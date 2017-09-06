/**
 * Created by guangqiang on 2017/8/21.
 */
import { combineReducers } from 'redux'
import launch from './init'
import home from './home'
import find from './find'

import picture from './picture'
const rootReducer = combineReducers({
  launch,
  home,
  find,
  picture
})

export default rootReducer