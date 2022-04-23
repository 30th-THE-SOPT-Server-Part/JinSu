import { MockUserDataSource } from "../datasource/MockUserDataSource";
import { ServiceOptions } from "typedi";
import { MockUserRepository } from "../repository/MockUserRepository";

export const INJECT_KEY = {
    MockUserDataSource: "MockUserDataSource",
    MockUserRepository: "MockUserRepository"
} as const;

const mockUserDataSource = new MockUserDataSource();
const mockUserRepository = new MockUserRepository(mockUserDataSource);

export const INJECT_IDENTIFIER: ServiceOptions[] = [
    {id: INJECT_KEY.MockUserDataSource, value: mockUserDataSource},
    {id: INJECT_KEY.MockUserRepository, value: mockUserRepository},
];
