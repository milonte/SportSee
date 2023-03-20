import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../styles/components/todayscore.scss';

export default function TodayScore(data: any) {
    const score = [{ value: 1 - data.data.todayScore }];
    const targetAngle = 90 + data.data.todayScore * 360

    return (
        <div id="today-score">
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
        </div>
    );
}