import React from 'react';

const NoMatch = ({ location }) => <div>
    <h3>Unfortunately there is nothing located at <code>{location.pathname}</code></h3>
</div>;

export default NoMatch;