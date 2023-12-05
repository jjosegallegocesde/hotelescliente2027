import './Home.css'

import { Formulario } from '../Formulario/Formulario'
import {consultarHabitaciones} from "../services/servicioHabitacion.js"

import { useState, useEffect } from 'react'

export function Home(){

    const[carga,setCarga]=useState(true)
    const[habitaciones, setHabitaciones]=useState(null)

    useEffect(function(){
        consultarHabitaciones()
        .then(function(respuesta){
            console.log(respuesta)
            setCarga(false)
            setHabitaciones(respuesta.habitaciones)
        })
        
    },[])

    if(carga){
        return(
            <>
                <h3>cargando....</h3>
            </>
        )
    }else{
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
                        <div className="row row-cols-1 row-cols-md-5">
                            {
                                habitaciones.map(function(habitacion){
                                    return(
                                        <div className="col">
                                            <div className="card">
                                                <h4>{habitacion.nombre}</h4>
                                                <img src={habitacion.foto[0]} alt="" className='img-fluid'/>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </>
        )

    }

    
}