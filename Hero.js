import "./HeroStyles.css";
import HeroImg from "../assets/IMG_20230604_084223.jpg";
function Hero(props){
    return(
    <>
    <div className={props.cName}>
        <img alt="Heroimg" src={props.heroImg} />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href="#destinations" className={props.btnClass}>
            {props.buttonText}</a>
        </div>
    </div>
    </>
    );
}
export default Hero;