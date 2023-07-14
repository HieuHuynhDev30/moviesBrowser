import Hero from "./Hero"

const Search = ({keyword, result}) => {
    const title = `You are searching for ${keyword}`    
    const content = result.map((item, index) => {
        return <li key={index}>{item.title}</li>
    })
    return (
        <>
            <Hero text={title} />
            <ul className="list-unstyled offset-1">{content}</ul>
        </>
    )
}

export default Search;