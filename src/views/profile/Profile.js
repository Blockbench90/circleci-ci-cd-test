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
  CTableRow,
} from '@coreui/react'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import { useParams } from 'react-router-dom'
import avatar2 from '../../assets/images/avatars/2.jpg'
import { useFetchCurrentUser } from '../../hooks/useFetchCurrentUser'

const Profile = () => {
  const { id } = useParams()
  const { isLoading, error, data } = useFetchCurrentUser(id)

  if (isLoading || !data) {
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
              <CTableBody>
                {data && (
                  <CTableRow v-for="item in tableItems">
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src={data.gendor === 'male' ? avatar1 : avatar2} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{data.name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{`height: ${data.height}`}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{`gender: ${data.gender}`}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{`mass: ${data.mass}`}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{`hair_color: ${data.hair_color}`}</div>
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Profile
