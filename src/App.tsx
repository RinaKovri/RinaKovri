import React from 'react'
import ClickCount from './components/clickCount'
import AboutMe from './components/aboutMe/aboutMe'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <AboutMe />
    </div>
  )
}

export default App
