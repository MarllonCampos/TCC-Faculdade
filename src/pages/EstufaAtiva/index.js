/* eslint-disable no-throw-literal */
import React, { useEffect, useState } from "react";
import {
  faSeedling,
  faWater,
  faCog,
  faEdit,
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

function EstufaAtiva() {
  const [estufa, setEstufa] = useState();

  const history = useHistory();
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
    }
    if (!estufa) {
      fetchData();
    }
  }, []);

  return (
    <>
      <Header />
      <Conteiner>
        {estufa ? (
          <>
            <div className="wrapper-title">
              <Title
                style={{ marginTop: "50px" }}
                title={estufa.nomeestufa}
              />

              <FontAwesomeIcon
                icon={faEdit}
                style={{ float: "right" }}
                color="#FFF"
                size="lg"
                onClick={() => console.log('editar')}
              />
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
