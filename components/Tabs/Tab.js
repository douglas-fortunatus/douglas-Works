import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    href: PropTypes.string,
};

const Tab = ({ activeTab, label, onClick, href, ...rest }) => {
    if (href) {
        return (
        <a
            className={`tab-list-item ${
            activeTab === label ? 'tab-list-active' : ''
            }`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${label}`}
            {...rest}
        >
            {label}
        </a>
        );
    }

    return (
        <>
        <button
            className={`tab-list-item ${
            activeTab === label ? 'tab-list-active' : ''
            }`}
            type="button"
            onClick={() => onClick(label)}
            aria-label={`Open ${label}`}
            {...rest}
        >
            {label}
        </button>
        </>
    );
};

Tab.propTypes = propTypes;

export default Tab;
