import React from "react";
import "./Intro.css";

class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <section className="w-1/2 h-screen items-center flex flex-col justify-center">
                    <section className="text-left w-3/4 text-yellow-500 leading-loose text-lg">
                        Hello, I am
                    </section>
                    <section className="text-8xl w-3/4 text-left text-yellow-600">
                        Varun Tiwari.
                    </section>
                    <section className="text-3xl w-3/4 text-left text-slate-600 leading-loose">
                        I make stuff such as websites, scripts and tools.
                    </section>
                    <section className="text-xl w-3/4 text-left text-amber-500">
                        I'm a student currently pursuing Bachelors in Technology from
                        Vellore Institute of Technology and graduating in 2023.
                    </section>
                </section>
            </div>
        )
    }
}

export { Intro }