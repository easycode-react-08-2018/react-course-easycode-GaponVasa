import React from 'react';

export class AddMainVideo extends React.Component {

    render() {
        const{videoId}=this.props;
        const{title}=this.props;
        const{description}=this.props;
        const srcMain = "https://www.youtube.com/embed/" 
        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe 
                        title="random" 
                        src={srcMain+videoId}
                    />
                </div>

                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        )
    }
}