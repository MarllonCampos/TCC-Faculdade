import React, { useContext, useEffect, useState, useRef } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { Conteiner } from './styles'
import { UserInfoContext } from '../../contexts/UserInfoContext'

function ListaPlanta() {
  const { userName, greenerys } = useContext(UserInfoContext)

  useEffect(() => {
    console.log(userName, greenerys)
  }, [])

  return (
    <>
      <Header />
      <Conteiner>
        <Card date="2021/08/21" />
      </Conteiner>
    </>
  )
}
export default ListaPlanta
