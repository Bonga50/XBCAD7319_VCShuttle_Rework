import { User } from "../models/User";
export class UserDataHandler{

    private userList: User[];

    /**
     * setting the list of users
     */
    constructor() {
        this.userList = [
            {
                id: 1,
                name: "John Doe",
                email: "johndoe@example.com",
                password: "password1",
                role: "admin",
              },
              {
                id: 2,
                name: "Jane Smith",
                email: "janesmith@example.com",
                password: "password2",
                role: "driver",
              },
              {
                id: 3,
                name: "Alice Johnson",
                email: "alicejohnson@example.com",
                password: "password3",
                role: "user",
              },
        ]

    }

    
    public findUser(email:string): User|undefined {
        return this.userList.find(user => user.email === email)
    }

}