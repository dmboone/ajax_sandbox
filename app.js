// document.getElementById('button').addEventListener('click',loadData); // Event listener that fires once button is clicked

// function loadData(){
//     // Create an XHR Object
//     const xhr = new XMLHttpRequest(); //some people like to name this variable xmlHttp

//     // OPEN
//     xhr.open('GET', 'data.txt', true); // takes in type of request, file to make the request to, and whether we want asynchronous or not

//     // Optional - Used for spinners/loaders
//     xhr.onprogress = function(){ // runs while in ready state 3 (processing request)
//         console.log('READYSTATE', xhr.readyState);
//     }
    
//     xhr.onload = function(){
//         if(this.status === 200){ // makes sure that everything is ok (see Common HTTP Statuses)
//             console.log(this.responseText); // logs the response to the console
//         }
//         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>` // outputs response to browser
//     }

//     // xhr.onreadystatechange = function(){ // older way of doing it/older syntax
//     //     if(this.status === 200 && this.readyState === 4){
//     //         console.log(this.responseText);
//     //     }
//     // }

//     xhr.onerror = function(){ // this runs if something goes wrong with the request
//         console.log('Request error...')
//     }

//     xhr.send(); // must put this at the end for it to work

//     // Common HTTP Statuses
//     // 200: "OK"
//     // 403: "Forbidden"
//     // 404: "Not Found"

//     // readyState Values
//     // 0: request not initialized
//     // 1: server connection established
//     // 2: request received
//     // 3: processing request
//     // 4: request finished and response is ready
// }

// GRABBING FROM JSON FILE

// Event listeners on buttons
// document.getElementById('button1').addEventListener('click', loadCustomer);
// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load Single Customer
// function loadCustomer(e){
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customer.json', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);
//             const customer = JSON.parse(this.responseText);

//             const output = `
//                 <ul>
//                     <li>ID: ${customer.id}</li>
//                     <li>Name: ${customer.name}</li>
//                     <li>Company: ${customer.company}</li>
//                     <li>Company: ${customer.phone}</li>
//                 </ul>
//             `;

//             document.getElementById('customer').innerHTML = output;
//         }
//     }

//     xhr.send();
// }

// // Load Customers
// function loadCustomers(e){
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'customers.json', true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText);
//             const customers = JSON.parse(this.responseText);

//             let output = '';

//             customers.forEach(function(customer){
//                 output += `
//                 <ul>
//                     <li>ID: ${customer.id}</li>
//                     <li>Name: ${customer.name}</li>
//                     <li>Company: ${customer.company}</li>
//                     <li>Company: ${customer.phone}</li>
//                 </ul>
//             `;
//             });

//             document.getElementById('customers').innerHTML = output;
//         }
//     }

//     xhr.send();
// }

// GRABBING FROM OUTSIDE API (CHUCK NORRIS JOKE API)
// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e){
//     const number = document.querySelector('input[type="number"]').value;
//     let output = '';

//     for(i = 0; i < number; i++){
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev', true);

//         xhr.onload = function() {
//             if(this.status === 200) {
//                 const response = JSON.parse(this.responseText);
//                 output += `<li>${response.value}</li>`;
//             }
//             else{
//                 output += `<li>Something went wrong</li>`;
//             }
//             document.querySelector('.jokes').innerHTML = output;
//         }
//         xhr.send();
//     }

//     e.preventDefault();
// }

// CALLBACKS

// Synchronous
// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'},
// ];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

// Asynchronous using callbacks
// function createPost(post, callback){ //pass in callback variable; can name whatever
//     setTimeout(function(){
//         posts.push(post);
//         callback(); // calls the callback function after creating the post
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts); // will call getPosts as a callback function after creating the post!