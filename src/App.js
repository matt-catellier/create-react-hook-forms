import React from 'react';
import './App.css';
import Home from './Home'
import Playground from './examples/Playground.js'
import FormValidation from './examples/FormValidation'
import MultiStepFormValidation from './examples/MultiStepFormValidation/index'

const HOME = '/'
const PLAYGROUND = 'example/playground'
const FORM_VALIDATION = 'example/validation'
const MULTI_STEP_VALIDATION = 'example/multi-step-validation'

const routes = {
  [HOME]: <Home />,
  [PLAYGROUND]: <Playground />,
  [FORM_VALIDATION]: <FormValidation />,
  [MULTI_STEP_VALIDATION]: <MultiStepFormValidation />,
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
  const [page, setPage] = React.useState(MULTI_STEP_VALIDATION)
  const navigateTo = (to) => () => { setPage(to) }

  return (
    <div className="App">
      <div style={{ flexDirection: 'row', padding: 10 }}>
        <div style={style.navItem} onClick={navigateTo(HOME)}>Home</div>
        <div style={style.navItem} onClick={navigateTo(PLAYGROUND)}>State Playground</div>
        <div style={style.navItem} onClick={navigateTo(FORM_VALIDATION)}>Form Validation</div>
        <div style={style.navItem} onClick={navigateTo(MULTI_STEP_VALIDATION)}>Multi-step Form Validation</div>
      </div>
      <div style={{padding: 10, margin: 10, borderTop: '1px solid gray'}}>
        {routes[page]}
      </div>
    </div>
  );
}

export default App;
