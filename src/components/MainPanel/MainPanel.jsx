import React, { useState, useEffect } from 'react';
import style from './main-panel-styles.module.scss';

const MainPanel = () => {
    const [colors, setColors] = useState([]);

    const generateRandomColor = () => {
        return Math.random() < 0.5 ? 'white' : 'black';
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColors(prevColors => {
                const newColors = [...prevColors];
                const numSquaresToChange = Math.floor(Math.random() * prevColors.length);
                for (let i = 0; i < numSquaresToChange; i++) {
                    const randomIndex = Math.floor(Math.random() * prevColors.length);
                    newColors[randomIndex] = generateRandomColor();
                }
                return newColors;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setColors(Array.from({ length: 2500 }, generateRandomColor));
    }, []);

    return (
        <div className={style.container}>
            {colors.map((color, index) => (
                <div key={index} className={style.square} style={{ backgroundColor: color }} />
            ))}
        </div>
    );
};

export default MainPanel;
