# Overview

This project serves as the front-end for the Plantary Super Store. It is responsibile for providing the user with an interface to shop for planets. Users can browse the list available planets, and add the ones they fancy to their cart. Users can also change the quantity of a particular planet, or remove it from their cart altogether. 

There are three pages in this app:
1. Cart Page - where users can view and manage the items in their cart. If their cart is empty, a message will be displayed saying as much. This is the initial landing of the app.
2. Products page - lists all the amazing planets the store has available for sale. From here, users can add 
3. Sign-in page - where users would hypothetically sign in. This page is entirely for show, it does not have any sign in logic implemented. This page is a leftover from the beginning of the project, when I was exploring set-up and design ideas.


## Technical Architecture 

This UI is implemented with React and some other third party libraries. These libraries were all used to facilitate a quick and easy development process, that would still look and function reasonably well. 

Libraries used:
1. [React](https://reactjs.org/) - a great framework for creating small web apps.
2. [MaterialUI](https://material-ui.com/) - gives access to fleshed out UI components, without having to create them from scratch. 
3. [Bootstrap](https://getbootstrap.com/) - used to easily ensure the app is responsive, and will work at mobile sizes.

The general design philosophy for this side of the app is that it is only responsible for displaying data - not managing the cart. That is done by the back-end api. So anytime the user makes an edit to the cart (by adding, removing, or updating quantity), the UI uses the API to register the change.

## Running the project

### Via Docker

I've published a public docker container that can be used to run this side of the app:

`docker run -it -p 3000:3000 ericrivera228/planet-store-frontend:latest`

### Locally

If you wish, you can also download, build, and run the code locally. After downloading this repo folder, run the following commands:

1. `npm install` -
Installs the library dependencies. 

2. `npm start` -
Runs the app in the development mode.
