import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profile = React.lazy(() => import('./views/profile/Profile'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/table', name: 'Dashboard', element: Dashboard },
  { path: '/profile/:id', name: 'Theme', element: Profile, exact: true },
]

export default routes
