import React from 'react'
import { Image } from 'spectacle'
export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image style={{ height: 500 }} src={require('../assets/pres-no-morro.jpg')} />
    <Image style={{ height: 500 }} src={require('../assets/pres-antena-diy.jpg')} />
  </div>
)