import { SetStateAction, useEffect, useState } from 'react';
import '../styles/components/performance.scss';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import Loader from './Loader';
import { UserPerformanceDatasInterface } from '../models/UserPerformanceDatasInterface';

interface PerformancedataProps {
    data: UserPerformanceDatasInterface;
}

export default function Perfomance({ data }: PerformancedataProps) {
    const [isLoading, setIsLoading]: SetStateAction<any> = useState<boolean>(true)
    const [performances, setPerformances]: SetStateAction<any> = useState<UserPerformanceDatasInterface>();

    useEffect(() => {
        if (data.data !== undefined) {
            setPerformances(data.data);
            setIsLoading(false);
        }
    }, [data.data]);

    const formatKind = (kinds: { value: number, kind: number }) => {
        switch (kinds.kind) {
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
            {isLoading ? (
                <Loader />
            ) : (
                <ResponsiveContainer>
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        data={performances}
                    >
                        <PolarGrid gridType="polygon" radialLines={false} />
                        <PolarAngleAxis dataKey={(kinds) => formatKind(kinds)} />
                        <Radar name="Mike" dataKey={"kind"} fill="#E60000" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}
