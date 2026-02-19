'use client';

import { useState } from 'react';
import Image from 'next/image';
import ThumbnailGenerator from '@/components/ThumbnailGenerator';

export default function ThumbnailPage() {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

  const handleThumbnailGenerated = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setThumbnailUrl(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Thumbnail Generator</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <ThumbnailGenerator onThumbnailGenerated={handleThumbnailGenerated} />
          {thumbnailUrl && (
            <div className="mt-4">
              <Image src={thumbnailUrl} alt="Generated Thumbnail" className="w-full" width={1200} height={630} unoptimized />
              <a
                href={thumbnailUrl}
                download="portfolio-thumbnail.png"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download Thumbnail
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 