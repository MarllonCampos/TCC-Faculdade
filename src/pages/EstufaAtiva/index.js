/* eslint-disable no-throw-literal */
import React, { useEffect, useState } from "react";
import {
  faSeedling,
  faWater,
  faCog,
  faEdit,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useHistory } from "react-router-dom";
import { api } from "../../utils/api";
import { ReactSwal } from "../../components/ReactSwal";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CardStatus from "../../components/CardDetalhe";


import {
  Conteiner,
  ImageHorta,
  ConteinerGrid,
} from "./styles";
import axios from "axios";

function EstufaAtiva() {
  const [estufa, setEstufa] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [estufaNome, setEstufaNome] = useState("");
  const history = useHistory();


  const Toast = ReactSwal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', ReactSwal.stopTimer)
      toast.addEventListener('mouseleave', ReactSwal.resumeTimer)
    }
  })



  useEffect(() => {
    async function fetchData() {
      let userId;
      try {
        const { id } = JSON.parse(
          localStorage.getItem("userInfo")
        );
        if (!id) {
          throw "Usuario não logado";
        }
        userId = id;
      } catch (error) {
        ReactSwal.fire({
          icon: "error",
          title: "Erro",
          content: "Você não esta logado",
          footer: "Levando-o de volta para a tela de login",
          timer: 2500,
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
          willClose: () => history.push("/"),
        });
      }

      const { data } = await api.get("/greenery/get/", {
        headers: {
          "user-id": userId,
        },
      });
      setEstufa(data.mensagem.conteudo[0]);
      setEstufaNome(data.mensagem.conteudo[0].nomeestufa)
    }
    if (!estufa) {
      fetchData();
    }
  }, []);


 async function updateNomeEstufa(event) {
    event.preventDefault()
    const ifRequestCancelled = axios.CancelToken.source() // Isso aqui informa para o axios quando a req. foi cancelada

    if (estufaNome.length <= 3) {
      return Toast.fire({
       title:'O nome deve conter no mínimo 3 letras',
       icon:'warning'
      })
    }

    ReactSwal.fire({
      // Aparece a modal de loading para fazer o login
      title: 'Realizando Alterações',
      text: 'Aguarde alguns instantes e suas alterações serão feitas',
      didOpen: () => ReactSwal.showLoading(),
      willClose: () => ifRequestCancelled.cancel(),
      timer: 5000
    }).then(result => {
      if (result.dismiss === ReactSwal.DismissReason.timer) {
        // Ao demorar mais de 5 segundos mostra modal deerro
        ReactSwal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          text: 'O servidou demorou a responder',
          footer: 'Tente novamente em 30 seg'
        })
      }
    })

   const {data} = await api.put('/greenery/modify/', {
      'estufa-id': estufa.idestufa,
      'estufa-nome':estufaNome
    }, {
      cancelToken: ifRequestCancelled.cancel()
    })

    ReactSwal.hideLoading();
    if (data.status.toLowerCase() === 'ok'){
      return ReactSwal.fire({
        icon: 'success',
        title: 'Informações realizadas com sucesso',
        text: 'Os dados da estufa foram atlerados com sucesso',
        footer:'A página será recarregada',
        timer:2000,
        timerProgressBar:true,
        showConfirmButton:false,
        willClose: () => window.location.reload()
      })
      
    } else {
      ReactSwal.fire({
        title: data.mensagem.titulo,
        text: data.mensagem.conteudo,
        icon: 'error'
      })
    }
    
  }

  return (
    <>
      <Header />
      <Conteiner>
        {estufa ? (
          <>
            <div className="wrapper-title">
              {!isEditing ? (
                <Title
                  style={{ marginTop: "50px" }}
                  title={estufa.nomeestufa}
                />
              ) : (
                <input
                  type="text"
                  value={estufaNome}
                  autofocus
                  onChange={(ev) =>
                    setEstufaNome(ev.target.value)
                  }
                />
              )}

              {!isEditing ? (
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ float: "right" }}
                  color="#FFF"
                  size="lg"
                  onClick={() =>
                    setIsEditing((prevState) => !prevState)
                  }
                />
              ) : (
                <div style={{ float: "right" }}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#FFF"
                    size="lg"
                    onClick={updateNomeEstufa}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    color="#C73110"
                    size="lg"
                    onClick={() =>
                      setIsEditing(
                        (prevState) => !prevState
                      )
                    }
                  />
                </div>
              )}
            </div>
            <ImageHorta src={estufa.fotoestufa} />
            <p className="date">{estufa.dataestufa}</p>
            <CardStatus
              to="/lista-elemento"
              cor="#FFBF00"
              tipo="Elementos"
              iconess={faCog}
            />

            <CardStatus
              to="/lista-plantas"
              cor="var(--secondary)"
              tipo="Plantas"
              iconess={faSeedling}
            />

            <div className="temperature-humidity">
              <p className="message-holder">
                <span className="temperature">
                  Temperatura
                </span>
                <span className="temp-number">24ºC</span>
              </p>

              <p className="message-holder">
                <span className="humidity">Humidade</span>
                <span className="hum-number">98%</span>
              </p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </Conteiner>
    </>
  );
}
export default EstufaAtiva;
