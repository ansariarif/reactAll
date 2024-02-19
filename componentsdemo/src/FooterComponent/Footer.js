import './Footer.css';

const imgPath="https://picsum.photos/id/2/200/300"; //this photo is from picsum
//src : jsx attribute (camel case)
const path="https://picsum.photos/id/2";
const width=300;
const height=400;

export function Footer(){
    return(
        
        <footer className="Footer">
             <img src={imgPath} alt="randaom"></img>
             <img src={`${path}/${width}/${height}`} alt="randaom"></img>
             <img src={imgPath} height={height} width={width} alt="randaom"></img>
            <h2 className="Footer3">this is Footer</h2>
            <div className="Footer2">
                <a href="#">other Link</a>

            </div>

            <div className="Footer1">
                <p> this  ojsajl zskcaljc ;lkasj;sjmv  </p>
            </div>
        </footer>
    );
}