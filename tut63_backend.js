const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=, initial-scale=1.0">
      <title>navigation</title>
      <style>
         
          .navbar{
              background-color:black;
              border-radius: 30px;
            
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar li{
             
              color:white; 
              float:left;
              list-style: none;
              margin:13px 23px
  
          }
          .navbar a{
              text-decoration: none;
              color:blanchedalmond;
          }
          .search{
              float: right;
              color: white;
              padding: 10px 75px;
          }
          .navbar input{
              float:right;
              border:3px solid black;
              border-radius: 50px;
              padding: 3px 17px;
              width: 129px;
              
          }
          .navbar a:hover{
              color:brown
  
          } 
        
      </style>
  </head>
  <body>
      <header>
      <nav class="navbar" id="id">
          <ul>
              <li><a href="#" target="_blank">Home</a></li>
              <li><a href="#" target="_blank">About</a></li>
              <li><a href="#" target="_blank">Services</a></li>
              <li><a href="#" target="_blank">Contact us</a></li>
              <div class="search">
                  <input type="text" name="Search" id="bar" placeholder="search here">
                  </div>
          </ul>
      </nav>
      
  </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});