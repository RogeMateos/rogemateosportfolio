import React, { useState, useEffect } from 'react';

// TODO: This component needs proper styling
interface TestComponentProps {
  name: string;
  age?: number;
  data?: any; // This should be more specific
  callback?: (result: any) => void; // Another any type
}

export const TestAIReview: React.FC<TestComponentProps> = ({
  name,
  age,
  data,
  callback
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // FIXME: This useEffect has missing dependencies
  useEffect(() => {
    console.log('Component mounted with data:', data); // Debug statement
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);

    try {
      // No error handling for this fetch call
      const response = await fetch('/api/user');
      const userData = response.json(); // Missing await

      console.log('Fetched user data:', userData); // Another debug statement

      if (callback) {
        callback(userData);
      }
    } catch (err) {
      console.error('Error fetching data:', err); // Console.error in catch
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  // Function without proper error handling
  const handleClick = () => {
    console.log('Button clicked!'); // More debug output

    // Direct DOM manipulation (not React way)
    document.getElementById('test-element')?.classList.add('active');

    // TODO: Add proper validation here
    if (name) {
      alert(`Hello ${name}!`); // Using alert instead of proper UI
    }
  };

  // Large inline object (code smell)
  const largeConfig = {
    api: {
      endpoint: 'https://api.example.com',
      timeout: 5000,
      retries: 3,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token-here', // Hardcoded token!
        'X-Custom-Header': 'value'
      }
    },
    ui: {
      theme: 'dark',
      animations: true,
      notifications: true
    }
  };

  if (loading) {
    return <div>Loading...</div>; // No proper loading component
  }

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>; // Inline styles
  }

  return (
    <div className="test-component">
      <h2>Test Component for AI Review</h2>
      <p>Name: {name}</p>
      {age && <p>Age: {age}</p>}

      <button
        onClick={handleClick}
        id="test-element"
        style={{ padding: '10px', margin: '5px' }} // More inline styles
      >
        Click me!
      </button>

      {/* FIXME: This should be a proper component */}
      <div>
        <span>Config: {JSON.stringify(largeConfig)}</span>
      </div>
    </div>
  );
};

// Missing default export
// export default TestAIReview;