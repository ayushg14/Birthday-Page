import React from "react";
import videoSource from "../assets/video (2160p).mp4";

const Video = () => {
  return (
    <div className="flex justify-center items-center m-[1rem]">
      <div className="h-[37rem] w-[70rem] border rounded-2xl max-lg:h-auto">
        {/* <div> */}
        <video
          src={videoSource}
          id="video-background"
          className="rounded-2xl h-auto"
          autoPlay
          loop
          muted
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Video;
