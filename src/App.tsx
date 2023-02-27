import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/app.scss';
import { useParams } from 'react-router-dom';
import { getUserMainDatas, getUserActivities, getUserAverageSessions, getUserPerformances } from './Api';
import Activity from './components/Activity';

/**
 * Default App function
 */
export default function App() {

  const [userMainDatas, setUserMainDatas] = useState([])
  const [userActivities, setUserActivities] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformances, setUserPerformances] = useState([])
  const { userId } = useParams();

  useEffect(() => {
    async function fetchData() {
      // get datas from API / mocks
      const datasResponse = userId ? await getUserMainDatas(userId) : null;
      const activitiesResponse = userId ? await getUserActivities(userId) : null;
      const sessionsResponse = userId ? await getUserAverageSessions(userId) : null;
      const performancesResponse = userId ? await getUserPerformances(userId) : null;

      // setting datas to states
      setUserMainDatas(datasResponse.data)
      setUserActivities(activitiesResponse.data)
      setUserAverageSessions(sessionsResponse.data)
      setUserPerformances(performancesResponse.data)
    }
    fetchData();
  }, [])

  /*   console.log(userMainDatas)
    console.log(userActivities)
    console.log(userAverageSessions)
    console.log(userPerformances)
    console.log(process.env.REACT_APP_WEBSITE_NAME) */
  return (
    <div className="App">
      <Activity data={userActivities} />
    </div>
  );
}
