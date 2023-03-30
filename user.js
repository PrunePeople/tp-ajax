const User = class User {
  constructor(entity) {
    const {
      name, email, location, picture
    } = entity;
    this.name = name;
    this.email = email;
    this.location = location;
    this.picture = picture;
  }

  render() {
    const { title, first, last } = this.name;
    const { large } = this.picture;
    const {
      postcode, city, street, country
    } = this.location;

    return `
        <div class="card">
            <img src="${large}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title} ${first} ${last}</h5>
              <p class="card-text">${this.email}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${postcode}</li>
              <li class="list-group-item">${city}</li>
              <li class="list-group-item">${street.number}</li>
              <li class="list-group-item">${street.name}</li>
              <li class="list-group-item">${country}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        `;
  }
};

export default User;
