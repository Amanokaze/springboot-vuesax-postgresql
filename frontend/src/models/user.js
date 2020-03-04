export default class User {
    constructor(username, password, email, last_name, first_name, phone, gender, language) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.last_name = last_name;
      this.first_name = first_name;
      this.phone = phone;
      this.gender = gender;
      this.language = language;
    }
}