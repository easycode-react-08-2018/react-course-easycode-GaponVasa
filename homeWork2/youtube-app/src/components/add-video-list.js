import React from 'react';

export class AddVideoList extends React.Component {

    render() {
        const{link}=this.props;
        const{title}=this.props;
        const{handler}=this.props;
        const{id}=this.props;
        const DummyLink = "#"
        return(
            <li className="list-group-item">
                <div className="video-list media">
                    <div className="video-list media">
                        <div className="media-left">
                            <a 
                                href={DummyLink}
                                onClick={()=>handler(id)}
                            >
                                <img 
                                    className="media-object" 
                                    src={link} 
                                    alt={title}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="media-body ml-3">
                        <div className="media-heading">
                            {title}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}