'use client';
import { useState, useEffect } from 'react';

export default function RenderingDebugger({ type, buildTime, lastRevalidated }) {
  const [debugInfo, setDebugInfo] = useState({
    visits: 0,
    firstVisit: null,
    lastVisit: null
  });

  useEffect(() => {
    try {
      // Get stored data with error handling
      const key = `${type}-debug`;
      const stored = sessionStorage.getItem(key);
      const data = stored ? JSON.parse(stored) : null;
      
      const now = new Date().toISOString();
      const newData = {
        visits: (data?.visits || 0) + 1,
        firstVisit: data?.firstVisit || now,
        lastVisit: now
      };

      // Store minimal data
      sessionStorage.setItem(key, JSON.stringify(newData));
      setDebugInfo(newData);
    } catch (error) {
      console.warn('Debug storage failed:', error);
      // Continue without storage if quota exceeded
    }
  }, [type]);

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = Math.round((new Date() - new Date(timestamp)) / 1000);
    return `${diff}s ago`;
  };

  return (
    <div className="p-4 mt-4 rounded-lg bg-gray-50">
      <h3 className="mb-3 font-semibold">Rendering Debug Panel</h3>
      
      <div className="space-y-2 text-sm">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-2">
          <span className="text-gray-600">Strategy:</span>
          <span className="font-medium">{type.toUpperCase()}</span>
          
          <span className="text-gray-600">Page Visits:</span>
          <span className="font-medium">{debugInfo.visits}</span>
        </div>

        {/* Timing Info */}
        <div className="pt-3 mt-3 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-2">
            <span className="text-gray-600">Build Time:</span>
            <span className="text-green-600">{formatTime(buildTime)}</span>

            {lastRevalidated && (
              <>
                <span className="text-gray-600">Last Revalidation:</span>
                <span className="text-purple-600">{formatTime(lastRevalidated)}</span>
              </>
            )}

            <span className="text-gray-600">First Visit:</span>
            <span className="text-blue-600">{formatTime(debugInfo.firstVisit)}</span>

            <span className="text-gray-600">Last Visit:</span>
            <span className="text-orange-600">{formatTime(debugInfo.lastVisit)}</span>
          </div>
        </div>

        {/* Cache Status */}
        <div className="pt-3 mt-3 text-xs text-gray-500 border-t border-gray-200">
          {type === 'isr' ? (
            <p>Content revalidates periodically. Check Network tab for cache status.</p>
          ) : type === 'ssg' ? (
            <p>Content is static and will remain unchanged until next build.</p>
          ) : (
            <p>Content is generated at request time.</p>
          )}
        </div>
      </div>
    </div>
  );
}