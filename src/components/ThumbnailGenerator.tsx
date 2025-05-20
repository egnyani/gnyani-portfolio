'use client';

import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

interface ThumbnailGeneratorProps {
  onThumbnailGenerated: (blob: Blob) => void;
}

export default function ThumbnailGenerator({ onThumbnailGenerated }: ThumbnailGeneratorProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateThumbnail = async () => {
      if (!contentRef.current) return;

      try {
        const canvas = await html2canvas(contentRef.current, {
          scale: 2,
          width: 1200,
          height: 630,
          backgroundColor: '#ffffff',
          logging: false,
        });

        canvas.toBlob((blob) => {
          if (blob) {
            onThumbnailGenerated(blob);
          }
        }, 'image/png');
      } catch (error) {
        console.error('Error generating thumbnail:', error);
      }
    };

    generateThumbnail();
  }, [onThumbnailGenerated]);

  return (
    <div ref={contentRef} className="w-[1200px] h-[630px] bg-white p-8">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Gnyani Enugandula</h1>
        <p className="text-xl text-center mb-6">Data Analyst & AI Enthusiast</p>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-blue-500 text-white rounded">Data Analysis</div>
          <div className="px-4 py-2 bg-green-500 text-white rounded">AI/ML</div>
          <div className="px-4 py-2 bg-purple-500 text-white rounded">Web Development</div>
        </div>
      </div>
    </div>
  );
} 