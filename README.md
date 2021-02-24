# Planetary-Super-Store
All the code needed to run an online store selling the best planets in the local galactic cluster!

## Running the App
Both sides of this application have been published to public Docker containers. You can run this app by downloading and running both docker containers.

This app is harcoded to use ports 5000 and 3000. If either is unavailable, the app will not work. Please reach out if this is an issue.

#### Running the back-end
`docker run -it -p 5000:5000 ericrivera228/planet-store-backend:latest`

VERY IMPORTANT! DO NOT CHANGE THE PORT OPTION! The front-end of the app is hard-coded to expect the back-end on port 5000. Exposing the web server on a different will break the application.

#### Running the front-end
`docker run -it -p 3000:3000 ericrivera228/planet-store-frontend:latest`

And that's it! You should now be able to go to `localhost:3000` and buy yourself some planets! Note, the cart data will persist for as long as the back-end container runs. So if you want to reset the cart, just restart the container. 

## Bug Disclaimer

There is a bug on the back-end that occasionally occurs. In the terminal running the back-end container, you'll see:
```
fail: Microsoft.AspNetCore.Server.Kestrel[13]
      Connection id "0HM6P06FJH1PF", Request id "0HM6P06FJH1PF:00000002": An unhandled exception was thrown by the application.
      System.InvalidOperationException: A second operation was started on this context before a previous operation completed. This is usually caused by different threads concurrently using the same instance of DbContext
      ...
```
      
This will cash the app to crash, and you'll be shown an error message on the app page. 
      
This can usually be resolved by just refreshing the app (navigate to `http://localhost:3000` in your browser). If that fails, try restarting back-end container. 

## Supported Browsers

This app was developed and tested on Firefox and Chrome. Use another browser at your own risk.
