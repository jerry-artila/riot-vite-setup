import './style.css'

import * as riot from 'riot'
import MyTag from './my-tag.riot'

const mountApp = riot.component(MyTag)
mountApp(document.getElementById('demo1'),{
  message: '賴清德去死',
  // color: 'text-green-600'
})
mountApp(document.getElementById('demo2'),{
  message: '大罷免，大惡鬥',
  color: 'text-green-600'
})
mountApp(document.getElementById('demo3'),{
  message: '主耶穌，快快來',
  color: 'text-red-600'
})
