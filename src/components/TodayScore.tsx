import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../styles/components/todayscore.scss';
import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function TodayScore(data: any) {
    const [isLoading, setIsLoading] = useState(true)
    const [score, setScore] = useState([{ value: 0 }]);
    const [targetAngle, setTargetAngle] = useState(0)

    useEffect(() => {
        if (data.data.todayScore !== undefined) {
            setScore([{ value: 1 - data.data.todayScore }]);
            setTargetAngle(90 + data.data.todayScore * 360);
            setIsLoading(false);
        }

    }, [data.data.todayScore]);


    return (
        <div id="today-score">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className="title">Score</h2>
                    <span className='legend'>
                        <p className='percent'>{Number(data.data.todayScore) * 100}%</p>
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
