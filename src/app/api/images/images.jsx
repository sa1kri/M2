import { useEffect, useState } from 'react';

const CatFact = () => {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data.fact))
      .catch(error => console.error(error));
  }, [
    
  ]);

  return (
    <div>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default CatFact;