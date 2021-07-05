import Client from "../lib/Client";

class UserClient extends Client {

  constructor() {
    super();
    this.baseUrl = 'http://127.0.0.1:5000';
  }

  async loginUser(email, password) {
    const me = this;
    const url = `${this.baseUrl}/user/login`;
    const payload = {
      "user_id": email,
      "password": password
    }
    return await me.post(url, payload);
  }

}

export default UserClient;