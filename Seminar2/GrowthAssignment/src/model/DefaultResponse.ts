export default interface DefaultResponse<T> {
    readonly statusCode: number
    readonly message: string
    readonly data?: T
};