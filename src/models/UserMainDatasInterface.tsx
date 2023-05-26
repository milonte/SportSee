
export interface UserMainDataInterface {
    id: number,
    userInfos: {
        firstName: string,
        lastName: string,
        age: number,
    },
    todayScore?: number,
    score?: number,
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
}

export interface FormatedMainDatasInterface {
    id: number,
    userInfos: {
        firstName: string,
        lastName: string,
        age: number,
    },
    todayScore: number,
    keyData: Array<KeyDatasInterface>
}

export interface KeyDatasInterface {
    name: string,
    count: number,
    unit: string
}