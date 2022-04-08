import {SOPT_GROUP, SoptMember} from "./model/SoptMember";
import {MemberDataSource} from "../data/MemberDataSource";
import {DinnerMember} from "./model/DinnerMember";

export interface DinnerMatcher {
    member: SoptMember[];
    shuffle(members: SoptMember[]): SoptMember[];
    organize(members: SoptMember[]): DinnerMember;
}

export class SoptDinnerMatcher implements DinnerMatcher{
    member: SoptMember[];

    constructor(memberDatasource: MemberDataSource) {
        this.member = memberDatasource.getMembers();
    }

    shuffle(members: SoptMember[]): SoptMember[] {
        return members.sort(() => Math.random() - 0.5);
    }

    organize(members: SoptMember[]): DinnerMember {
        const shuffledMembers = this.shuffle(members);
        const obMembers = shuffledMembers.filter(value => value.group === SOPT_GROUP.OB);
        const ybMembers = shuffledMembers.filter(value => value.group === SOPT_GROUP.YB);
        return {
            obMember: obMembers[Math.floor(Math.random() * obMembers.length)],
            ybMember: ybMembers[Math.floor(Math.random() * obMembers.length)]
        }
    }

}