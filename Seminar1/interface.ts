interface Sopt1 {
    name: string;
    age: number;
    organization: string;
    completion: number[]; // or Array<number>
}

const soptObject: Sopt1 = {
    name: '채정아',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29]
};

console.log(soptObject);

const sopts: Sopt1[] = [
    {
        name: '박진수',
        age: 18,
        organization: 'SOPT',
        completion: [26]
    },
    {
        name: '박진수2',
        age: 19,
        organization: 'SOPT',
        completion: [27, 28]
    },
    {
        name: '박진수3',
        age: 5,
        organization: 'SOPT',
        completion: [30]
    }
];

/**
 * 선택적 프로퍼티
 */

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    sunglass?: number;
    hat?: number;
}

const ohmygirl: Array<Closet> = [
    {
        name: '할로',
        shirt: 5,
        pants: 2,
    },
    {
        name: '헐로',
        shirt: 2,
        pants: 8,
        hat: 2
    }
];

/**
 * funciton interface
 */

const showOhmygirl = (arr: Closet[]) => {
    arr.map(e => {
        console.log(e.name);
        console.log(e.pants);
        console.log(e.shirt);
        console.log(e.hat);
        console.log(e.sunglass);
    })
};

showOhmygirl(ohmygirl);

const returnOhmygirl = (arr: Closet[]): Closet[] => {
    return arr;
};

console.log(returnOhmygirl(ohmygirl));


interface Sopt {
    season: number;
    group: string[];
    part: string[];
    president: string;

    introduce(): string[];
}

const currentSopt: Sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
    president: '김규민',
    introduce: function () {
        return this.part.map(name => {
            // console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
            return `솝트 내 파트는 ${name} 파트가 있어요!`
        });
    }
}

console.log(currentSopt.introduce());