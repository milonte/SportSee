import { useEffect, useState } from 'react';
import '../styles/components/datacard.scss';
import Loader from './Loader';

export default function DataCard(props: any) {
    const [isLoading, setIsLoading] = useState(true)
    const [dataKey, setDataKey] = useState('');
    const [dataValue, setDataValue] = useState('');

    useEffect(() => {
        if (props.data) {
            let category = '';
            let unit = '';

            switch (props.data[0]) {
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
            setDataValue(props.data[1] + unit)
            setDataKey(category);
            setIsLoading(false);
        }
    }, [props])


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