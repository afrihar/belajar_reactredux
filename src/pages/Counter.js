import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
  const state = useSelector(state =>  state.counter)
  const dispatch = useDispatch()

  const handleTambah = () => {
    dispatch({
      type:'TAMBAH'
    })
  }

  const handleKurang = () => {
    dispatch({
      type:'KURANG'
    })
  }

  return (
      <div>
        <h1>Halaman Counter</h1>
        <p>Counter : {state}</p>
        <button onClick={handleTambah}>TAMBAH</button>{" "}
        <button onClick={handleKurang}>KURANG</button>
      </div>
  );
};

export default Counter;