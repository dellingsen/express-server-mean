# express-server-mean
Follow these steps to create and install the necessary node modules for starting a node express server with an AngularJS front-end.

#####Download and install MongoDB
#####Make sure the Mongo daemon is running:
MongoDB\Server\3.0\bin>mongod

#####After you have cloned the project, initialize and install the necessay node modules
npm init
npm install

#####Here is the package.json that will be installed
{
  "name": "nodeapp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    
"start": "node ./bin/www"
  },
  "dependencies": {
    
"body-parser": "~1.13.2",
    
"cookie-parser": "~1.3.5",
    
"debug": "~2.2.0",
    
"express": "~4.13.1",
    
"mongoose": "^4.3.1",
    
"morgan": "~1.6.1"
  },
  
"main": "app.js",
  
"author": "",
  
"license": "ISC",
  
"description": ""
}

#####Next you can run the server with:
node app.js

#####Which will be found here:
http://localhost:4000

#####This URL will now serve up the files located in the "public" directory as specified in the node server.

#####You will also notice in the public directory there are Angular Controllers and Services that control the Angular application before the REST API is called.
