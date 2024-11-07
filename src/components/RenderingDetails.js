export default function RenderingDetails({ type }) {
  const details = {
    static: {
      title: "Static Site Generation (SSG)",
      description: "HTML is generated at build time and reused for each request.",
      pros: [
        "Fastest page loads (pre-rendered HTML)",
        "Best for SEO",
        "Lowest server cost (CDN-served)",
        "Great for global deployment",
        "Perfect for security"
      ],
      cons: [
        "Content can become stale",
        "Requires full rebuild for updates",
        "Build time increases with page count",
        "Not suitable for dynamic content"
      ]
    },
    server: {
      title: "Server-Side Rendering (SSR)",
      description: "HTML is generated on each request.",
      pros: [
        "Real-time data",
        "Good SEO",
        "Dynamic content",
        "Secure for sensitive data",
        "Fresh content on every request"
      ],
      cons: [
        "Slower than SSG",
        "Higher server costs",
        "Server required for each request",
        "Can be slower in regions far from server"
      ]
    },
    client: {
      title: "Client-Side Rendering (CSR)",
      description: "Content is rendered in the browser using JavaScript.",
      pros: [
        "Highly interactive",
        "Good for private dashboards",
        "Reduced server load",
        "Rich user interactions",
        "Fast subsequent navigation"
      ],
      cons: [
        "Poor SEO",
        "Slower initial load",
        "Requires JavaScript",
        "Can be flashy/jumpy",
        "Higher client-side bundle"
      ]
    },
    incremental: {
      title: "Incremental Static Regeneration (ISR)",
      description: "Static pages are regenerated after a specified interval.",
      pros: [
        "Combines static and dynamic benefits",
        "Good performance",
        "Fresh content without full rebuilds",
        "Good SEO",
        "Scales to millions of pages"
      ],
      cons: [
        "Slightly complex setup",
        "Can serve stale data",
        "First visit might be slower",
        "Storage needs for cached pages"
      ]
    }
  };

  const info = details[type];

  return (
    <div className="p-4 mt-6 rounded-lg bg-gray-50">
      <h3 className="mb-2 text-lg font-semibold">{info.title}</h3>
      <p className="mb-4 text-gray-600">{info.description}</p>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 font-medium text-green-600">Pros:</h4>
          <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
            {info.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="mb-2 font-medium text-red-600">Cons:</h4>
          <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
            {info.cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}