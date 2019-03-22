import React from 'react'

export default () => (
  <div>
    <video autoPlay muted loop id="myVideo">
      <source src={require('../assets/pres-video.mp4')} type="video/mp4" />
    </video>
    <div className="content">
      <h1>2014 & 2015</h1>
      <h2>aprendendo a programar e criando minha filha</h2>
    </div>
  </div>
)