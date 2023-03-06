import '../styles/components/session.scss';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Session(data: any) {
    const sessions = data.data.sessions;

    return (
        <div id='sessions'>
            <h2 className='title'>Durée moyenne des sessions</h2>

            <ResponsiveContainer width="100%" height="100%" minHeight="200px">
                <LineChart
                    width={260}
                    height={200}
                    data={sessions}
                    margin={{
                        top: 100,
                        right: 20,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'white' }} />
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
        </div>
    );
}