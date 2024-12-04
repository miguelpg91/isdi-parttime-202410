function parseCookies(cookieString) {
    if (!cookieString) return {}        ///Aquí se verifica si cookieString está vacío o es undefined. Si lo está, devuelve un objeto vacío {}.

    const keyValues = cookieString.split(";")   ///Divide la cadena de cookies en un array usando ; como separador.

    const cookies = keyValues.reduce((accum, keyValue) => {     //Se utiliza el método reduce para transformar el array en un objeto de pares clave-valor:
        const keyAndValue = keyValue.split("=")     //Cada elemento del array se divide en dos partes usando el signo = como separador:

        const key = keyAndValue[0]          ///El índice [0] del array contiene la clave (key) y el índice [1] contiene el valor (value).
        const value = keyAndValue[1]

        accum[key] = value      ////Se agrega la clave y el valor al objeto acumulador 

        return accum        //Al final del proceso de reduce, el acumulador accum contiene un objeto con las cookies como pares clave-valor:        
    }, {})

    return cookies              ///devuelve el objeto cookies generado previamente.
}

module.exports = parseCookies



/*

{
  "__stripe_mid": "4792af34-8e93-492b-9d6f-fd73e418031c665564",
  "userId": "m41rqcbk5lk",
  "pepito": "grillo",
  "car": "ferrari",
  "age": "123"
}

*/


