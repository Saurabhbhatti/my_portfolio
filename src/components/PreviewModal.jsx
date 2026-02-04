import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreviewModal = ({ isOpen, onClose, fileSrc, title, fileType = "image" }) => {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  
  // Determine if file is PDF or image
  const isPdf = fileType === "pdf" || fileSrc?.toLowerCase().endsWith(".pdf");
  const isImage = !isPdf;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset zoom and rotation when modal opens
      setZoom(100);
      setRotation(0);
      setIsFileLoaded(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 300));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50));
  };

  const handleFitToPage = () => {
    setZoom(100);
    setRotation(0);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileSrc;
    const fileName = title 
      ? `${title.replace(/\s+/g, "-")}.${isPdf ? "pdf" : "jpg"}`
      : isPdf 
        ? "document.pdf" 
        : "image.jpg";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    if (isPdf) {
      // For PDF, open in new window and trigger print
      const printWindow = window.open(fileSrc, "_blank");
      if (printWindow) {
        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print();
          }, 500);
        };
      }
    } else {
      // For images, create print window
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>${title || "Document"}</title>
            <style>
              body { margin: 0; padding: 20px; text-align: center; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${fileSrc}" alt="${title || "Document"}" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-tertiary rounded-lg shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Controls */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700 bg-black/50">
              <div className="flex items-center gap-2">
                <span className="text-text-primary text-sm sm:text-base font-medium truncate">
                  {title || (isPdf ? "PDF Document" : "Image")}
                </span>
                {isImage && (
                  <span className="text-text-muted text-xs">({zoom}%)</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {/* Zoom Controls - Only for Images */}
                {isImage && (
                  <>
                    <button
                      onClick={handleZoomOut}
                      className="p-2 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded transition-colors"
                      title="Zoom Out"
                      aria-label="Zoom Out"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded transition-colors"
                      title="Zoom In"
                      aria-label="Zoom In"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleFitToPage}
                      className="p-2 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded transition-colors"
                      title="Fit to Page"
                      aria-label="Fit to Page"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </>
                )}
                {/* Rotate */}
                {isImage && (
                  <button
                    onClick={handleRotate}
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded transition-colors"
                    title="Rotate"
                    aria-label="Rotate"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                )}
                {/* Download */}
                <button
                  onClick={handleDownload}
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded transition-colors"
                  title="Download"
                  aria-label="Download"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                {/* Print */}
                <button
                  onClick={handlePrint}
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded transition-colors"
                  title="Print"
                  aria-label="Print"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </button>
                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-red-500/20 rounded transition-colors"
                  title="Close"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* File Container */}
            <div className="flex-1 overflow-auto p-3 sm:p-4 bg-gray-900/50 flex items-center justify-center relative">
              {!isFileLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-text-secondary text-sm sm:text-base">
                    {isPdf ? "Loading PDF..." : "Loading image..."}
                  </div>
                </div>
              )}
              
              {isPdf ? (
                // PDF Viewer
                <iframe
                  src={`${fileSrc}#toolbar=0`}
                  className="w-full h-full min-h-[calc(85vh-100px)] border-0"
                  title={title || "PDF Document"}
                  onLoad={() => setIsFileLoaded(true)}
                  style={{
                    display: isFileLoaded ? "block" : "none",
                  }}
                />
              ) : (
                // Image Viewer
                <>
                  {isFileLoaded && (
                    <motion.img
                      src={fileSrc}
                      alt={title || "Image"}
                      className="max-w-full max-h-[calc(85vh-100px)] object-contain transition-all duration-300"
                      style={{
                        transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                        transformOrigin: "center center",
                      }}
                      loading="eager"
                    />
                  )}
                  {!isFileLoaded && (
                    <img
                      src={fileSrc}
                      alt={title || "Image"}
                      className="opacity-0 max-w-full max-h-[calc(85vh-100px)] object-contain"
                      onLoad={() => setIsFileLoaded(true)}
                      loading="eager"
                    />
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewModal;

