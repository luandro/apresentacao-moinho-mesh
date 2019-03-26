import React from 'react'
import { Image } from 'spectacle'
export default () => <div>
  <h1 style={{ textTransform: 'uppercase', fontSize: '0.8em' }}>Ecosistema de Aplicativos Livres</h1>
  <Image style={{ maxHeight: 550 }} src={require('../assets/open-app.jpg')} />
  <a target="_blank" href="https://github.com/open-app" style={{ position: 'fixed', top: 55, left: 55 }}>
    <img style={{ width: 80 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png"/>
  </a>
  <a style={{ textDecoration: 'none', color: 'black', border: '1px solid black', padding: '5px 7px', marginTop: 5 }} href="https://github.com/open-app/app-hub-mobile/releases/download/pre-alpha-v1/AppHub.apk" target="_blank">
    Baixar o AppHub
  </a>
</div>