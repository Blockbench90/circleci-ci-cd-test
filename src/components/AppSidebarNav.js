import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const AppSidebarNav = ({ items }) => {
  const navLink = (name) => {
    return <>{name && name}</>
  }

  const navItem = (item, index) => {
    const { component, name, badge, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, badge)}
      </Component>
    )
  }

  return (
    <React.Fragment>{items && items.map((item, index) => navItem(item, index))}</React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
