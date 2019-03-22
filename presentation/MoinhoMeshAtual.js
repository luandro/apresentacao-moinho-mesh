import React from 'react'
import { Image } from 'spectacle'

export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image style={{ height: 380 }} src={require('../assets/pres-moinho-mesh-atual.jpg')} />
    <Image style={{ height: 380 }} src={require('../assets/pres-conecta.jpg')} />
  </div>
)