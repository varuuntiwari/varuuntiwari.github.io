import React from 'react'
import './style.css'

const ImageLink = "./assets/"

class IconLink extends React.Component {
    render() {
        return (
            <a href={`#${this.props.type}`} className="mx-10">
                <img src={require(`${ImageLink}${this.props.type}.svg`)} alt={"home_icon"} className="w-6 h-6 mx-10" />
                <span className="text-s">{this.props.type}</span>
            </a>
        )
    }
}

export { IconLink }