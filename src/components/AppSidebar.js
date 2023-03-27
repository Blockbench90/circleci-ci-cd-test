import React from 'react'
import { useSelector } from 'react-redux'

import { CSidebar, CSidebarNav } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)

  return (
    <CSidebar position="fixed" unfoldable={unfoldable}>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
