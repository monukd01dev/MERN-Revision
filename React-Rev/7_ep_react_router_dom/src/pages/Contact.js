

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-content">
                <h1 className="contact-title">Let's build something.</h1>
                <p className="contact-sub">Drop a message to connect, collaborate, or talk code.</p>
                
                <form className="pro-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="What's on your mind?" required></textarea>
                    </div>

                    <button type="submit" className="pro-submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;