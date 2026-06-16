

const Search = function ({searchText,setSearchText}) {
    
    const handleOnSubmit =(e)=>{
        e.preventDefault();

    }

    return (
        <div className="search-wrapper">
            {/* 🎬 Background Video Layer with Poster Fallback */}
            <video
                /* 1. Tumhara link theek kar diya (Sirf Pixabay wala clean link rakha hai) */
                src="https://vcdn.pixabay.com/video/2021/08/09/84375-585695029_tiny.mp4"
                
                /* 🌟 THE MAGIC: Agar video load nahi hui ya net slow hai, toh yeh image dikhegi */
                poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                
                autoPlay
                loop
                muted       
                playsInline 
                className="bg-video"
            />

            {/* 🌫️ Dark Overlay for text/input contrast */}
            <div className="video-overlay"></div>

            {/* 🔍 Search Content */}
            <form onSubmit={handleOnSubmit} className="search-form">
                <h2>What are you craving today?</h2>
                <div className="input-grp">
                    <input
                        type="text"
                        name="food-search"
                        id="food-search"
                        placeholder="Search for biryani, pizza..."
                        value={searchText}
                        onChange={e=>{ setSearchText(e.target.value)
                            
                        }}
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;