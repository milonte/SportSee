import { ReactElement, useEffect, useState } from 'react';
import '../styles/components/session.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Loader from './Loader';
import { FormatedSessionDatasInterface } from '../models/UserSessionDatasInterface';

interface SessionsdataProps {
    data: FormatedSessionDatasInterface
}

/**
 * Sessions Component
 * @param data : Sessions data 
 * @returns ReactElement: Sessions Component
 */
export default function Session({ data }: SessionsdataProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (data.sessions !== undefined) {
            setIsLoading(false);
        }

    }, [data.sessions]);

    return (
        <div id='sessions'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className='title'>Durée moyenne des sessions</h2>
                    <ResponsiveContainer>
                        <LineChart
                            data={data.sessions}
                            margin={{
                                top: 120,
                                right: 20,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <XAxis dataKey={'day'} axisLine={false} tickLine={false} tick={{ fill: 'white' }} />
                            <YAxis dataKey="sessionLength" hide allowDataOverflow={true} />
                            <Tooltip content={({ active, payload }): ReactElement | null => {
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