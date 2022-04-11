import { SOPT_GROUP, SoptMember } from "../domain/model/SoptMember";

export class MemberDataSource {
    public getMembers(): SoptMember[] {
        return [
            {
                name: "채정아",
                group: SOPT_GROUP.OB
            },
            {
                name: "김동재",
                group: SOPT_GROUP.YB
            },
            {
                name: "강민재",
                group: SOPT_GROUP.YB
            },
            {
                name: "김루희",
                group: SOPT_GROUP.OB
            },
            {
                name: "박진수",
                group: SOPT_GROUP.OB
            }
        ];
    }
}