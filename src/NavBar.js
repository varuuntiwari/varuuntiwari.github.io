import React from "react";
import "./style.css";
import { IconLink } from "./IconLink";

class NavBar extends React.Component {
    render() {
        return (
            <header className="flex flex-row justify-center text-center align-middle items-center w-screen h-20 bg-zinc-800 text-yellow-500 fixed top-0">
                <IconLink type={"about"} />
                <IconLink type={"projects"} />
                <IconLink type={"interests"} />
                <IconLink type={"contact"} />
            </header>
        )
    }
}

export { NavBar }