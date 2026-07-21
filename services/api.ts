import { RequestPayload } from '@/types';

export async function submitRequest(payload: RequestPayload) {
  const res = await fetch('/api/submit-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}
