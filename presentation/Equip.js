import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'

export default () => (
  <div>
    <h2 style={{ color: theme.screen.colors.secondary }}>Equipamento</h2> 
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
      <Image style={{ height: 520 }} src={require('../assets/pre-roteadores.jpg')} />
      <Image style={{ height: 520 }} src={require('../assets/pre-caixas.jpg')} />
    </div>
  </div>
)