```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: trying to update state directly
    count = count + 1; 
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```