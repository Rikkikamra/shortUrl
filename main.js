// import { connect, connection, Schema, model } from 'mongoose';

// function shortUrl(){
//     const urlInput = document.getElementById('urlInput').value;
//     console.log(urlInput);
    
 
//     // make a connection
//     connect('mongodb+srv://rkamra:Rkamra123456@cluster0.eifea.mongodb.net/testingUrl?retryWrites=true&w=majority', {
//         useNewUrlParser: true
//     });
    
//     // get reference to database
//     var db = connection;
    
//     db.on('error', console.error.bind(console, 'connection error:'));
    
//     db.once('open', function() {
//         console.log("Connection Successful!");
        
//         // define Schema
//         var BookSchema = Schema({
//         name: String,
//         price: Number,
//         quantity: Number
//         });
    
//         // compile schema to model
//         var Book = model('Book', BookSchema, 'bookstore');
    
//         // a document instance
//         var book1 = new Book({ name: urlInput, price: 10, quantity: 25 });
    
//         // save model to database
//         book1.save(function (err, book) {
//         if (err) return console.error(err);
//         console.log(book.name + " saved to bookstore collection.");
//         });
        
//     });
// }
function shortURL(){
    fetch('http://127.0.0.1:5000/test/').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        console.log(html);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}