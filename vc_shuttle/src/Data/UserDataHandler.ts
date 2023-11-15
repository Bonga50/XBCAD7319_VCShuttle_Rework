import { User } from "../models/User";
export class UserDataHandler{

    private userList: User[];
    private statusList: string[];
    private static instance: UserDataHandler;

    /**
     * setting the list of users
     */
    constructor() {
        this.statusList = [
          "Active",
          "In-active",
          "Idle"
        ];
        this.userList = [
            {
                id: 1,
                name: "John Doe",
                email: "User1@ie.com",
                password: "password1",
                role: "admin",
                status: "active"
              },
              {
                id: 2,
                name: "Jane Smith",
                email: "User2@ie.com",
                password: "password2",
                role: "driver",
                status: "active"
              },
              {
                id: 3,
                name: "Alice Johnson",
                email: "User3@ie.com",
                password: "password3",
                role: "user",
                status: "active"
              },
        ]

    }

    
  public getUsers(): User[] {
    return this.userList
  }
  public findUser(email: string): User | undefined {
    return this.userList.find(user => user.email === email)
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

    generateRandomUserId():number{
      return Math.floor(Math.random() * 10000); 
    }
  

}