import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) { onBefore(); }
        
    };
   
};
