import ThumbNail from "./ThumbNail"

// as results prop is an object so curly
const Results = ({results}) => {
  return (
    <div className="px-10 my-8 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {results.map((result)=>(
          <ThumbNail key={results.id} result={result}/>
        ))}
    </div>
  )
}

export default Results