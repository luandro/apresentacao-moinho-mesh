import React from 'react'
import { Image } from 'spectacle'

export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 500 }} src={require('../assets/pres-1.png')} />
    <Image rel="preload" style={{ height: 500 }} src={require('../assets/pres-1.1.png')} />
  </div>
)