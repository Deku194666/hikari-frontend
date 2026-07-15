


import { useParams, useNavigate } from "react-router-dom";
import "./VideoCall.css";

function VideoCall() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const roomName = `HikariVet-${roomId}`;
  const jitsiUrl = `https://meet.jit.si/${roomName}`;

  return (
    <div className="vc-page">
      <div className="vc-header">
        <button className="vc-back-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
        <h1>📹 Videollamada</h1>
      </div>

      <div className="vc-frame-wrap">
        <iframe
          src={jitsiUrl}
          title="Videollamada Hikari"
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          className="vc-iframe"
        />
      </div>
    </div>
  );
}

export default VideoCall;