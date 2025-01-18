```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Safely access query parameters using optional chaining and a default value
    const id = router.query.id || 'defaultId';
    router.push(`/detail?id=${id}`);
  };

  return (
    <button onClick={handleClick}>Go to Detail</button>
  );
}

export default MyComponent; 
```