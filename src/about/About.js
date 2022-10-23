import React from "react";
import '../style.css';

class About extends React.Component {
    render() {
        return (
            <div id="about" className="text-3xl flex flex-col justify-center leading-loose items-center w-full h-screen text-yellow-500">
                <div className="grid grid-cols-2 w-full">
                    <section className="section-about">
                        Section 1
                    </section>
                    <section className="section-about">
                        Section 2
                    </section>
                </div>
            </div>
        )
    }
}

export { About }