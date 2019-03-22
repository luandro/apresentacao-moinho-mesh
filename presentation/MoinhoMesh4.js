import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'

export default () => (
  <div>
    <h2 style={{ color: theme.screen.colors.secondary }}>⚡⛈️ Época da chuva 🌧️☔</h2> 
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
      <Image style={{ height: 350 }} src={require('../assets/pres-no-morro-3.jpg')} />
      <Image style={{ height: 350 }} src={require('../assets/pres-porta-tomada.jpg')} />
    </div>
  </div>
)