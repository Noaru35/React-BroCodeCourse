import profilePic from './assets/catimg.png'

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="porfile picture"></img>
            <h2 classname="card-title">Vinicius</h2>
            <p className="card-text">I like to play guitar</p>
        </div>
    );
}

export default Card