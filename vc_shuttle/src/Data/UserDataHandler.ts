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
    this.userList = [
      {
        id: 1,
        name: "John Doe",
        email: "User1@ie.com",
        password: "Password1",
        role: "admin",
        status: "active",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "User2@ie.com",
        password: "Password2",
        role: "driver",
        status: "active",
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "User3@ie.com",
        password: "Password3",
        role: "user",
        status: "active",
      },
    ];
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

  getLoggedUser(): string | null {
    return localStorage.getItem('username');
  }
}
