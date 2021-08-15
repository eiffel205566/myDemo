import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import { useState } from 'react'
import { AppContext } from 'src/context/AppContext'
import { listData, listOfObj } from 'src/data/myData'

const App = () => {
  const [selection, setSelection] = useState({
    selected: null,
    detailItems: null,
    extendedKey: null,
  })

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <AppContext.Provider
      value={[selection, setSelection, listData, listOfObj, draw]}
    >
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </AppContext.Provider>
  )
}

export default App
