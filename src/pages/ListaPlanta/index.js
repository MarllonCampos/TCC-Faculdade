import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        <Card title="Batata Frita" date="2021/08/21" />
        <Link to="cadastro-tipo/planta">+</Link>
      </Conteiner>
    </>
  )
}
export default ListaPlanta
