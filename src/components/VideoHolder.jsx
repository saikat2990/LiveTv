import React from 'react';
import "../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player';


export default class VideoHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <ReactPlayer
                    width='300px'
                    height='200px'
                    url= {this.props.url}
                    controls={true}
                />
                <img className="rounded-circle" style={{
                    backgroundColor: "#0B2B2E",
                    width: "50px", height: "50px",
                }} src={this.props.img} />
                <strong> &nbsp; {this.props.name}</strong>
            </div>
        )
    }
}

