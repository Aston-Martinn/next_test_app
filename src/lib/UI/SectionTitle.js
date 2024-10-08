import React from "react";

const SectionTitle = ({ title }) => {
    return (
        <div className="col-md-6 col-sm-12 mb-4">
            <p className="text-muted fs-5">{title}</p>
        </div>
    );
};

export default SectionTitle;