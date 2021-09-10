import React, { useContext, useEffect, useState, useRef } from 'react'
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from './styles'
import Loading from '../../components/Loading'
import { Router, useHistory } from 'react-router'
import { api } from '../../utils/api'
import { localData } from '../../utils/localStorage'

function ListaEstufa() {
  const history = useHistory()
  const [estufa, setEstufa] = useState(false)
  const timeoutRef = useRef(null)

  function SetDebounce(event, fn, delay) {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      console.log(event.target.value)
      let debouncedValue = event.target.value.trim()
      fn(debouncedValue)
    }, delay)
  }

  useEffect(() => {
    const { email, user } = localData('userInfo')

    async function fetchData() {
      const resposta = await api.get('/greenery', {
        headers: { 'user-email': email }
      })

      const data = await resposta.data
      setEstufa(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      {estufa ? (
        <Conteiner>
          {estufa.map((estufa, index) => (
            <Card
              onClick={() => {
                history.push(`/estufa-ativa/${estufa.idestufa}`)
              }}
              key={`${estufa.nomestufa}-${index}`}
              title={estufa.nomeestufa}
              irrigacao={
                estufa.elementos.filter(
                  elemento => elemento.tipoelem == 'Água' && elemento.ativo != 0
                ).length > 0
              }
              luz={
                estufa.elementos.filter(
                  elemento => elemento.tipoelem == 'Luz' && elemento.ativo != 0
                ).length > 0
              }
              ventilador={
                estufa.elementos.filter(
                  elemento =>
                    elemento.tipoelem == 'Vento' && elemento.ativo != 0
                ).length > 0
              }
              date={estufa.dataestufa || '00/00/00'}
              imagem={estufa.fotoestufa}
              titulo={estufa.nomeestufa}
              elementos={estufa.elementos}
            />
          ))}
        </Conteiner>
      ) : (
        <Loading verde />
      )}
    </>
  )
}
export default ListaEstufa
