import './styles/dashboard.scss';
import { ReactElement, useEffect, useState } from "react";
import { FormatedMainDatasInterface, KeyDatasInterface, UserMainDataInterface } from "./models/UserMainDatasInterface";
import { UserActivityDatasInterface } from "./models/UserActivityDatasInterface";
import { FormatedSessionDatasInterface, UserSessionDatasInterface } from "./models/UserSessionDatasInterface";
import { FormatedPerformanceDatasInterface, UserPerformanceDatasInterface } from "./models/UserPerformanceDatasInterface";
import { useParams } from "react-router";
import { getUserActivities, getUserAverageSessions, getUserMainDatas, getUserPerformances } from "./Api";
import Activity from "./components/Activity";
import Session from "./components/Session";
import Performance from './components/Performance';
import TodayScore from "./components/TodayScore";
import DataCard from "./components/DataCard";
import Loader from "./components/Loader";
import DataFormater from './formaters/DataFormater';

/**
 * Dashboard Component
 * @returns Dashboard : ReactElement
 */
export default function Dashboard(): ReactElement {
    const [userMainDatas, setUserMainDatas] = useState<FormatedMainDatasInterface>()
    const [userActivities, setUserActivities] = useState<UserActivityDatasInterface>()
    const [userAverageSessions, setUserAverageSessions] = useState<FormatedSessionDatasInterface>()
    const [userPerformances, setUserPerformances] = useState<FormatedPerformanceDatasInterface>()
    const { userId } = useParams();

    useEffect(() => {

        /**
         * Get User all datas from API / mocks
         */
        async function fetchData() {
            if (userId) {
                const datasResponse: UserMainDataInterface = await getUserMainDatas(userId);
                const activitiesResponse: UserActivityDatasInterface = await getUserActivities(userId);
                const sessionsResponse: UserSessionDatasInterface = await getUserAverageSessions(userId);
                const performancesResponse: UserPerformanceDatasInterface = await getUserPerformances(userId);
                const dataFormater = new DataFormater();
                // setting datas to states
                setUserMainDatas(dataFormater.FormatMainDatas(datasResponse))
                setUserActivities(activitiesResponse)
                setUserAverageSessions(dataFormater.FormatSessionsDatas(sessionsResponse))
                setUserPerformances(dataFormater.FormatPerformancesDatas(performancesResponse))
            }

        }
        fetchData();
    }, [])

    return (
        <>
            <h1 className="welcome">
                Bonjour <span className='user'>{userMainDatas?.userInfos?.firstName || 'Utilisateur'}</span>
            </h1>
            <p className='status'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className="container">
                <div className="article">
                    {userActivities ? <Activity data={userActivities} /> : null}
                    <div className='datas-container'>
                        {userAverageSessions ? <Session data={userAverageSessions} /> : null}
                        {userPerformances ? <Performance data={userPerformances} /> : null}
                        {userMainDatas ? <TodayScore data={userMainDatas} /> : null}
                    </div>
                </div>
                <div className='aside'>
                    {userMainDatas && userMainDatas.keyData ? Object.entries(userMainDatas.keyData).map(
                        (value: { 0: string, 1: KeyDatasInterface }) => {
                            return <DataCard data={value[1]} key={value[0]} />
                        }) : <Loader />}

                </div>
            </div>
        </>
    )
}