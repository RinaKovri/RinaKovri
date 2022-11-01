import React from 'react'
import ClickCount from './components/clickCount'
import SomeExampleComponent from './components/example/someExampleComponent'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App
