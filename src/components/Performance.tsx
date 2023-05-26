import { useEffect, useState } from 'react';
import '../styles/components/performance.scss';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import Loader from './Loader';
import { FormatedPerformanceDatasInterface } from '../models/UserPerformanceDatasInterface';

interface PerformancedataProps {
    data: FormatedPerformanceDatasInterface;
}

/**
 * Performance Component
 * @param data : Performances data
 * @returns ReactElement : Performance Component
 */
export default function Perfomance({ data }: PerformancedataProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (data.data !== undefined) {
            setIsLoading(false);
        }
    }, [data.data]);

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
                        data={data.data}
                    >
                        <PolarGrid gridType="polygon" radialLines={false} />
                        <PolarAngleAxis dataKey={"kind"} />
                        <Radar name="Mike" dataKey={"value"} fill="#E60000" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}
