import { useState, useEffect } from 'react';

export function Fetch(uri) {
  const [loading, setLoading] = useState(true);
  let [someThing, changeSomeThing] = useState('');

  const goFetch = async () => {
    try {
      const json = await (await fetch(uri)).json();

      changeSomeThing(json);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (!uri) return;
    goFetch();
  }, []);

  return { someThing, loading };
}
