import React from 'react';
import './App.css';
import Home from './Home'
import Playground from './examples/Playground.js'

const HOME = '/'
const PLAYGROUND = 'example/playground'

const routes = {
  [HOME]: <Home />,
  [PLAYGROUND]: <Playground />
}

const style = {
  navItem: {
    padding: 10,
    marginRight: 2,
    backgroundColor: 'grey',
    color: 'white',
    cursor: 'pointer'
  }
}

function App() {
  const [page, setPage] = React.useState(PLAYGROUND)
  const navigateTo = (to) => () => { setPage(to) }

  return (
    <div className="App">
      <div style={{ flexDirection: 'row', padding: 10 }}>
        <div style={style.navItem} onClick={navigateTo(HOME)}>Home</div>
        <div style={style.navItem} onClick={navigateTo(PLAYGROUND)}>State Playground</div>
      </div>
      <div style={{padding: 10, margin: 10, borderTop: '1px solid gray'}}>
        {routes[page]}
      </div>
    </div>
  );
}

export default App;
