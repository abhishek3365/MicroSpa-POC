# MicroSpa-POC

1) Add the node packages in backend and frontend servers
2) Launch the "server.js" file on both
3) The backend is on port 3000 and frontend is on 4202

On the frontend, add '/fruits', '/vegetable' and '/dairy' to the base url to open the different app.

To build the different apps, changes are needed to be made in the Angular Project( MicroSpas/Fruits-App ) in the 
1) index.html
2) utils/constants.ts

In the index.html the base url is need to set to
1) '/fruits' - for Fruits App
2) '/vegetables' - for Vegetables App
3) '/dairu' - for Dairy App

In the constants.ts change the value of the constant 'APP_CONSTANTS'.
