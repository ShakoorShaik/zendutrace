import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Form relay endpoint (Formspree/Basin/serverless function). Set
// VITE_CAPTURE_ENDPOINT in .env before launch; without it, submits fall back
// to the "failed" state which offers a direct sales@ mailto instead.
const CAPTURE_ENDPOINT = import.meta.env.VITE_CAPTURE_ENDPOINT || '';

export function useEmailCapture(request) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | sending | done | failed

  const fallbackHref = `mailto:sales@zenduit.com?subject=${encodeURIComponent(request)}&body=${encodeURIComponent(`Work email: ${email.trim()}\n\nRequest: ${request}`)}`;

  const submit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(CAPTURE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: value, request, page: window.location.href, at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`capture endpoint responded ${res.status}`);
      try {
        const leads = JSON.parse(localStorage.getItem('xt-leads') || '[]');
        leads.push({ email: value, request, at: new Date().toISOString() });
        localStorage.setItem('xt-leads', JSON.stringify(leads));
      } catch {
        // storage unavailable — the endpoint already has the lead
      }
      setStatus('done');
    } catch {
      setStatus('failed');
    }
  };

  const onChange = (e) => {
    setEmail(e.target.value);
    if (status === 'error' || status === 'failed') setStatus('idle');
  };

  const reset = () => setStatus('idle');

  return { email, status, submit, onChange, reset, fallbackHref };
}
