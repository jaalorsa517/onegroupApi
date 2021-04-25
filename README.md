# One group Products

## Description

Api que gestiona los datos de productos y usuarios.
La API está alojada en https://onegroupapi.herokuapp.com.

## Endpoints

### /api/v1/signin

Recurso para registrar un usuario.

#### Métodos Permitidos

##### POST

El cuerpo tiene que tener la siguiente estructura:

```
{
    name:string,
    lastName:string,
    email:string,
    password:string
}
```

El cuerpo tiene que tener la siguiente estructura:

Como respuesta se devuelve:

```
{
    message:string,
    idInserted:string
}
```

Puede devolver código 201, 400 o 404

### /api/v1/login

Recurso para loguear en el sistema.

#### Métodos Permitidos

##### POST

El cuerpo tiene que tener la siguiente estructura:

```
{
    email:string
    password:string
}
```

Como respuesta se devuelve:

```
{
    message:string,
    token:string
}
```

Puede devolver código 201, 400 o 404

### /api/v1/products

Recurso para gestionar los productos

##### POST

El cuerpo tiene que tener la siguiente estructura:

```
{
    "name": string,
    "description": string,
    "value": number,
    "img": "string",
    "score": number
}
```

Como respuesta se devuelve:

```
{
    message:string,
    idProduct:string
}
```

Puede devolver código 201 o 400

##### GET

Obtiene todos los productos

Respuesta:

```
{
    "products": [
        {
            "_id": string,
            "name": string,
            "description": string,
            "value": number,
            "img": "string",
            "score": number
        }
    ]
}
```

Puede devolver código 200 o 400

##### PUT

Se tiene que pasar el id como parámetro:
`/api/v1/products/:idProduct`

El cuerpo tiene que tener la siguiente estructura:

```
{
    "name": string,
    "description": string,
    "value": number,
    "img": "string",
    "score": number
}
```

Como respuesta se devuelve:

```
{
    message:string,
}
```

Puede devolver código 200 o 400

##### DELETE

Se tiene que pasar el id como parámetro:
`/api/v1/products/:idProduct`

Como respuesta se devuelve:

```
{
    message:string,
}
```

Puede devolver código 200 o 400
