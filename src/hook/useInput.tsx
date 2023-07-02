import React, { useCallback, useState } from 'react';

const useInput = (initialState: any) => {
  const [input, setInput] = useState<any>(initialState);
  
  const onChangeInput = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value, name } = event.target;
    setInput(
      {
        ...input,
        [name]: value
      }
    )
  }, [input])

  return { input, onChangeInput }
};

export default useInput;