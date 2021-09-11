import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Title from '../../components/Title'
import BotaoMais from '../../components/BotaoMais'
import { Conteiner } from './styles'
import { UserInfoContext } from '../../contexts/UserInfoContext'
import { api } from '../../utils/api'
import { ReactSwal } from '../../components/ReactSwal'

function ListaPlanta() {
  const [plantas, setPlantas] = useState([])
  useEffect(() => {
    async function fetchData() {
      const resposta = await api.get('/plantas', {
        headers: { 'User-Email': 'marllon' }
      })

      const data = await resposta.data
      setPlantas(data)
      console.log(plantas, data)
    }
    fetchData()
  }, [])

  async function alterarExcluirPlanta() {
    ReactSwal.fire({
      title: 'Você deseja fazer mudanças?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Alterar',
      denyButtonText: `Deletar`
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        ReactSwal.fire('Alterado com sucesso', '', 'success')
      } else if (result.isDenied) {
        ReactSwal.fire('Deletado com sucesso', '', 'success')
      }
    })
  }

  return (
    <>
      <Header />
      <Conteiner style={{ backgroundColor: 'var(--quartiary)' }}>
        <Title title="teste" />
        {plantas.map(planta => (
          <Card
            title={planta.nomeplanta}
            date={planta.dataplanta}
            imagem={planta.imagem}
          />
        ))}
        <BotaoMais to="cadastro-tipo/planta" />
      </Conteiner>
    </>
  )
}
export default ListaPlanta
