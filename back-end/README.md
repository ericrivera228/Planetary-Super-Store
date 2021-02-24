# Overview

This project serves as the back-end API server for the Plantary Super Store. It is responsible for managing the state of the application - i.e., the state of the cart. 

This server was created with ASP.net core. 

## Technical Architecture 

The general design philosophy for this project was that the server is responsible for managing the cart state. So if the user does any action that changes the cart, it needs to go through the API. This ensures that tehnically-savy users cannot manipulate the cart in malicious ways - we don't want them lowering the price of any super valuable planets!

This project uses in-memory databases for data management. This means the cart data will persist for as long as the project is ran. So if you restart the docker container, the cart will clear out and your planet shopping experience will be reset. 

When the project starts up, it loads a hard-coded list of planets for sale, which then gets served to the front-end and displayed on the product page.

Structure of the server:
1. `/modals` - Home for classes that represent data models. (Except for `AppDbContext`, this class is uninteresting and can be ignored). 
2. `/controllers` - Home for classes exposing the endpoints of the API server. `ProductController` is used to provide the list of available planets for sale. `CartController` is used to provide all means of cart maniuplation (adding, updating, removing). 
3. `MockData.cs` - Class that stores the hard-coded list of planets available for sale.

## Running the project

### Via Docker

I've published a public docker container that can be used to run this side of the app:

`docker run -it -p 5000:5000 ericrivera228/planet-store-backend:latest`

It is VERY, VERY important that port 5000 is used. The front-end of the app is hard-coded to expect the back-end on port 5000. Exposing the web server on a different port will break the application.
