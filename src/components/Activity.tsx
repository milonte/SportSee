import { useEffect, useState } from 'react';
import '../styles/components/activity.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text, Line } from 'recharts';
import Loader from './Loader';

export default function Activity(data: any) {
    const [isLoading, setIsLoading] = useState(true)
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        if (data.data.sessions !== undefined) {
            setActivities(data.data.sessions);
            setIsLoading(false);
        }

    }, [data.data.sessions]);

    const ActivityTooptip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="activity-tooltip">
                    <p className="label">{`${payload[0].value}Kg`}</p>
                    <p className="label">{`${payload[1].value}kCal`}</p>
                </div>
            );
        }

        return null;
    };

    return (

        <div id='activity'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h2 className='title'>Activité quotidienne</h2>
                    {/* Need to set width to 99% to prevent resize bug */}
                    <ResponsiveContainer width="99%" height="100%" minHeight="400px">
                        <BarChart
                            width={500}
                            height={300}
                            data={activities}
                            margin={{
                                top: 40,
                                right: 20,
                                left: 20,
                                bottom: 40,
                            }}
                            barCategoryGap={"50%"}
                        >

                            <Legend align='right' iconType='circle' iconSize={12} verticalAlign='top' />
                            <CartesianGrid strokeDasharray="2 2" vertical={false} />
                            <XAxis axisLine={false} tickLine={false} tickMargin={15} tickFormatter={(tick) => tick + 1} />
                            <YAxis yAxisId="left" orientation="left" hide />
                            <YAxis yAxisId="right" orientation="right"
                                axisLine={false} tickLine={false} tickMargin={15}
                                allowDataOverflow={true} domain={['dataMin - 3', 'dataMax']}
                                tickCount={3}
                            />
                            <Tooltip content={ActivityTooptip} />
                            <Bar yAxisId="right" name='Poing (kg)' dataKey="kilogram" fill="#E60000" radius={[20, 20, 0, 0]} barSize={10} />
                            <Bar yAxisId="left" name='Calories brûlées (kCal)' dataKey="calories" fill="#282D30" radius={[20, 20, 0, 0]} barSize={10} />
                        </BarChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>

    );

}
