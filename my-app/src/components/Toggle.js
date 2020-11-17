import './Toggle.css';
import './../font-awesome/css/all.min.css'


const Toggle = () => {
    return(
        <div className="toggle-container">
            <input  type="checkbox" className="checkbox" id="darkmode-toggle" />
            <label className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball"></div>
            </label>
        </div>
    )
}

export default Toggle;