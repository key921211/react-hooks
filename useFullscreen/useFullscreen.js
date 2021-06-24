import {useRef} from "react";
const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };
    
    const exitFull = () => {
        const checkFullScreen = document.fullscreenElement;
        if(checkFullScreen !== null) {
            
            document.exitFullscreen();
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            runCb(false);
        }
        
    };
    return { element, triggerFull, exitFull };
};

const App = () => {
    const onFullS = isFull => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img
                    ref={element}
                    src="https://blog.kakaocdn.net/dn/AFzsZ/btqI088tZW3/HCqq10x0OG9SoMdG2Bo3YK/img.jpg"
                />
                 <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
            
        </div>
    )
}

export default App;