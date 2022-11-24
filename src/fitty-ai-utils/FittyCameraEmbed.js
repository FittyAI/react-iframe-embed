import React from "react";

const FittyCameraEmbed = ({ sessionId }) => (
  <iframe
    src={`https://demost.fittyai.com/web/fitty/fitty-camera/${sessionId}`}
    allow="camera"
    className="camera-embed"
    style={{
      height: "60vh",
      width: "100%",
      marginBottom: "16px",
    }}
  />
);

export default FittyCameraEmbed;
