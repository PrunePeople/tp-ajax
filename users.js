import User from './user';

const Users = class Users {
  constructor(el, users) {
    this.el = document.querySelector(el);
    this.users = users;
  }

  render() {
    return `
      <div class="row row-cols-4">
      ${this.users.map((userEntity) => new User(userEntity).render()).join('')}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Users;
