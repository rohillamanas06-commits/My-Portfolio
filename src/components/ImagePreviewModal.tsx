import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface ImagePreviewModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  downloadFilename?: string;
}

export function ImagePreviewModal({ src, alt, isOpen, onClose, downloadFilename }: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = downloadFilename || 'certificate.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-[100] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[101] flex flex-col"
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between p-4 bg-black/50">
              <h3 className="text-white font-semibold text-lg">{alt}</h3>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={handleDownload}
                  className="p-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Download"
                >
                  <Download className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Image/PDF Container */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
              <div 
                className="w-full max-w-4xl mx-auto transition-transform duration-200"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
              >
                {src.endsWith('.pdf') ? (
                  <iframe
                    src={src}
                    className="w-full h-[calc(100vh-8rem)] rounded-lg border-2 border-white/20 bg-white"
                    title={alt}
                  />
                ) : (
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            {/* Mobile Instructions */}
            <div className="p-2 bg-black/50 text-center text-white/60 text-sm md:hidden">
              Tap outside to close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
