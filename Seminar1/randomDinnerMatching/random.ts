import {DinnerMatcher, SoptDinnerMatcher} from "./domain/dinnerMatcher";
import {MemberDataSource} from "./data/MemberDataSource";
import {DinnerMember} from "./domain/model/DinnerMember";

const memberDataSource: MemberDataSource = new MemberDataSource();
const dinnerMatcher: DinnerMatcher = new SoptDinnerMatcher(memberDataSource);

const dinnerMember: DinnerMember = dinnerMatcher.organize(dinnerMatcher.member);
console.log(`오늘 저녁식사 맴버는 ${dinnerMember.obMember.name}, ${dinnerMember.ybMember.name}`);