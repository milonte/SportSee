import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../styles/components/todayscore.scss';
import { useEffect, useState } from 'react';
import Loader from './Loader';

interface TodayScoreProps {
    data: any;
}

/**
 * TodayScore Component
 * @param data : Score data 
 * @returns ReactElement : TodayScore Component
 */
export default function TodayScore({ data }: TodayScoreProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        if (data.todayScore || data.score) {
            setScore(data.todayScore ? data.todayScore : data.score);
            setIsLoading(false);
        }
    }, [data]);

    return (
        <div id="today-score">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className="title">Score</h2>
                    <span className='legend'>
                        <p className='percent'>{Number(score * 100)}%</p>
                        <p>de votre objectif</p>
                    </span>
                    <div className='r'></div>
                    <ResponsiveContainer>
                        <RadialBarChart
                            innerRadius="65%"
                            outerRadius="75%"
                            data={[{ value: 1 - score }]}
                            startAngle={90}
                            endAngle={90 + score * 360}
                            barSize={20}
                        >
                            <RadialBar fill='#E60000' cornerRadius={20} background dataKey='value' />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>

    );
}
