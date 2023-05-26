import { ReactElement, useEffect, useState } from 'react';
import '../styles/components/datacard.scss';
import Loader from './Loader';
import { KeyDatasInterface } from '../models/UserMainDatasInterface';

interface DataProps {
    data: KeyDatasInterface
}

/**
 * Card of Calory | Proteins | Hydradators | Lipids
 * @param data 
 * @returns ReactElement
 */
export default function DataCard({ data }: DataProps): ReactElement {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data])

    return (
        <div className="data-card">
            <div className={`icon ${data.name.toLowerCase()}`}></div>
            <div className="infos">
                {isLoading ? (
                    <Loader />
                ) : (<>
                    <div className='value'>{data.count + data.unit}</div>
                    <div className='category'>{data.name}</div>
                </>
                )}
            </div>
        </div>
    )


}