```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: use the setter function
    setCount(count => count + 1); 
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```