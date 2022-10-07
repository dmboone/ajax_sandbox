document.getElementById('button').addEventListener('click',loadData); // Event listener that fires once button is clicked

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest(); //some people like to name this variable xmlHttp

    // OPEN
    xhr.open('GET', 'data.txt', true); // takes in type of request, file to make the request to, and whether we want asynchronous or not

    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){ // runs while in ready state 3 (processing request)
        console.log('READYSTATE', xhr.readyState);
    }
    
    xhr.onload = function(){
        if(this.status === 200){ // makes sure that everything is ok (see Common HTTP Statuses)
            console.log(this.responseText); // logs the response to the console
        }
        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>` // outputs response to browser
    }

    // xhr.onreadystatechange = function(){ // older way of doing it/older syntax
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){ // this runs if something goes wrong with the request
        console.log('Request error...')
    }

    xhr.send(); // must put this at the end for it to work

    // Common HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
}