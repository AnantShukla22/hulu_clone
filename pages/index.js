import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home(props) {
  let results=props.results.results //destructuring
    return (
    <div>
      <Head>
        <title>Desi Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* navbar */}
      <Nav />
      {/* Results */}
      <Results results={results}/>
    </div>
  );
}

// this gets executed before the about Home gets rendered
export async function getServerSideProps(context){
  // here we hit the query parameter of address url of the chrome
const genre=context.query.genre;  

// genre idhar aajaege
const request=await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res=>res.json())

return{
  props:{
    results:request,
  }
}
}