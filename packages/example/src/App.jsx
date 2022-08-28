import React, { useState } from "react";
import "./App.css";
import sample from "./sample.vtt?url";
import "video.js/dist/video-js.css";
import { useVideoJS } from "react-hook-videojs";

const App = () => {
  //const [source, setSource] = useState("//api.yamsonline.com/playmovie?id=30136&username=Nerowk&password=aa&name=Raksha+Bandhan+%282022%29+Hindi+1080p+HDTS+x264+AAC.mkv");
  //const [source, setSource] = useState("//api.yamsonline.com/playmovie?id=29585&username=Nerowk&password=aa&name=Bachchhan+Paandey+%282022%29+%5BHindi+-+1080p+HD+AVC+-+UNTOUCHED+-+DDP+5.1+-+x264+-+7.2GB+-+ESubs%5D.mkv");
  const [source, setSource] = useState("//vjs.zencdn.net/v/oceans.mp4");

  const h = 2;
  const [vtt, setVtt] = useState(true);
  const [controls, setControls] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [isMount, setIsMount] = useState(true);

  const videoJsOptions = {
    sources: [{ src: source,  type: 'video/webm'}],
    type: 'video/webm',
    controls,
    autoplay,
  };
  const className = "my-class";
  const { Video, ready, player } = useVideoJS(videoJsOptions, className);
  console.log('====');
  console.log({ Video, ready, player });
  return (
    <>
      {isMount && (
        <Video>
          {vtt ? (
            <track
              kind="captions"
              src={sample}
              srcLang="en"
              label="English"
              default
            />
          ) : null}
          <source src="https://api.yamsonline.com/playmovie?id=30136&username=Nerowk&password=aa&name=Raksha+Bandhan+%282022%29+Hindi+1080p+HDTS+x264+AAC.mkv" type='video/webm'></source>
        </Video>
      )}
      <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
        <label>
          Video source
          <input
            style={{ width: "300px" }}
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </label>
        <label>
          VTT
          <input
            type="checkbox"
            checked={vtt}
            onChange={(e) => setVtt(e.target.checked)}
          />
        </label>
        <label>
          Show controls
          <input
            type="checkbox"
            checked={controls}
            onChange={(e) => setControls(e.target.checked)}
          />
        </label>
        <label>
          Autoplay
          <input
            type="checkbox"
            checked={autoplay}
            onChange={(e) => setAutoplay(e.target.checked)}
          />
        </label>
        <label>
          Mounted
          <input
            type="checkbox"
            checked={isMount}
            onChange={() => setIsMount((m) => !m)}
          />
        </label>
      </div>
    </>
  );
};

export default App;
