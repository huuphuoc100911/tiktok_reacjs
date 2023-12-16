import { useRef, useImperativeHandle, forwardRef } from "react";
import video1 from "./videos/video-1.mp4";

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return <video ref={videoRef} src={video1} width={300} height={500} />;
}

export default forwardRef(Video);
