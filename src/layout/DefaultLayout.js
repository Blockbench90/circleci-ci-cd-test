import React from 'react'
import { AppContent, AppSidebar } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 p-3">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
