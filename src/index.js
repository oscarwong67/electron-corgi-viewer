import React from 'react'
import ReactDOM from 'react-dom'
import web from './browser.svg'
import Content from './content'
import Jumbotron from './jumbotron'

const style = {
  fontFamily:"-apple-system, 'Helvetica Neue', sans-serif",
  fontWeight: 900,
  fontSize: 40,
  letterSpacing:'-.04em'
}

function App () {
  return (
    <div style={{ width: '100vw', margin: '0 auto', textAlign: 'center', fontFamily: 'Helvetica'}}>
      <Jumbotron />
      <Content />
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'));
