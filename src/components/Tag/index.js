import React from "react";

const Tag = ({tag}) => {
  return (
    <div
      style={{
        marginLeft: "10px",
        backgroundColor: "#E2FFEE",
        borderRadius: "4px",
        padding: "5px 15px",
        color: "#299C59",
        fontFamily: "SF Pro Text",
        fontSize: "12px",
      }}
    >
        {tag}
    </div>
  );
};

export default Tag;
