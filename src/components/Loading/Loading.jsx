import './Loading.css' // Code => 005

const Loading = () => {
    return (
        <div className="loader-content_005">
            <div className="loader_005">
                <div className="load-inner load-one"></div>
                <div className="load-inner load-two"></div>
                <div className="load-inner load-three"></div>
                <span className="load-text">Loading...</span>
            </div>
        </div>
    )
}

export default Loading

export const ButtonLoader = ({ color1 = '#b3d4fc', color2 = '#6793fb', duration = 1.5, size = 10 }) => {
    const styles = {
        '--dot-size': `${size || 10}px`,
        '--dot-bg-1': `${color1}`,
        '--dot-bg-2': `${color2}`,
        '--duration': `${duration || 1.5}s`
    }
    return (<>
        <div className="button-loader_005" style={styles} >
            <div className="dot_005"></div>
            <div className="dot_005"></div>
            <div className="dot_005"></div>
            <div className="dot_005"></div>
            <div className="dot_005"></div>
        </div>
    </>)
}