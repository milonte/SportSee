import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "./_mocks/data.js";

/**
 * Call API / mock datas function
 * @param query 
 * @returns 
 */
const fetchData = async (query: string) => {
    const searchId = Number(query.split('/')[2])
    const searchCategory = query.split('/')[3] || 'user';
    console.log(process.env.NODE_ENV)

    if (process.env.NODE_ENV !== 'production') {

        let data;

        switch (searchCategory) {
            case 'user': data = USER_MAIN_DATA.find(data => data.id === searchId)
                break
            case 'activity': data = USER_ACTIVITY.find(data => data.userId === searchId)
                break
            case 'average-sessions': data = USER_AVERAGE_SESSIONS.find(data => data.userId === searchId)
                break
            case 'performance': data = USER_PERFORMANCE.find(data => data.userId === searchId)
                break
        }
        return { 'data': data }

    } else {
        return await fetch(process.env.REACT_APP_API_URL + query)
            .then((resp) => { return resp.json() })
            .catch(error => error.status)
    }
}

/**
 * Get User main datas from API
 * @param id :string
 * @returns 
 */
const getUserMainDatas = async (id: string) => { return await fetchData('/user/' + id) }

/**
 * Get User Activities datas from API
 * @param id :sting
 * @returns 
 */
const getUserActivities = async (id: string) => { return await fetchData('/user/' + id + '/activity') }

/**
 * Get User average Sessions datas from API
 * @param id 
 * @returns 
 */
const getUserAverageSessions = async (id: string) => { return await fetchData('/user/' + id + '/average-sessions') }

/**
 * Get User Performances datas from API
 * @param id :string
 * @returns 
 */
const getUserPerformances = async (id: string) => { return await fetchData('/user/' + id + '/performance') }

export {
    getUserMainDatas,
    getUserActivities,
    getUserAverageSessions,
    getUserPerformances
}