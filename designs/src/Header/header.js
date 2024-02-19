import './Header.css';

function Header(){
    return(
        <header className="header">
        <section className="Header">
            <div >
            <h1 style={{'text-transform':'uppercase','margin-left':'40%'}}>Anime War</h1>

            </div>
            <div>
            <img src='https://cdn.myanimelist.net/s/common/uploaded_files/1450464948-4285d9e619eaf0dba89bf3ea9b99fdce.jpeg' alt="Random"></img>
            <div className="just">
               <h2>watch now</h2>

            </div>
              
            </div>

            </section>
        </header>
    );
}

export default Header;