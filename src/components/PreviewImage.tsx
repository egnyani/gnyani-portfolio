"use client";
import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';

const PreviewImage = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatePreview = async () => {
      const mainContent = document.querySelector('main');
      if (!mainContent) return;

      const container = document.createElement('div');
      container.style.width = '1200px';
      container.style.height = '630px';
      container.style.overflow = 'hidden';
      container.style.position = 'relative';
      container.style.backgroundColor = '#d6ddeb';

      const contentClone = mainContent.cloneNode(true) as HTMLElement;
      contentClone.style.transform = 'scale(0.5)';
      contentClone.style.transformOrigin = 'top left';
      contentClone.style.width = '2400px';
      contentClone.style.height = '1260px';
      container.appendChild(contentClone);

      if (previewRef.current) {
        previewRef.current.innerHTML = '';
        previewRef.current.appendChild(container);

        const canvas = await html2canvas(container, {
          scale: 2,
          backgroundColor: '#d6ddeb',
          logging: false,
          useCORS: true,
        });
        
        canvas.toBlob((blob: Blob | null) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'portfolio-preview.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      }
    };

    const timer = setTimeout(generatePreview, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={previewRef} className="w-[1200px] h-[630px] bg-[#d6ddeb]" />
  );
};

export default PreviewImage; 