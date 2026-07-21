'use client';

import { useState, useCallback } from 'react';

export function useToast() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const show = useCallback((msg: string, duration = 3000) => {
    setMessage(msg);
    setVisible(true);
    if (duration > 0) {
      setTimeout(() => setVisible(false), duration);
    }
  }, []);

  const hide = useCallback(() => setVisible(false), []);

  return { message, visible, show, hide };
}
