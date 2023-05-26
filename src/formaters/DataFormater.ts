import { FormatedMainDatasInterface, UserMainDataInterface } from "../models/UserMainDatasInterface";
import { FormatedPerformanceDatasInterface, UserPerformanceDatasInterface } from "../models/UserPerformanceDatasInterface";
import { FormatedSessionDatasInterface, UserSessionDatasInterface } from "../models/UserSessionDatasInterface";

export default class DataFormater {

    /**
     * Format User Main Datas
     * @param data 
     * @returns Formated Main Datas
     */
    FormatMainDatas(mainDatas: UserMainDataInterface): FormatedMainDatasInterface {
        return {
            id: mainDatas.id,
            userInfos: mainDatas.userInfos,
            todayScore: mainDatas.todayScore || mainDatas.score || 0,
            keyData: [
                {
                    name: 'Calories',
                    count: mainDatas.keyData.calorieCount,
                    unit: 'kCal'
                },
                {
                    name: 'Protéines',
                    count: mainDatas.keyData.proteinCount,
                    unit: 'g'
                },
                {
                    name: 'Glucides',
                    count: mainDatas.keyData.carbohydrateCount,
                    unit: 'g'
                },
                {
                    name: 'Lipides',
                    count: mainDatas.keyData.lipidCount,
                    unit: 'g'
                },
            ]
        }
    }

    /**
     * FOrmat User Performances Datas
     * @param data 
     * @returns Formated Performances Datas
     */
    FormatPerformancesDatas(performancesDatas: UserPerformanceDatasInterface): FormatedPerformanceDatasInterface {
        return {
            userId: performancesDatas.userId,
            data: performancesDatas.data.map((data) => {
                const kinds = [
                    'Cardio',
                    'Energie',
                    'Endurance',
                    'Force',
                    'Vitesse',
                    'Intensité',
                ]
                return {
                    value: data.value,
                    kind: kinds[data.kind - 1]
                }
            })
        }
    }

    /**
     * Format User Sessions Datas
     * @param data 
     * @returns Formated Sessions Datas
     */
    FormatSessionsDatas(sessionsDatas: UserSessionDatasInterface): FormatedSessionDatasInterface {
        return {
            userId: sessionsDatas.userId,
            sessions: sessionsDatas.sessions.map((session) => {
                const days = [
                    'L',
                    'M',
                    'M',
                    'J',
                    'V',
                    'S',
                    'D'
                ]
                return {
                    sessionLength: session.sessionLength,
                    day: days[session.day - 1]
                }
            })
        }
    }
}