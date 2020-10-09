import { useEffect, useState } from 'react';

export function useStateFromProp (initialValue: any) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => setValue(initialValue), [initialValue]);

  return [value, setValue];
}
