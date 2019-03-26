import React from 'react'
import { Image } from 'spectacle'
export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 500 }} src={require('../assets/pres-no-morro.jpg')} />
    <Image rel="preload" style={{ height: 500 }} src={require('../assets/pres-antena-diy.jpg')} />
  </div>
)