import React from 'react'

import {
  CAvatar,
  CCard,
  CCol,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import { useNavigate } from 'react-router-dom'
import { Paginations } from '../paginations/Paginations'
import { usePagination } from '../../hooks/usePagination'

const Dashboard = () => {
  const navigate = useNavigate()
  const [page, setPage] = React.useState(1)

  const { data, error, isFetching } = usePagination(page)

  const onPageChange = (pageNumber) => {
    setPage(pageNumber)
  }

  const handleNavigation = (id) => {
    navigate(`/profile/${id}`)
  }

  if (isFetching || !data.results) {
    return <CSpinner color="primary" />
  }

  if (error) {
    return <span>Something went wrong 😬</span>
  }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Gender</CTableHeaderCell>
                  <CTableHeaderCell>Hair color</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data &&
                  data.results.map((item, index) => (
                    <CTableRow
                      v-for="item in tableItems"
                      key={index}
                      onClick={() => handleNavigation(index + 1)}
                    >
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={data.gendor === 'male' ? avatar1 : avatar2} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.gender}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.hair_color}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
              </CTableBody>
            </CTable>
            {data.count && <Paginations count={data.count} onPageChange={onPageChange} />}
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
