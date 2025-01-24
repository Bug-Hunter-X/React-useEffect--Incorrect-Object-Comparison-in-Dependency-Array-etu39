```javascript
import isEqual from 'lodash.isequal'; // Or another deep comparison library

function MyComponent() {
  const [count, setCount] = useState(0);
  const [prevProps, setPrevProps] = useState({});

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(prevProps.someObject, props.someObject)) {
      // ... perform update logic ...
    }
    setPrevProps({...props});
  }, [props.someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```