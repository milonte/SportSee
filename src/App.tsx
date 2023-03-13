import React, { SetStateAction, useEffect, useState } from 'react';
import './styles/app.scss';
import { useParams } from 'react-router-dom';
import { getUserMainDatas, getUserActivities, getUserAverageSessions, getUserPerformances } from './Api';
import Activity from './components/Activity';
import { UserMainDatasInterface } from './models/UserMainDatasInterface';
import { UserActivityDatasInterface } from './models/UserActivityDatasInterface';
import { UserSessionDatasInterface } from './models/UserSessionDatasInterface';
import { UserPerformanceDatasInterface } from './models/UserPerformanceDatasInterface';
import Session from './components/Session';
import Performance from './components/Performance';

/**
 * Default App function
 */
export default function App() {

  const [userMainDatas, setUserMainDatas]: SetStateAction<any> = useState([])
  const [userActivities, setUserActivities]: SetStateAction<any> = useState([])
  const [userAverageSessions, setUserAverageSessions]: SetStateAction<any> = useState([])
  const [userPerformances, setUserPerformances]: SetStateAction<any> = useState([])
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
    <div className="App">
      <Activity data={userActivities} />
      <div className='datas-container'>
        <Session data={userAverageSessions} />
        <Performance data={userPerformances} />
      </div>
    </div>
  );
}
