import React from 'react';

const PageLoader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary">
      <div className="text-center flex flex-col items-center">
        <div className="loader mb-4"></div>
        <p className="text-lg font-bold text-white mb-2">Loading...</p>
        <style>{`
          .loader {
            width: 50px;
            aspect-ratio: 1;
            display: grid;
            border: 4px solid #0000;
            border-radius: 50%;
            border-right-color: #514b82;
            animation: l15 1s infinite linear;
          }
          .loader::before,
          .loader::after {
            content: "";
            grid-area: 1/1;
            margin: 2px;
            border: inherit;
            border-radius: 50%;
            animation: l15 2s infinite;
          }
          .loader::after {
            margin: 8px;
            animation-duration: 3s;
          }
          @keyframes l15 {
            100% {
              transform: rotate(1turn);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PageLoader;

