import './Nav.css';

function Nav(){
    return(
       <section className="Nav">
           <ul>
             <li><a class="active" href="#home">Home</a></li>
             <li><a href="#news">Genre</a></li>
             <li><a href="#contact">Ongoing</a></li>
             <li><a href="#about">News</a></li>
             <li><a href="#about">updated</a></li>
             <li><a href="#about">Schduled</a></li>
             <li><a href="#about">Added</a></li>
             <li><a href="#about">Request</a></li>

             
           </ul>

           
       </section>
    );
}

export default Nav;