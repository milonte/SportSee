import '../styles/components/activity.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Activity(data: any) {
    const sessions = data.data.sessions;
    console.log(data.data.sessions);
    return (
        <ResponsiveContainer width="100%" height="100%" minHeight="300px">
            <BarChart
                width={500}
                height={300}
                data={sessions}
                margin={{
                    top: 50,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barCategoryGap={'0px'}
            >
                <Legend align='right' iconType='circle' iconSize={10} verticalAlign='top' margin={{ top: 20, left: 20, right: 20, bottom: 20 }} />
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis axisLine={false} tickLine={false} tickMargin={15} />
                <YAxis yAxisId="left" orientation="left" hide />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickMargin={15} />
                <Tooltip />
                <Bar yAxisId="right" name='Poing (kg)' dataKey="kilogram" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} />
                <Bar yAxisId="left" name='Calories brûlées (kCal)' dataKey="calories" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10} />
            </BarChart>
        </ResponsiveContainer>
    );

}
