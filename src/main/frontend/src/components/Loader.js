import React from 'react';

const Loader = ({ height }) => {
    return (
        <div className="p-2" style={{ height: height }}>
            <div className="spinner-grow spinner-grow-sm mx-1 text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-1 text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-1 text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-1 text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
