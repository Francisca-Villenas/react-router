import torta from "../assets/img/torta.jpg"

export default function Home() {
    return(
    <>
    <div className="containerHome">
        <div>
            <h1>Bienvenido a <strong>Happy Cake</strong></h1>
            <h4>El lugar de los pasteles felices</h4>
        </div>
        <div className="imgTorta">
            <img src={ torta } />
        </div>
    </div>
    </>
        )
};