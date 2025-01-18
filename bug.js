```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an error if the query parameter is not defined
    const id = router.query.id;
    router.push(`/detail?id=${id}`); 
  };

  return (
    <button onClick={handleClick}>Go to Detail</button>
  );
}

export default MyComponent; 
```