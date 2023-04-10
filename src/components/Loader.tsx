import { ReactElement } from 'react';
import '../styles/components/loader.scss';

/**
 * Loader Spinner Component
 * @returns Loader Spinner Component : ReactElement
 */
export default function Loader(): ReactElement {
    return (
        <div className="loader-container">
            {/* https://codepen.io/jczimm/pen/vEBpoL */}
            <div className="loader"></div>
        </div>
    )
}