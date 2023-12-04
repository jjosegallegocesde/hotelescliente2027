import './Home.css'

import { Formulario } from '../Formulario/Formulario'

export function Home(){

    return(
        <>
            <div className="banner text-white fw-bold">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>Reserva con nostros</h3>
                            <p>Desde 699.999999 COP</p>
                            <hr />
                            <Formulario/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center">
                            <h3>HOTELES NICKELODEON</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto officiis commodi. Obcaecati voluptate laudantium ipsa quisquam similique, sapiente nihil alias maiores optio exercitationem error mollitia nulla repellendus nam labore!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}