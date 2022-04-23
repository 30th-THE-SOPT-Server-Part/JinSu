import { UserDataSource } from "../datasource/UserDataSource";
import { User } from "../model/User";
import { Inject, Service } from "typedi";
import { MockUserDataSource } from "../datasource/MockUserDataSource";

@Service()
export class MockUserRepository implements UserRepository {

    constructor(
        @Inject(type => MockUserDataSource) private readonly userDataSource: UserDataSource
    ) {
    }


    async getUser(name?: string): Promise<User> {
        return await this.userDataSource.getUser(name);
    }
}