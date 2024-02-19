import './Card.css';

export function Card(prop){
    return(
        <div className="Card">
        <figure className="Imgage">
            <img src={prop.imgPath} alt="Random"></img>
            <figcaption className="Title">{prop.title}</figcaption>
            </figure>
            <a href={prop.infoLink}>More Info...</a>
        </div>
    );

}
