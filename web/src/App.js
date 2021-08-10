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
  })

  return (
    <AppContext.Provider value={[selection, setSelection, listData, listOfObj]}>
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
