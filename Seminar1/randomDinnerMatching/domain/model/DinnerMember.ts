import { SoptMember } from "./SoptMember";

export class DinnerMember {
    constructor(
        public readonly obMember: SoptMember,
        public readonly ybMember: SoptMember
    ) {
    }
}