import { useHover } from '../hooks/useHover';
import { useEmailCapture } from '../hooks/useEmailCapture';

function FooterLink({ href, onClick, children }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      className="footer-link"
      href={href}
      onClick={onClick}
      style={{ fontSize: 14, color: hovered ? '#FF9A57' : 'rgba(255,255,255,0.74)', transition: 'color .16s' }}
      {...hoverProps}
    >
      {children}
    </a>
  );
}

const setIntent = (intent) => () => window.dispatchEvent(new CustomEvent('xt-intent', { detail: intent }));

function ContactLink({ href, icon, children }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      className="contact-link"
      href={href}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: hovered ? '#FF9A57' : 'rgba(255,255,255,0.7)', transition: 'color .16s' }}
      {...hoverProps}
    >
      <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span>
      {children}
    </a>
  );
}

function LegalLink({ href, children }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      className="legal-link"
      href={href}
      style={{ fontSize: 13, color: hovered ? '#fff' : 'rgba(255,255,255,0.62)', transition: 'color .16s' }}
      {...hoverProps}
    >
      {children}
    </a>
  );
}

function SocialLink({ href, label, children }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      className="social-link"
      href={href}
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 8,
        background: hovered ? 'rgba(255,138,43,0.16)' : 'rgba(255,255,255,0.05)',
        border: hovered ? '1px solid rgba(255,138,43,0.4)' : '1px solid rgba(255,255,255,0.08)',
        color: hovered ? '#fff' : 'rgba(255,255,255,0.72)',
        transition: 'all .16s',
      }}
      {...hoverProps}
    >
      <span aria-hidden="true" style={{ display: 'inline-flex' }}>{children}</span>
    </a>
  );
}

function ColumnHeading({ accent = '#FF7A2E', children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 16, height: 2, borderRadius: 2, background: accent }} />
      <span style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
        {children}
      </span>
    </div>
  );
}

function NewsletterForm() {
  const { email, status, submit, onChange, fallbackHref } = useEmailCapture('XenTag newsletter signup');
  if (status === 'done') {
    return (
      <div role="status" aria-live="polite" style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 9, background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.4)' }}>
        <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00E5A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9.5 18 20 6" /></svg>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>You&rsquo;re on the list.</span>
      </div>
    );
  }
  return (
    <form onSubmit={submit} noValidate style={{ marginTop: 12 }}>
      <div className="newsletter-row" style={{ display: 'flex', gap: 8 }}>
        <label className="sr-only" htmlFor="newsletter-email">Work email for newsletter</label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={onChange}
          placeholder="Work email"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'newsletter-email-error' : status === 'failed' ? 'newsletter-email-failed' : undefined}
          style={{ flex: 1, minWidth: 0, padding: '10px 12px', borderRadius: 9, background: 'rgba(255,255,255,0.05)', border: status === 'error' ? '1px solid #E5484D' : '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 13, outline: 'none' }}
        />
        <button className="newsletter-submit" type="submit" disabled={status === 'sending'} style={{ padding: '10px 14px', borderRadius: 9, border: 'none', background: status === 'sending' ? 'rgba(194,65,12,0.6)' : '#C2410C', color: '#fff', fontWeight: 600, fontSize: 13, cursor: status === 'sending' ? 'default' : 'pointer', whiteSpace: 'nowrap' }}>
          {status === 'sending' ? '…' : 'Join'}
        </button>
      </div>
      {status === 'error' && <div id="newsletter-email-error" role="alert" style={{ marginTop: 7, fontSize: 12, color: '#FF9AA0' }}>Enter a valid email.</div>}
      {status === 'failed' && (
        <div id="newsletter-email-failed" role="alert" style={{ marginTop: 7, fontSize: 12, color: '#FF9AA0' }}>
          Couldn&rsquo;t send &mdash; <a href={fallbackHref} style={{ color: '#FFB37E', textDecoration: 'underline' }}>email us</a> instead.
        </div>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0A0B0E' }}>
      {/* Link columns */}
      <div className="footer-grid" style={{ maxWidth: 1480, margin: '0 auto', padding: '56px 48px 48px', display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1.1fr', gap: 'clamp(40px,6vw,96px)' }}>
        <div>
          <img src="/images/xentag-logo-white.png" alt="XenTag" style={{ height: 32, width: 'auto', display: 'block' }} />
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.68)', maxWidth: '25rem' }}>
            Smart labels for goods worth protecting. XenTag&#8482; and XenAuth&#8482; bring live location, condition and cryptographic authenticity to high-value, high-security shipments &mdash; from a label. Built by ZenduIT &amp; GoFleet.
          </p>
          <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 9, padding: '9px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00E5A0', boxShadow: '0 0 8px rgba(0,229,160,0.8)' }} />
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)' }}>Live in 29 countries</span>
          </div>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 9 }}>
            <ContactLink
              href="mailto:sales@zenduit.com"
              icon={
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              }
            >
              sales@zenduit.com
            </ContactLink>
            <ContactLink
              href="tel:+18559363848"
              icon={
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            >
              +1 (855) 936-3848
            </ContactLink>
            <address style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13.5, fontStyle: 'normal', color: 'rgba(255,255,255,0.64)' }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              2355 Skymark Ave &middot; Mississauga, ON
            </address>
          </div>
        </div>
        <div>
          <ColumnHeading>Products</ColumnHeading>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
            <FooterLink href="#products">XenTag</FooterLink>
            <FooterLink href="#products">XenAuth</FooterLink>
            <FooterLink href="#platform">Platform</FooterLink>
            <FooterLink href="#integrations">Integrations</FooterLink>
          </div>
        </div>
        <div>
          <ColumnHeading>Company</ColumnHeading>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
            <FooterLink href="https://www.zenduit.com">ZenduIT</FooterLink>
            <FooterLink href="https://www.gofleet.com">GoFleet</FooterLink>
            <FooterLink href="https://xentag.com">XenTag.com</FooterLink>
            <FooterLink href="#industries">Industries</FooterLink>
            <FooterLink href="#compare">Compare</FooterLink>
          </div>
        </div>
        <div>
          <ColumnHeading>Get started</ColumnHeading>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
            <FooterLink href="#book" onClick={setIntent('demo')}>Book a demo</FooterLink>
            <FooterLink href="#demo">Watch the lifecycle</FooterLink>
            <FooterLink href="#book" onClick={setIntent('labels')}>Get 10 free labels</FooterLink>
            <FooterLink href="mailto:sales@zenduit.com">Talk to sales</FooterLink>
          </div>
          <div style={{ marginTop: 26 }}>
            <ColumnHeading accent="linear-gradient(90deg,#00E5A0,#00C4A0)">Newsletter</ColumnHeading>
          </div>
          <p style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.62)' }}>
            Field notes on high-value goods tracking. Monthly, no spam.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{ maxWidth: 1480, margin: '0 auto', padding: '26px 48px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.58)' }}>
          &copy; 2026 ZenduIT. All rights reserved.
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <LegalLink href="#">Privacy</LegalLink>
          <LegalLink href="#">Terms</LegalLink>
          <LegalLink href="#">Security</LegalLink>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <SocialLink href="https://www.linkedin.com/company/zenduit" label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@zenduit6752" label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12s0-3.7-.46-5.48a2.78 2.78 0 0 0-1.94-1.96C18.9 4.1 12 4.1 12 4.1s-6.9 0-8.6.46A2.78 2.78 0 0 0 1.46 6.5C1 8.3 1 12 1 12s0 3.7.46 5.48a2.78 2.78 0 0 0 1.94 1.96c1.7.46 8.6.46 8.6.46s6.9 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96C23 15.7 23 12 23 12zM9.75 15.5v-7l6 3.5z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://x.com/zenduit" label="X">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.24 2h3.3l-7.2 8.23L23 22h-6.63l-5.19-6.79L5.24 22H1.94l7.7-8.8L1 2h6.8l4.69 6.2zm-1.16 18h1.83L7.01 3.9H5.05z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
