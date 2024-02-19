import './Contact.css';

function Contact(){
    return(
        <div className="Contact">
          <h1 style={{'text-transform':'uppercase','color':'black','margin-left': '30%'}}>Contact us!</h1>
          <label>Email : </label>
          <span>Anime7@gmail.com</span> <br></br>
          <label>Mobile : </label>
          <span>91-83565789</span><br></br>
          <label>Address : </label>
          <span>DADAR , MUMBAI NEOSOFT RUBY TOWER</span>


        </div>
    );
}


export default Contact;