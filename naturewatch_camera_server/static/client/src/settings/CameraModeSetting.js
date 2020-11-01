import React from 'react';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class CameraModeSetting extends React.Component {
    render() {
        return (
            <ToggleButtonGroup name="cameramode" value={this.props.value} onChange={this.props.onValueChange}>
                <ToggleButton type="radio" value="0">Day</ToggleButton>
                <ToggleButton type="radio" value="1">Night</ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default CameraModeSetting;