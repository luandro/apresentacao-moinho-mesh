import React from 'react'
import { Image } from 'spectacle'

export default () => (
  <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 380 }} src={require('../assets/pres-moinho-mesh-atual.jpg')} />
    <Image rel="preload" style={{ height: 380 }} src={require('../assets/pres-conecta.jpg')} />
  </div>
)