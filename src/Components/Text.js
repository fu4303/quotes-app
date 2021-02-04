import Data from '../quotes.json'
import '../App.css'

const Text = ({position}) => {
    return (
        <div>
            <p className="quote">"{Data.quotes[position].quote}"</p>
            <p className="author">{Data.quotes[position].author}</p>
        </div>
    )
}

export default Text;