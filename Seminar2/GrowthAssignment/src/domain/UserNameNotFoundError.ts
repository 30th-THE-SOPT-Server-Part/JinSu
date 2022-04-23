export class UserNameNotFoundError implements Error {
    readonly name: string
    constructor(
        readonly message: string,
        readonly errorName?: string,
        readonly stack?: string
    ) {
        this.name = errorName?? ""
    }
}