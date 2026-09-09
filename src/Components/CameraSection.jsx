import React from 'react';
import '../Styles/CameraSection.css'

const cameras = [
  {
    id: 1,
    title: 'Border Entry Gate - Sector 1',
    time: '05 Sep 2026 21:14:32',
    video: '/screen1.mp4',
    poster: '/camera1.png',
  },
  {
    id: 2,
    title: 'Border Perimeter - Sector 9',
    time: '05 Sep 2026 18:27:41',
    video: '/screen2.mp4',
    poster: '/camera2.png',
  },
  {
    id: 3,
    title: 'Border Checkpost - Sector 5',
    time: '05 Sep 2026 10:41:33',
    video: '/screen3.mp4',
    poster: '/camera3.png',
  },
];

const CameraSection = () => {
  return (
    <section className="camera-section">
      {cameras.map((cam) => (
        <div className="camera-card" key={cam.id}>
          <div className="camera-top">
            <span>{cam.title}</span>
            <span>{cam.time}</span>
          </div>
          <div className="camera-image">
            <video
              src={cam.video}
              poster={cam.poster}
              autoPlay
              loop
              muted
              playsInline
              aria-label={cam.title}
            />
            <div className="live-camera">
              <span></span> LIVE
            </div>
          </div>
          <div className="camera-name">
            <div>
              <i className="fa-solid fa-video"></i> Camera-{cam.id}
            </div>
            <div className="online">
              <span></span> Online
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CameraSection;