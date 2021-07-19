export const fetchNews = () => {
  return (dispatch, getState) => {
    fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=7003725f3f3d4749bd922c0a17485ded')
        .then((resp) => resp.json())
        .then((data) => {
          dispatch({
            type:'GET_NEWS',
            news : data
          })
        })
  }
}