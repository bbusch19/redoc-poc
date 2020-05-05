import React from 'react'
import './App.css'
import { RedocStandalone } from 'redoc'
import AnalyticsApi from './analytics.json'
require('typeface-inter')

function App() {
  return (
    <div className="App">
      <RedocStandalone
        spec={AnalyticsApi}
        options={{
          theme: {
            colors: {
              primary: { main: '#165fcf' },
              success: { main: '#208844' },
              warning: { main: '#f7b148' },
              error: { main: '#dc3552' },
              text: {
                primary: '#5b616c',
              },
              http: {
                get: '#468fff',
                post: '#5eac7d',
                delete: '#e37383',
                put: '#f7b148',
              },
            },
            typography: {
              fontFamily: 'Inter',
              headings: {
                fontFamily: 'Inter',
              },
            },
            sidebar: {
              textColor: '#5b616c',
            },
          },
        }}
      />
    </div>
  )
}

export default App
