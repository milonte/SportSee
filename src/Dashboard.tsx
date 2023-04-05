import './styles/dashboard.scss';
import { ReactElement, SetStateAction, useEffect, useState } from "react";
import { UserMainDatasInterface } from "./models/UserMainDatasInterface";
import { UserActivityDatasInterface } from "./models/UserActivityDatasInterface";
import { UserSessionDatasInterface } from "./models/UserSessionDatasInterface";
import { UserPerformanceDatasInterface } from "./models/UserPerformanceDatasInterface";
import { useParams } from "react-router";
import { getUserActivities, getUserAverageSessions, getUserMainDatas, getUserPerformances } from "./Api";
import Activity from "./components/Activity";
import Session from "./components/Session";
import Performance from './components/Performance';
import TodayScore from "./components/TodayScore";
import DataCard from "./components/DataCard";
import Loader from "./components/Loader";

export default function Dashboard(): ReactElement {
    const [userMainDatas, setUserMainDatas]: SetStateAction<any> = useState<UserMainDatasInterface[]>([])
    const [userActivities, setUserActivities]: SetStateAction<any> = useState<UserActivityDatasInterface[]>([])
    const [userAverageSessions, setUserAverageSessions]: SetStateAction<any> = useState<UserSessionDatasInterface[]>([])
    const [userPerformances, setUserPerformances]: SetStateAction<any> = useState<UserPerformanceDatasInterface[]>([])
    const { userId } = useParams();

    useEffect(() => {
        async function fetchData() {
            // get datas from API / mocks
            if (userId) {
                const datasResponse: UserMainDatasInterface = await getUserMainDatas(userId);
                const activitiesResponse: UserActivityDatasInterface = await getUserActivities(userId);
                const sessionsResponse: UserSessionDatasInterface = await getUserAverageSessions(userId);
                const performancesResponse: UserPerformanceDatasInterface = await getUserPerformances(userId);

                // setting datas to states
                setUserMainDatas(datasResponse)
                setUserActivities(activitiesResponse)
                setUserAverageSessions(sessionsResponse)
                setUserPerformances(performancesResponse)
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
                    <Activity data={userActivities} />
                    <div className='datas-container'>
                        <Session data={userAverageSessions} />
                        <Performance data={userPerformances} />
                        <TodayScore data={userMainDatas} />
                    </div>
                </div>
                <div className='aside'>
                    {userMainDatas.keyData ? Object.entries(userMainDatas.keyData).map(
                        (value: { 0: string, 1: any, }) => {
                            return <DataCard data={value} key={value[0]} />
                        }) : <Loader />}

                </div>
            </div>
        </>
    )
}