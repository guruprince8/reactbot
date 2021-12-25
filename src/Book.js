import Title from './Title';
import Author from './Author';
import Price from './Price';
import Rating from './Rating'

const Book = () => {
    return (
        <article>
            <img 
            src="https://m.media-amazon.com/images/I/51uxQeC32JL.jpg"
            alt="Blockchain-Bubble-Revolution-Present-Cryptocurrencies-ebook"
            height="200px"
            width="150px"
            className="rounded"> 
            </img>
            <Title/>
            <Author/>
            {/*<p>Kindle Edition</p> */}
            <Price/>
            <Rating/>

        </article>
    );
}
export default Book;