const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePreveent = () => 
        window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePreveent };
}

const App = () => {
    const { enablePrevent, disablePreveent } = usePreventLeave();

    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePreveent}>Unprotect</button>
        </div>
    )
};

export default App;