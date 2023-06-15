import './App.css';
import TurbineInformation from './components/TurbineInformation/TurbineInformation';
import SlideScreen from './components/SlideScreen/SlideScreen';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { useState } from 'react';

function App() {
    const [animationCompleted, setAnimationCompleted] = useState(false);
    return (
        <div className="App">

            {!animationCompleted && <SlideScreen setAnimationCompleted={setAnimationCompleted} />}
            <header>Wind Data</header>
            <div className={`all-turbines  ${animationCompleted ? "allow-overflow" : ""}`}>
                <TurbineInformation title={"Turbine 1"} />
                <TurbineInformation title={"Turbine 2"} />
            </div>
            <footer>Made by Kristiyana Milcheva: <a href="https://github.com/kis619" target="_blank" rel="noopener noreferrer">
                <BsGithub id='github-icon' />
            </a>
                &nbsp;
                <a href="https://linkedin.com/in/kristiyana-milcheva-9a2a84240/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin id='linkedin-icon' />
                </a>
            </footer>
        </div>
    );
}

export default App;

