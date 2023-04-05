import { useEffect, useState } from 'react';
import '../styles/components/datacard.scss';
import Loader from './Loader';

interface DataProps {
    data: {
        0: string;
        1: number;
    };
}

export default function DataCard({ data }: DataProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [dataKey, setDataKey] = useState<string>('');
    const [dataValue, setDataValue] = useState<string>('');

    useEffect(() => {
        if (data) {
            let category = '';
            let unit = '';

            switch (data[0]) {
                case 'calorieCount':
                    unit = 'kCal';
                    category = 'Calories';
                    break;
                case 'proteinCount':
                    unit = 'g';
                    category = 'Protéines';
                    break;
                case 'carbohydrateCount':
                    unit = 'g';
                    category = 'Glucides';
                    break;
                case 'lipidCount':
                    unit = 'g';
                    category = 'Lipides';
                    break;
                default:
                    unit = '';
                    category = 'Category';
                    break;
            }
            setDataValue(data[1] + unit)
            setDataKey(category);
            setIsLoading(false);
        }
    }, [data])

    return (
        <div className="data-card">
            <div className={`icon ${dataKey.toLowerCase()}`}></div>
            <div className="infos">
                {isLoading ? (
                    <Loader />
                ) : (<>
                    <div className='value'>{dataValue}</div>
                    <div className='category'>{dataKey}</div>
                </>
                )}
            </div>
        </div>
    )


}