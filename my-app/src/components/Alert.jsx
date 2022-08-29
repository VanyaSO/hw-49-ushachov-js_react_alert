import React from 'react';

export default function Progress(props) {
    return (
        <div className={`alert-${props.type} alert`} role="alert">{props.text}</div>
    );
}
