import React from 'react'
import { Image } from 'spectacle'

export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 300 }} src={require('../assets/pres-3.jpg')} />
    <Image rel="preload" style={{ height: 300 }} src={require('../assets/pres-3.1.jpg')} />
  </div>
)