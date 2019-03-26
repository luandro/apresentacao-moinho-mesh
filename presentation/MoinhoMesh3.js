import React from 'react'
import { Image } from 'spectacle'
export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 350 }} src={require('../assets/pres-no-morro-2.jpg')} />
    <Image rel="preload" style={{ height: 350 }} src={require('../assets/pres-no-casa.jpg')} />
  </div>
)