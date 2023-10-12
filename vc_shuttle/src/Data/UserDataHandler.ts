import { User } from "../models/User";
export class UserDataHandler{

    private userList: User[];
    private statusList: string[];

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
                email: "johndoe@example.com",
                password: "password1",
                role: "admin",
                status: "active"
              },
              {
                id: 2,
                name: "Jane Smith",
                email: "janesmith@example.com",
                password: "password2",
                role: "driver",
                status: "active"
              },
              {
                id: 3,
                name: "Alice Johnson",
                email: "alicejohnson@example.com",
                password: "password3",
                role: "user",
                status: "active"
              },
        ]

    }

    
    public findUser(email:string): User|undefined {
        return this.userList.find(user => user.email === email)
    }

    public getStatuses(): string[] {
      return this.statusList;
    }

}