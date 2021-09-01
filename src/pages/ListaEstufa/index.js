import React, { useContext, useEffect, useState, useRef } from 'react'
import Card from '../../components/card'
import Header from '../../components/Header'
import { Conteiner } from './styles'
import { UserInfoContext } from '../../contexts/UserInfoContext'

function ListaEstufa() {
  const { userName, greenerys } = useContext(UserInfoContext)

  const [filtrarEstufa, setFiltrarEstufa] = useState(false)
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
    console.log(userName, greenerys)
  }, [])

  return (
    <>
      <Header
        onChange={event => SetDebounce(event, setFiltrarEstufa, 500)}
        icon
      />
      <Conteiner>
        {filtrarEstufa
          ? greenerys
              .filter(estufa => estufa.nomeestufa.indexOf(filtrarEstufa) >= 0)
              .map(estufa => (
                <Card
                  title={estufa.nomeestufa}
                  irrigacao={
                    estufa.elementos.filter(
                      elemento =>
                        elemento.tipoelem == 'Água' && elemento.ativo != 0
                    ).length > 0
                  }
                  luz={
                    estufa.elementos.filter(
                      elemento =>
                        elemento.tipoelem == 'Luz' && elemento.ativo != 0
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
              ))
          : greenerys.map(estufa => (
              <Card
                title={estufa.nomeestufa}
                irrigacao={
                  estufa.elementos.filter(
                    elemento =>
                      elemento.tipoelem == 'Água' && elemento.ativo != 0
                  ).length > 0
                }
                luz={
                  estufa.elementos.filter(
                    elemento =>
                      elemento.tipoelem == 'Luz' && elemento.ativo != 0
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
    </>
  )
}
export default ListaEstufa
