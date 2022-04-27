import { Inject, Service }    from "typedi";
import { UserDataSource }     from "../../datasource/user/UserDataSource";
import { MockUserRepository } from "../../repository/user/MockUserRepository";
import { User }               from "../../model/user/User";

@Service()
export class UserService {
    constructor(
        @Inject(type => MockUserRepository) private readonly userRepository: UserDataSource
    ) {
    }

    async getUser(name?: string): Promise<User> {
        return await this.userRepository.getUser(name)
    }
}