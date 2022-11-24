import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createPayload } from "./fitty-ai-utils/helpers";
import {
  DEFAULT_USER_BIO_INFO,
  EVENT_TYPES,
  SOCKET_URL,
} from "./fitty-ai-utils/constants";
import { v4 as uuidv4 } from "uuid";
import ReactJson from "react-json-view";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { ReadyState } from "react-use-websocket";
import FittyCameraEmbed from "./fitty-ai-utils/FittyCameraEmbed";

// Create random guid for sessionId
const sessionId = uuidv4();

function App() {
  const [socketsLog, setSocketsLog] = useState([]);

  // Initialize socket connection
  const { sendMessage, lastMessage, readyState } = useWebSocket(SOCKET_URL);

  useEffect(() => {
    if (lastMessage !== null) {
      const newArray = [JSON.parse(lastMessage.data), ...socketsLog];
      setSocketsLog(newArray);
    }
  }, [lastMessage]);

  const startSession = () => {
    const parameters = {
      company_identifier: "fitty",
      event_type: EVENT_TYPES.session_start,
      user_bio_information: DEFAULT_USER_BIO_INFO,
    };

    const payload = createPayload(parameters, sessionId);
    sendMessage(payload);
  };

  useEffect(() => {
    // If socket connection is open
    if (readyState === ReadyState.OPEN) {
      console.log("Socket OPENED");
      // Start FittyAI workout session
      startSession();
    }
  }, [readyState]);

  return (
    <div className="App">
      <div className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="log-container">
          <div className="iframe-wrapper ">
            {/* --- Fitty Camera component */}
            <FittyCameraEmbed sessionId={sessionId} />
            <p className="camera-title">
              Example of embedded Fitty Camera component{" "}
              <a
                className="App-link"
                href="https://demost.fittyai.com/web/fitty/quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full application
              </a>
            </p>
          </div>
          <ReactJson src={socketsLog} theme="greenscreen" />
        </div>
      </div>
    </div>
  );
}

export default App;
