# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute npm install on the same path as of your root directory of the downloaded project
- Create a .env file in the root directory and add the following environment variable
    - PORT=3000
- Inside the src/config folder create a new file config.json and then add the following piece of json

```

{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute 
  ## To generate database
    ```
    > npx sequelize db:create
    ```
  ## To create City model
    ```
    > npx sequelize model:generate --name City --attributes name:String
    ```
- That above first command helps to create database. Second command helps to generate model and migrations but we have to associate/sync it to database also for that we have to execute

    ```
    > npx sequelize db:migrate
    ```

## DB Design
  - Airplane
  - Flight
  - Airport
  - City 
-------------------------------
  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport.

  ## Tables

  ### City -> id, name, created_at, updated_at
  ### Airport -> id, name, address, city_id, created_at, updated_at
  ### Relationship -> A city has many airports and Airport belongs to a city (one to many) 

  ## To create Airport model
  ```
  > npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer
  ```

  ## To add seed files
  ```
  > npx sequelize seed:generate --name add-airports
  > npx sequelize db:seed:all
  ```

  ## To create Airplane model
  ```
  > npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer
  ```
  ## To migrate data
  ```
  > npx sequelize db:migrate
  ```
  ## To add seed file for airplanes
  ```
  > npx sequelize seed:generate --name add-airplanes
  > npx sequelize db:seed:all
  ```
  ## To add Flight model
  ```
  > npx sequelize model:generate --name Flight --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer
  ```
  ### Sequelize reference link
  ```
  > https://sequelize.org/docs/v6/
  ```
  
    