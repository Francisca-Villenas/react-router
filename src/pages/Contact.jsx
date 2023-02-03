export default function Contact () {
    return(
        <>
        <div className="containerContact">
        <h1>Cuentanos, ¿en qué podemos ayudarte?</h1>
        <form>
            <span>correo</span>
            <div>
                <input type="text" placeholder="name@example.com"/>
            </div>
            <span>comentario</span>
            <div>
                <input type="text" className="commentary"/>
            </div>
        </form>
        </div>
        </>
    );
      
};