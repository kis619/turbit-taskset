import React, { useEffect, useState } from "react";
import "./SlideScreen.css";

const SlideScreen = ({ setAnimationCompleted }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    useEffect(() => {
        if (clicked) {
            console.log("clicked");

            setTimeout(() => setAnimationCompleted(true), 3000);
        }
        // eslint-disable-next-line
    }, [clicked]);

    return (
        <div className="slide-screen">
            <div className={`element-left ${clicked ? `animate-left` : ""}`}>
                <span className="element-text">Wind</span>
            </div>
            <div className={`element-right ${clicked ? `animate-right` : ""}`}>
                <span className="element-text">Power</span>
            </div>
            <button
                className={`${clicked ? `animate-button` : ""}`}
                onClick={handleClick} >
                <span>Enter</span>
            </button>
        </div>
    );
};

export default SlideScreen;
