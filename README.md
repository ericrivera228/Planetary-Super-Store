# Planetary-Super-Store
All the code needed to run an online store selling the best planets in the local galactic cluster!

## Running the App
Both sides of this application have been published to public Docker containers. You can run this app by downloading and running both docker containers.

#### Running the back-end
`docker run -it -p 5000:5000 ericrivera228/planet-store-backend:latest`

VERY IMPORTANT! DO NOT CHANGE THE PORT OPTION! The front-end of the app is hard-coded to expect the back-end on port 5000. Exposing the web server on a different will break the application.

#### Running the front-end
`docker run -it -p 3000:3000 ericrivera228/planet-store-frontend:latest`

And that's it! You should now be able to go to `localhost:3000` and buy yourself some planets! Note, the cart data will persist for as long as the back-end container runs. So if you want to reset the cart, just restart the container. 
