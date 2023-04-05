import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../styles/components/todayscore.scss';
import { SetStateAction, useEffect, useState } from 'react';
import Loader from './Loader';

interface TodayScoreProps {
    data: any;
}
export default function TodayScore({ data }: TodayScoreProps) {
    const [isLoading, setIsLoading]: SetStateAction<any> = useState<boolean>(true)
    const [score, setScore]: SetStateAction<any> = useState<any[]>([{ value: 0 }]);
    const [targetAngle, setTargetAngle]: SetStateAction<any> = useState<number>(0)

    useEffect(() => {
        if (data.todayScore !== undefined) {
            setScore([{ value: 1 - data.todayScore }]);
            setTargetAngle(90 + data.todayScore * 360);
            setIsLoading(false);
        }

    }, [data.todayScore]);

    return (
        <div id="today-score">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className="title">Score</h2>
                    <span className='legend'>
                        <p className='percent'>{Number(data.todayScore) * 100}%</p>
                        <p>de votre objectif</p>
                    </span>
                    <div className='r'></div>
                    <ResponsiveContainer>
                        <RadialBarChart
                            innerRadius="65%"
                            outerRadius="75%"
                            data={score}
                            startAngle={90}
                            endAngle={targetAngle}
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
