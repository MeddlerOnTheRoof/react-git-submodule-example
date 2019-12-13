import React from 'react';
import { useParams } from "react-router-dom";

const Edit = props => {
    const { widgetId } = useParams();
    return <React.Fragment>
        <h1>Widgets Edit</h1>
        <h3>Your Widget ID: {widgetId}</h3>
        <p>Welcome to the Wdigets Edit.</p>
    </React.Fragment>;
};

export default Edit;