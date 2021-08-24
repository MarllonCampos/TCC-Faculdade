import React, { useState } from "react";


const initialState = {
  imagem: 'https://source.unsplash.com/random/800x800?r=1',
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [state, setState] = useState(initialState);
  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }
  return (
    <AppContext.Provider
      value={{
        imagem: state.imagem,
        setImagem: i => updateState('imagem', i),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default Store;
