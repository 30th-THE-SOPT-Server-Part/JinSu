import { UserDataSource }        from "./UserDataSource";
import { SOPT_PART, User }       from "../../model/user/User";
import { Service }               from "typedi";
import { UserNameNotFoundError } from "../../domain/UserNameNotFoundError";

@Service()
export default class MockUserDataSource implements UserDataSource {
    constructor() {
    }

    private user: User = {
        name: "jinsu",
        age: 24,
        part: SOPT_PART.Server
    }

    async getUser(name?: string): Promise<User> {
        return await this.getSoptUser(name ?? "jinsu")
    }

    private getSoptUser(name: string) {
        return new Promise<User>((resolve, reject) => {
            setTimeout(() => {
                if (this.user.name === name) {
                    resolve(this.user);
                    return;
                }
                reject(new UserNameNotFoundError(`can not found ${name}`));
            }, 200);
        })
    }
}