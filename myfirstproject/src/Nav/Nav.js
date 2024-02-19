import './Nav.css';

export function Nav(prop){
    return(
        <nav>
            <h1 style={{'color':'red','text-shadow':'10px 10px 10px blue','margin-left':'40%'}}>Horizontal NavBar</h1>
            <ul className="Nav">
                <li className="Li"><a href={prop.linkPath} >Home</a></li>
                <li className="Li"><a href={prop.linkPath}>News</a></li>
                <li className="Li"><a href={prop.linkPath}>Contact</a></li>
                <li className="Li"><a href={prop.linkPath}>About</a></li>
                <li className="Li"><a href={prop.linkPath}>Login</a></li> 
                <input className="Search" type="text" placeholder="Search.."></input>
            </ul>
        </nav>
    );
}