import { useRef,useEffect } from "react";

const useIntersectionObserver = (callback,dependency)=>{

    const observerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    callback();
                }
            },
            { threshold: 0.1 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, dependency); 

    return observerRef;
}

export default useIntersectionObserver;