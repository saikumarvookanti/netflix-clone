import SearchShow from './SearchShow';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
// import Login from './Login';
import Axios from './axios';
import Nav from './Nav';
import { useState } from 'react';

function App({login}) {
   const [searchShow, setsearchShow] = useState(false);
   const [searchList,setSearchList]=useState(null);

   const onSearchHandler=async(movieSearch)=>{
    if(movieSearch!=="" && movieSearch!== undefined){
    const url=requests.fetchSearchResults+`&query=${movieSearch}`;
    const result=await Axios.get(url);
    setSearchList(result);
    setsearchShow(true);
    console.log(result);
    }

}
  return (
    <div className="App">
      <Nav onSearchHandler={onSearchHandler}/>
      {searchShow ?
      <SearchShow searchList={searchList}/> 
      :<>
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchToprated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </>}
    </div>
  );
}

export default App;
