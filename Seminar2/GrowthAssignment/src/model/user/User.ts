export const SOPT_PART = {
    Plan: 'Plan',
    Design: 'Design',
    Server: `Server`,
    Android: `Android`,
    iOS: `iOS`,
    Web: `web`
} as const;
type SOPT_PART = typeof SOPT_PART[keyof typeof SOPT_PART];

export class User {
    constructor(
        readonly name: string,
        readonly age: number,
        readonly part: SOPT_PART
    ) {
    }
}