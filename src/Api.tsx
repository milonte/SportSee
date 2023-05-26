import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "./_mocks/data.js";
import { UserActivityDatasInterface } from "./models/UserActivityDatasInterface.js";
import { UserMainDataInterface } from "./models/UserMainDatasInterface.js";
import { UserPerformanceDatasInterface } from "./models/UserPerformanceDatasInterface.js";
import { UserSessionDatasInterface } from "./models/UserSessionDatasInterface.js";

/**
 * Call API / mock datas function
 * @param query : string
 * @returns Promise
 */
async function fetchData<T>(query: string): Promise<T> {
    const searchId = Number(query.split('/')[2])
    const searchCategory = query.split('/')[3] || 'user';

    if (process.env.NODE_ENV !== 'production') {

        let data: T

        switch (searchCategory) {
            case 'user': data = USER_MAIN_DATA.find(data => data.id === searchId) as T
                break
            case 'activity': data = USER_ACTIVITY.find(data => data.userId === searchId) as T
                break
            case 'average-sessions': data = USER_AVERAGE_SESSIONS.find(data => data.userId === searchId) as T
                break
            case 'performance': data = USER_PERFORMANCE.find(data => data.userId === searchId) as T
                break
            default: data = {} as T
        }
        return data

    } else {
        return await fetch(process.env.REACT_APP_API_URL + query)
            .catch(error => error.status)
            .then((resp) => { return resp.json() })
            .then((json) => { return json.data })
    }
}

/**
 * Get User main datas from API
 * @param id :string
 * @returns User main datas: UserMainDatasInterface
 */
const getUserMainDatas = async (id: string): Promise<UserMainDataInterface> => { return await fetchData<UserMainDataInterface>('/user/' + id) }

/**
 * Get User Activities datas from API
 * @param id :string
 * @returns User Activities data : UserActivityDatasInterface
 */
const getUserActivities = async (id: string): Promise<UserActivityDatasInterface> => { return await fetchData<UserActivityDatasInterface>('/user/' + id + '/activity') }

/**
 * Get User average Sessions datas from API
 * @param id : string
 * @returns User Sessions data : UserSessionDatasInterface
 */
const getUserAverageSessions = async (id: string): Promise<UserSessionDatasInterface> => { return await fetchData<UserSessionDatasInterface>('/user/' + id + '/average-sessions') }

/**
 * Get User Performances datas from API
 * @param id :string
 * @returns User Perdormances data : UserPerformanceDatasInterface
 */
const getUserPerformances = async (id: string): Promise<UserPerformanceDatasInterface> => { return await fetchData<UserPerformanceDatasInterface>('/user/' + id + '/performance') }

export {
    getUserMainDatas,
    getUserActivities,
    getUserAverageSessions,
    getUserPerformances
}