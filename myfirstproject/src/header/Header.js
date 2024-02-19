import './Header.css';


let comapnyName="Neosoft";

export function Header(){

    return(
        <section className="Header">
          <span>Hello  <b>{comapnyName}</b>  employeee!!!</span>
          <p>Neosoft is an IT company</p>
     
        </section>
    );
}