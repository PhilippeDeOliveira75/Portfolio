import './rainCodeName.scss';
import { RainCode } from '@/assets/import';

function RainCodeName() {
    return (
        <div className="wrapper">
            <video autoPlay playsInline muted loop preload="auto" poster="http://i.imgur.com/xHO6DbC.png">
                <source src={RainCode} />
            </video>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <text x="72" y="50" fill="black">NeOz</text>
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="black" />
                <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="white" />
            </svg>
        </div>
    );
}

export default RainCodeName;