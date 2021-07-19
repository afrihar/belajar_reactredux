import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchNews} from "../actions/newsAction";

const News = () => {
  const state = useSelector(state =>  state)
  const dispatch = useDispatch()

  const handleNews = () => {
    dispatch(fetchNews())
  }

  return (
      <div>
        <h1>Berita</h1>
        <button onClick={handleNews}>Load</button>
        <ol>
          {state.news.articles.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
          })}
        </ol>
      </div>
  );
};

export default News;