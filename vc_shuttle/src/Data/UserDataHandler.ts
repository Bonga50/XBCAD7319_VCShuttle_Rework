import { User } from "../models/User";
export class UserDataHandler {
  private userList: User[];
  private statusList: string[];
  private static instance: UserDataHandler;
  public loggedInUser: string | undefined;

  /**
   * setting the list of users
   */
  constructor() {
    this.statusList = ["Active", "In-active", "Idle"];
    this.userList = [];
    this.getUsersfromDatabse()
  }

  public getUsers(): User[] {
    return this.userList;
  }

  public findUser(email: string, password: string): User | undefined {
    console.log("findUseMethod "+email+" "+password+".");
    return this.userList.find(
      (user) => user.email === email && user.password === password
    );
  }

  public getStatuses(): string[] {
    return this.statusList;
  }

  public static getInstance(): UserDataHandler {
    if (!UserDataHandler.instance) {
      UserDataHandler.instance = new UserDataHandler();
    }

    return UserDataHandler.instance;
  }

  generateRandomUserId(): number {
    return Math.floor(Math.random() * 10000);
  }

  setLogedInUser(username: string) {
    this.loggedInUser = username;
    localStorage.setItem('username', username);
  }

  public async getUsersfromDatabse(): Promise<User[]> {
    const response = await fetch('https://localhost:3000/api/user/getUser');
    const data = await response.json();
    console.log(data);
    this.userList = data.data;
    return this.userList;
  }

  public async addUsertoDatabase(user: User): Promise<void> {
    const response = await fetch('https://localhost:3000/api/user/AddUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    this.userList.push(data);
  }
  getLoggedUser(): string | null {
    return localStorage.getItem('username');
  }
}
