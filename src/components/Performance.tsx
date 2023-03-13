import '../styles/components/performance.scss';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

export default function Perfomance(data: any) {
    const performances = data.data.data;
    const kinds = data.data.kind;
    console.log(kinds)

    const formatKind = (x: any) => {
        console.log(x)
        return x;
    }

    return (
        <div id="performances">
            <ResponsiveContainer width="100%" height="100%" minHeight="200px">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances}>
                    <PolarGrid gridType="polygon" radialLines={false} />
                    <PolarAngleAxis />
                    <Radar name="Mike" dataKey="value" fill="#E60000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
