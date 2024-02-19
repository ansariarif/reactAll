import './Footer.css';

function Footer(){
    return(
       <footer className="Footer">
           
           <h1 style={{'text-transform':'uppercase','margin-left':'35%','color':'white'}}>anime nation</h1>
            <section className="DivSection">
            <div className="content">
           
               <p style={{'text-transform':'uppercase'}}> #daily updated episode</p>
               <p style={{'text-transform':'uppercase'}}> #world best site</p>
               <p style={{'text-transform':'uppercase'}}> #watch high tending anime</p>
               
            </div> <br></br>

            <div className="contents">
               <p style={{'text-transform':'uppercase'}}> #daily updated episode</p>
               <p style={{'text-transform':'uppercase'}}> #world best site</p>
               <p style={{'text-transform':'uppercase'}}> #watch high tending anime</p>
            </div>


            </section>
           
           <br></br>
           <section className="DivFooter">
                    <div>
                        <ul>
                            <li><a href="https://twitter.com/julesforrest">Twitter</a></li>
                            <li><a href="https://codepen.io/julesforrest">Codepen</a></li>
                            <li><a href="mailto:julesforrest@gmail.com">Email</a></li>
                            <li><a href="https://dribbble.com/julesforrest">Dribbble</a></li>
                            <li><a href="https://github.com/julesforrest">Github</a></li>
                            <li>
                            <p>👋</p>
                            </li>
                        </ul>
                   </div>

                       
           </section>
       </footer>
    );
}

export default Footer;