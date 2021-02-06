import Data from '../quotes.json'
import '../App.css'

const Text = ({position}) => {
    return (
        <div>
            <p className="quoteText">"{Data.quotes[position].quoteText}"</p>
            <p className="quoteAuthor">{Data.quotes[position].quoteAuthor}</p>
        </div>
    )
}

export default Text;
