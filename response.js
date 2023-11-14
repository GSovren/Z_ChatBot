

const responseObj = {
    1: "Please enter meter number: ",
    2: "Please enter meter number: ",
    3: "Please enter meter number: ",
    4: "Please enter meter number: ",
    5: "Please enter meter number: ",
};

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('POST', 'http://172.16.13.12:5050/selfservice/viewtokens/37263841993', true)

request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.forEach((movie) => {
    console.log(data)
  })
}}

// Send request
request.send()