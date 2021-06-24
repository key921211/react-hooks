export const useHover = onHover => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener('mouseover', onHover);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener('mouseover', onHover);
            }
        };
    }, []);
    return element;
};
