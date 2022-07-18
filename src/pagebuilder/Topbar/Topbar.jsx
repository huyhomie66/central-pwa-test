import React from 'react';
import configAggregator from './configAggregator';

function Topbar(props) {
    const { children, contentType } = props;
    return <div>Topbar</div>;
}

export default {
    name: 'topbar',
    configAggregator,
    component: Topbar
};
