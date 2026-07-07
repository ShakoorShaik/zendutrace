import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Client-side email capture: validates, records the lead locally, and opens a
// prefilled mail draft to the sales inbox (no backend on this static site).
export function useEmailCapture(subject) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | done

  const submit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      return;
    }
    try {
      const leads = JSON.parse(localStorage.getItem('zt-leads') || '[]');
      leads.push({ email: value, subject, at: new Date().toISOString() });
      localStorage.setItem('zt-leads', JSON.stringify(leads));
    } catch {
      // storage unavailable — the mail draft below still captures the lead
    }
    window.location.href = `mailto:hello@zenduit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Work email: ${value}\n\nPlease send my starter roll of ZenduTrace labels.`)}`;
    setStatus('done');
  };

  const onChange = (e) => {
    setEmail(e.target.value);
    if (status === 'error') setStatus('idle');
  };

  return { email, status, submit, onChange };
}
