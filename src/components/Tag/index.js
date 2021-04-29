import React from "react";
import './style.css'

const Tag = ({tag}) => {
  return (
    <div className={`tag ${tag === 'failed' ? 'failed': 'success'}`}>
      {tag}
    </div>
  );
};

export default Tag;
