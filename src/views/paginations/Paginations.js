import React from 'react'
import { CCard, CCardBody, CCol, CPagination, CPaginationItem, CRow } from '@coreui/react'
import PropTypes from 'prop-types'

export const Paginations = ({ count, onPageChange }) => {
  const pages = new Array(Math.floor(count / 9)).fill('item')
  console.log('pages ==>', count, pages)

  const handlePagination = (page) => {
    onPageChange(page)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody className="m-auto align-self-center">
            <div>
              <CPagination aria-label="Page navigation">
                {pages &&
                  pages.map((item, index) => (
                    <CPaginationItem key={`page_${index}`} onClick={() => handlePagination(index)}>
                      {index}
                    </CPaginationItem>
                  ))}
              </CPagination>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

Paginations.propTypes = {
  count: PropTypes.number,
  onPageChange: PropTypes.func,
}
