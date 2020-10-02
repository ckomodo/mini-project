const inquirer = require("inquirer")
const fs = require("fs")



inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "what is your name?"
    },
    {
        type: "input",
        name: "location",
        message: "what is your location?"

    },
    {
        type: "input",
        name: "bio",
        message: "tell us about yourself?"

    },
    {
        type: "input",
        name: "linkedin",
        message: "what is your linked In URL?"

    },
    {
        type: "input",
        name: "Github",
        message: "what is your Github URL?"

    }
    
]).then(function(response){
    console.log(response);
    const myHtmlCreator = htmlCreator(response);

    fs.writeFile("profile.html", myHtmlCreator, function(err){
        if (err){
        console.log(err);
        }else{
            console.log("created new html file!");
        }
    })
})


function htmlCreator (userAns){
   return `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    
        <title>Hello, world!</title>
      </head>
      <body>
        <div class="jumbotron">
            <h1 class="display-4">Name: ${userAns.username}</h1>
            <h1 class="display-4">location: ${userAns.location}</h1>
            <h1 class="display-4">bio: ${userAns.bio}</h1>
            <h1 class="display-4">linkedIn URL: ${userAns.linkedin}</h1>
            <h1 class="display-4">Github URL: ${userAns.Github}</h1>
           
          </div>
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      </body>
    </html>`
}




