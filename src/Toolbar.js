import React from 'react';
import './Toolbar.css';

class Toolbar extends React.Component {
    render() {
        let parent = 200;
        let height = 150;
        return (
            <div className="toolbar" 
                style={{
                    marginBottom: parent - height,
                    border: '1px solid red'
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Toolbar;