# node server.js

chance server name inside package.json 
"main": "server.js",

# installed packages
npm init -y
touch server.js
npm i express
npm i nodemon

# scripts

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"node server",
    "dev":"nodemon server"

  },

  (npm run dev : to start de server with nodemon)
https://www.youtube.com/watch?v=w3vs4a03y3I&list=PL5HEEqjk82MOVgDj3nqEyw8OJ31hv8z3Z&index=6