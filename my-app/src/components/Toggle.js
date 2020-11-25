import './Toggle.css';
import './../font-awesome/css/all.min.css'
import { useEffect, useState } from 'react';


const Toggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')); 
    useEffect(() => {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]) 
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const onToggleHandler = () => {
        setTheme((value) => {
            if (value === 'dark-mode') {
                return 'light-mode';
            } else {
                return 'dark-mode';
            }
        });
    };

    
    return(
        <div className="toggle-container">
            <input  type="checkbox" className="checkbox" id="darkmode-toggle" onChange={onToggleHandler} checked={theme === 'dark-mode'} />
            <label htmlFor="darkmode-toggle" className="label">
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <div className="ball"></div>
            </label>
        </div>
    )
}

export default Toggle;