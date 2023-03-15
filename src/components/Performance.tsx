import '../styles/components/performance.scss';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

export default function Perfomance(data: any) {
    const performances = data.data.data;

    const formatKind = (data: any) => {
        switch (data.kind) {
            case 1: return 'Intensité';
            case 2: return 'Vitesse';
            case 3: return 'Force';
            case 4: return 'Endurance';
            case 5: return 'Energie';
            case 6: return 'Cardio';
        }
    }

    return (
        <div id="performances">
            <ResponsiveContainer>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={performances}
                >
                    <PolarGrid gridType="polygon" radialLines={false} />
                    <PolarAngleAxis dataKey={(data) => formatKind(data)} />
                    <Radar name="Mike" dataKey={"kind"} fill="#E60000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
