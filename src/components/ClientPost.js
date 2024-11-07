'use client';
import { useState, useEffect } from 'react';

export default function RenderingDebugger({ type, buildTime, lastRevalidated }) {
  const [visits, setVisits] = useState(0);
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    // Increment visit counter
    setVisits(prev => prev + 1);
    setLastVisit(new Date().toISOString());

    // Store in localStorage for persistence
    const storedData = JSON.parse(localStorage.getItem(`${type}-debug`) || '{}');
    const newData = {
      ...storedData,
      visits: (storedData.visits || 0) + 1,
      lastVisit: new Date().toISOString()
    };
    localStorage.setItem(`${type}-debug`, JSON.stringify(newData));
  }, [type]);

  return (
    <div className="p-4 mt-4 text-sm bg-gray-100 rounded-lg">
      <h3 className="mb-2 font-semibold">Rendering Debug Info:</h3>
      <div className="space-y-2">
        <p>
          <span className="font-medium">Type:</span>{' '}
          <span className="text-blue-600">{type}</span>
        </p>
        <p>
          <span className="font-medium">Build Time:</span>{' '}
          <span className="text-green-600">{buildTime}</span>
        </p>
        {lastRevalidated && (
          <p>
            <span className="font-medium">Last Revalidated:</span>{' '}
            <span className="text-purple-600">{lastRevalidated}</span>
          </p>
        )}
        <p>
          <span className="font-medium">Page Visits:</span>{' '}
          <span className="text-orange-600">{visits}</span>
        </p>
        <p>
          <span className="font-medium">Last Visit:</span>{' '}
          <span className="text-red-600">{lastVisit}</span>
        </p>
        
        {/* Time differences */}
        {lastRevalidated && (
          <div className="pt-2 mt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Time since last revalidation:{' '}
              {Math.round((new Date() - new Date(lastRevalidated)) / 1000)}s
            </p>
          </div>
        )}
      </div>
    </div>
  );
}