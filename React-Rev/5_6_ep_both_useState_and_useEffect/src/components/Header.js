import { useEffect, useState, useRef } from 'react';

const RestaurantList = () => {
    // ... states ...
    
    // Naye data ke intezaar ke liye loader ka ref
    const loaderRef = useRef(null);

    useEffect(() => {
        // 1. Observer banana
        const observer = new IntersectionObserver((entries) => {
            // entries[0] humara loader div hai
            const firstEntry = entries[0];
            
            // isIntersecting true hoga jab div screen par dikhega
            if (firstEntry.isIntersecting) {
                console.log("Loader screen par dikh gaya, trigger API!");
                fetchMoreData(); 
            }
        }, {
            threshold: 1.0 // Jab 100% loader div screen par aa jaye
        });

        // 2. Observer ko bolna ki is div par nazar rakho
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        // 3. Cleanup function
        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []); // API dependencies yahan aayengi

    return (
        <div className="main-container">
            <div className="resturant-cards">
                {/* Tumhare sabhi naye-purane cards yahan render honge */}
                {restaurantList.map((restro, index) => (
                    <RestroCard key={index} data={restro} />
                ))}
            </div>

            {/* 💥 THE MAGIC DIV: Yeh div sabse aakhri mein rahega */}
            <div ref={loaderRef} className="scroll-trigger" style={{ height: '50px', background: 'transparent' }}>
                {/* Yahan tum apna Shimmer UI ya Loading Spinner dikha sakte ho */}
                <p>Loading more restaurants...</p>
            </div>
        </div>
    );
};