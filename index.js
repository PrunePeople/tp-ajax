import Users from './users';

import './index.scss';

const req = new XMLHttpRequest();

req.open('GET', 'https://randomuser.me/api/?results=8');
req.send();

req.onload = () => {
  const data = JSON.parse(req.response).results;
  const users = new Users('#app', data);

  users.run();
};

// // Génère du HTML
// const User = class User {
//   constructor(el, entity) {
//     this.el = document.querySelector(el);
//     const {
//       name, email, location, picture
//     } = entity; // destructuration d'objet
//     this.name = name;
//     this.email = email;
//     this.location = location;
//     this.picture = picture;
//   }

//   render() {
//     const { title, first, last } = this.name; // on extrait à partir du noeud en question
//     const { large } = this.picture;
//     const {
//       postcode, city, street, country
//     } = this.location;
//     // const { number, name } = street;

//     return `
//     <div class="card">
//         <img src="${large}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${title} ${first} ${last}</h5>
//           <p class="card-text">${this.email}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${postcode}</li>
//           <li class="list-group-item">${city}</li>
//           <li class="list-group-item">${street.number}</li>
//           <li class="list-group-item">${street.name}</li>
//           <li class="list-group-item">${country}</li>
//         </ul>
//         <div class="card-body">
//           <a href="#" class="card-link">Card link</a>
//           <a href="#" class="card-link">Another link</a>
//         </div>
//       </div>
//     `; // le template
//   }

//   //  run() insère le contenu HTML généré par la méthode render()
//   // à la fin du contenu HTML de l'élément cible, plutôt qu'au début
//   run() {
//     this.el.innerHTML += this.render();
//     // OU
//     // this.el.insertAdjacentHTML('beforeend', this.render());
//   }
// };

// function generateUsers(numResults) {
//   const req = new XMLHttpRequest();
//   const url = `https://randomuser.me/api/?results=${numResults}`;

//   req.open('GET', url);
//   req.send();

//   req.onload = () => {
//     const data = JSON.parse(req.response).results; // récupère les données JSON de la réponse

//     data.forEach((entity) => { // itérer sur chaque utilisateur retourné par l'API
//       const user = new User('#app', entity);
// et créer une nouvelle instance de la classe User pour chaque utilisateur

//       user.run();
//     });

//     // OU

//     // for (let i = 0; i < data.length; i += 1) {
//     //   const user = new User('#app', data[i]);
//     //   user.run();
//     // }
//   };
// }

// generateUsers(3);
