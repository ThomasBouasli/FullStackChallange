
# Nex Digital Desafio




### Dependecias Adicionais

- material-ui
- react-router-dom
- express
- bcrypt
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
