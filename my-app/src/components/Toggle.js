import './Toggle.css';
import './../font-awesome/css/all.min.css'
import { useState } from 'react';


const Toggle = () => {
    const onToggleHandler = () => {
        // setTheme()
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light');
        
    };

    const [theme, setTheme] = useState(localStorage.getItem('theme')); 
    // if (localStorage.getItem('theme') === 'dark-mode') {
    //         document.body.classList.toggle('dark-mode');
    //         toggleButton.checked = true;
    // };
    return(
        <div className="toggle-container">
            <input  type="checkbox" className="checkbox" id="darkmode-toggle" onChange={onToggleHandler} checked={theme === 'light-mode'} />
            <label htmlFor="darkmode-toggle" className="label">
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <div className="ball"></div>
            </label>
        </div>
    )
}

export default Toggle;

// // Toggle button
// const toggleButton = document.getElementById('darkmode-toggle')

// toggleButton.addEventListener('change', () => {
//     document.body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'dark');

// })

// if (localStorage.getItem('theme') === 'dark-mode') {
//     document.body.classList.toggle('dark-mode');
//     toggleButton.checked = true;
// }