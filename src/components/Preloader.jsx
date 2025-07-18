import { useEffect, useState } from 'react';

export default function Preloader({ onFinish }) {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const video = document.getElementById('preloader-video');
        if (!video) return;

        video.play();

        video.onended = () => {
            setExiting(true); // Trigger exit animation
            setTimeout(() => {
                onFinish(); // Remove from DOM after animation
            }, 1000); // Duration should match the CSS animation
        };
    }, []);

    return (
        <div
            className={`preloader ${exiting ? 'preloader-exit' : ''}`}
        >
            <video
                id="preloader-video"
                src="/loader.mp4"
                muted
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
}
