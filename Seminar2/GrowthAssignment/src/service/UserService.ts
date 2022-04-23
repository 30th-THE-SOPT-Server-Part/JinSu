import { Inject, Service } from "typedi";
import { UserDataSource } from "../datasource/UserDataSource";
import { INJECT_KEY } from "../config/GrowthAssignmentContainer";
import { MockUserRepository } from "../repository/MockUserRepository";
import { User } from "../model/User";
import DefaultResponse from "../model/DefaultResponse";
import HttpState from "../util/HttpState";

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