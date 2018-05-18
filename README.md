
# sensores-api v0.0.0

URL: https://sensores-api-moviles.herokuapp.com

- [Registro](#registro)
	- [Create registro](#create-registro)
	- [Delete registro](#delete-registro)
	- [Retrieve registro](#retrieve-registro)
	- [Retrieve registros](#retrieve-registros)
	- [Update registro](#update-registro)
	


# Registro

## Create registro



	POST /registros


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| location			| Object			|  <p>Localización de las mediciones.</p>							|
| location.latitude			| String			|  <p>Latitud.</p>							|
| location.longitude			| String			|  <p>Longitud.</p>							|
| measuring			| Object			|  <p>Mediciones del registro.</p>							|
| measuring.temperature			| String			|  <p>temperatura.</p>							|
| measuring.humidity			| String			|  <p>Humedad.</p>							|
| measuring.pressure			| String			|  <p>Presion.</p>							|
| measuring.light			| String			|  <p>Light.</p>							|

## Delete registro



	DELETE /registros/:id


## Retrieve registro



	GET /registros/:id


## Retrieve registros



	GET /registros


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update registro



	PUT /registros/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| measuring			| 			|  <p>Registro's measuring.</p>							|
| date			| 			|  <p>Registro's date.</p>							|
| location			| 			|  <p>Registro's location.</p>							|


