# ProjectOils

This project was created for educational purposes. It uses Angular as front-end framework. This is combined with NODE.JS and Express as back-end REST API and MongoDB is used as DB

The app`s main goal is to work as a marketplace for essential oils producers.

As a Guest you can only access Home page and the catalogue with all available products. You can also Login and Register.

As a logged in user you receive access to the create product page/ contact-us page and your profile page.

Contact-us page gives you the ability to send queries to the marketplace owner. From then on the user  will proceed the  communication through the email that he has added in the form.
Contact-us page works with the nodemailer package for NODE.JS

Profile page show to the user his details and the products he has created


Technologied used : 
Front- end 
Angular CLI: 15.0.1
TypeScript: 4.8.2

Back- end 
    bcrypt: ^5.1.0,
    cookie-parser: ^1.4.6,
    cors: ^2.8.5,
    express: ^4.18.2,
    jsonwebtoken: ^8.5.1,
    mongoose: ^6.8.0,
    nodemailer: ^6.8.0,
    nodemon: ^2.0.20

Setup
In order to load the project, you must run :
npm install
ng serve
This is to load the client in http://localhost:4200/

To load the back-end
cd my-server
npm install
node index.js
This starts the server on http://localhost:3000/