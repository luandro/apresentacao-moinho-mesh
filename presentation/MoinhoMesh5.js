import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'

export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image style={{ height: 500 }} src={require('../assets/pres-no-dura.jpg')} />
    <Image style={{ height: 500 }} src={require('../assets/pres-no-dino.jpg')} />
  </div>
)