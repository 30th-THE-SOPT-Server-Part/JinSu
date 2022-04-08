export const SOPT_GROUP = {
    OB: 'OB',
    YB: 'YB'
} as const;

// union type? `OB` | `YB` 둘 중 하나인 타입
type SOPT_GROUP = typeof SOPT_GROUP[keyof typeof SOPT_GROUP];

export class SoptMember {
    constructor(
        public readonly name: String,
        public readonly group: SOPT_GROUP
    ) {
    }
}
