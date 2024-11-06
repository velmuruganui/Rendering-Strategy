import { parseISO, format } from 'date-fns';

export default function TimeDisplay({ timestamp, label }) {
  const date = parseISO(timestamp);
  
  return (
    <div className="text-sm text-gray-500">
      <p>
        {label}{' '}
        <time dateTime={format(date, 'yyyy-MM-dd')}>
          {format(date, 'MMMM d, yyyy')}
        </time>
        {' '}at{' '}
        <time dateTime={format(date, 'HH:mm:ss')}>
          {format(date, 'h:mm:ss a')}
        </time>
      </p>
    </div>
  );
}