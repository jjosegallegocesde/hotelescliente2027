export async function consultarHabitaciones(){

    //1. pa onde voy
    let url="https://desplieguelunes27noviembre-puce.vercel.app/api/habitaciones"
    let peticion={
        method:"GET"
    }

    //2. vaya pues
    let respuesta=await fetch(url,peticion)
    let habitaciones=respuesta.json()

    //3. muestre que trajo
    return habitaciones

}