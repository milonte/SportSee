import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import '../styles/components/todayscore.scss';

export default function TodayScore(data: any) {
    const score = [{ value: 1 - data.data.todayScore }];
    console.log(data)
    const targetAngle = 90 + data.data.todayScore * 360

    return (
        <div id="today-score">
            <h2 className="title">Score</h2>
            <span className='legend'>
                <p className='percent'>{Number(data.data.todayScore) * 100}%</p>
                <p>de votre objectif</p>
            </span>
            <ResponsiveContainer width="100%" height="100%" minHeight="200px">
                <RadialBarChart
                    width={730}
                    height={200}
                    innerRadius="70%"
                    outerRadius="80%"
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