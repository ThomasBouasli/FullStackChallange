
# Nex Digital Desafio




### Dependecias Adicionais

- material-ui
- react-router-dom
- express
- bcrypt


### Sobre a Solução

Para contextualizar, esse aplicativo foi construido com técnologias que eu nunca havia utilizado antes, no backend passei muito tempo tentando utilizar o TypeScript com o Sequelize para descobrir que muitas partes desse ORM não aceita o uso do TypeScript. Indo para o Frontend, criei o design no Figma, e tentei utilizar uma biblioteca de componentes para agilizar o desenvolvimento, porém nunca tinha utilizado ela, e apenas no final do desenvolvimento descobri funcionalidades extremamente uteis. Esse não é o meu melhor trabalho, mas foi uma ótima oportunidade para aprender!

## Documentação da API

### Create a User

```http
  POST /api/users
```

#### Recives

```json
{
    "name" : string,
    "email" : string,
    "password" : string
}
```


#### Returns

```json
{
    "user" : {
        "id" : integer,
        "name" : string,
        "email" : string,
        "password" : string,
        "created_at" : Date,
        "updated_at" : Date
    },
    "token" : String
}
```


### Log in

```http
  POST /api/users/login
```

#### Recives

```json
{
    "email" : string,
    "password" : string
}
```


#### Returns

```json
{
    "user" : {
        "id" : integer,
        "name" : string,
        "email" : string,
        "password" : string,
        "created_at" : Date,
        "updated_at" : Date
    },
    "token" : String
}
```

### Create Product
```http
  POST /api/products
```

#### Recives

```json
{
    "name" : string,
    "price" : float,
    "image" : string
}
```


#### Returns

```json
{
    "id" : integer,
    "name" : string,
    "price" : float,
    "image" : string,
    "created_at" : Date,
    "updated_at" : Date
}
```


### Get all Product
```http
  GET /api/products
```

#### Returns

```json
{
    "id" : integer,
    "name" : string,
    "price" : float,
    "image" : string,
    "created_at" : Date,
    "updated_at" : Date
}
```
