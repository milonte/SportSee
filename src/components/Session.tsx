import { useEffect, useState } from 'react';
import '../styles/components/session.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Loader from './Loader';

export default function Session(data: any) {
    const [isLoading, setIsLoading] = useState(true)
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (data.data.sessions !== undefined) {
            setSessions(data.data.sessions)
            setIsLoading(false);
        }

    }, [data.data.sessions]);

    const formatDay = (data: any) => {
        switch (data.day) {
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            case 7: return 'D';
        }
    }

    return (
        <div id='sessions'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className='title'>Durée moyenne des sessions</h2>
                    <ResponsiveContainer>
                        <LineChart
                            data={sessions}
                            margin={{
                                top: 120,
                                right: 20,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <XAxis dataKey={(data) => formatDay(data)} axisLine={false} tickLine={false} tick={{ fill: 'white' }} />
                            <YAxis dataKey="sessionLength" hide allowDataOverflow={true} />
                            <Tooltip content={({ active, payload }): any => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="session-tooltip">
                                            <p className="label">{`${payload[0].value} min`}</p>
                                        </div>
                                    );
                                }

                                return null;
                            }} />
                            <Line type="monotoneX" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    );
}