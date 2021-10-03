import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/Card";
import Header from "../../components/Header";
import { ReactSwal } from "../../components/ReactSwal";

import { api } from "../../utils/api";
import { Conteiner } from "./styles";
import Loading from '../../components/Loading'

function ListaEstufa() {
  // const [filtrarEstufa, setFiltrarEstufa] = useState(false)
  const [greenerys, setGreenerys] = useState(false);
  const history = useHistory();

  // function SetDebounce(event, fn, delay) {
  //   window.clearTimeout(timeoutRef.current)
  //   timeoutRef.current = window.setTimeout(() => {
  //     console.log(event.target.value)
  //     let debouncedValue = event.target.value.trim()
  //     fn(debouncedValue)
  //   }, delay)
  // }

  useEffect(() => {
    async function fetchData() {
      const { id } = JSON.parse(
        localStorage.getItem("userInfo")
      );
      try {
        const {data} = await api.get("/greenery/get/", {
          headers: { "user-id": id },
        });
        if (data.status.toLowerCase() === "erro") {
          ReactSwal.fire({
            title: data.mensagem.titulo,
            text: data.mensagem.conteudo,
            timer: 3500,
            timerProgressBar: true,
            showCancelButton: false,
            showConfirmButton: false,
          });
          return null
        } else if (data.status.toLowerCase() === "ok") {
          setGreenerys(data.mensagem.conteudo);
        }
      } catch (er) {
        const {data} = er.response
        if (data)  {
          ReactSwal.fire({
            icon:'warning',
            title:data.mensagem.titulo,
            text:data.mensagem.conteudo,
            footer:'Te enviando para a tela de Login. <br /> Nos contate para podermos te ajudar ',
            timer:5500,
            timerProgressBar:true,
            showCancelButton:false,
            showConfirmButton:false,
            willClose: () => {history.push('/')}
          })
          return null
        }

      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header noIcon />
      <Conteiner>
        {greenerys
          ? greenerys.map((estufa) => (
              <Card
                key={estufa.idestufa}
                title={estufa.nomeestufa}
                luz={
                  estufa.elementos.filter(
                    (elemento) =>
                      elemento.tipoelem == "Luz" &&
                      elemento.ativo != 0
                  ).length > 0
                }
                ventilador={
                  estufa.elementos.filter(
                    (elemento) =>
                      elemento.tipoelem == "Vento" &&
                      elemento.ativo != 0
                  ).length > 0
                }
                irrigacao={
                  estufa.elementos.filter(
                    (elemento) =>
                      elemento.tipoelem == "Água" &&
                      elemento.ativo != 0
                  ).length > 0
                }
                date={estufa.dataestufa || "00/00/00"}
                imagem={estufa.fotoestufa}
                titulo={estufa.nomeestufa}
                elementos={estufa.elementos}
              />
            )): <Loading verde />}
      </Conteiner>
    </>
  );
}
export default ListaEstufa;
