// v3 Primitives — terminal/amber, sharp corners, mono numerics
function Button({ children, variant = 'secondary', size = 'md', icon, iconRight, onClick, style = {}, disabled, kbd }) {
  const sizes = {
    sm: { h: 26, px: 10, fs: 12, gap: 5 },
    md: { h: 32, px: 14, fs: 13, gap: 6 },
    lg: { h: 40, px: 18, fs: 14, gap: 8 },
  };
  const s = sizes[size];
  const variants = {
    primary: { background: 'var(--accent)', color: '#fff', border: '1px solid var(--accent)' },
    secondary: { background: 'var(--surface)', color: 'var(--fg)', border: '1px solid var(--border)' },
    outline: { background: 'transparent', color: 'var(--accent)', border: '1px solid var(--accent)' },
    ghost: { background: 'transparent', color: 'var(--fg)', border: '1px solid transparent' },
    danger: { background: 'var(--danger)', color: '#fff', border: '1px solid var(--danger)' },
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`btn-${variant}`}
      style={{
        fontFamily: 'var(--font-sans)', fontSize: s.fs, fontWeight: 500,
        height: s.h, padding: `0 ${s.px}px`, borderRadius: 4,
        display: 'inline-flex', alignItems: 'center', gap: s.gap,
        cursor: disabled ? 'not-allowed' : 'pointer', letterSpacing: '-0.005em',
        transition: 'all 150ms cubic-bezier(0.2, 0, 0, 1)',
        opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
        ...variants[variant], ...style,
      }}>
      {icon && <Icon name={icon} size={s.fs + 1} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.fs + 1} />}
      {kbd && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '1px 5px', background: 'rgba(255,255,255,0.15)', borderRadius: 2, marginLeft: 2 }}>{kbd}</span>}
    </button>
  );
}

function Badge({ children, tone = 'default', style = {} }) {
  const tones = {
    default: { bg: 'var(--bg-subtle)', fg: 'var(--fg-muted)', bd: 'var(--border)' },
    success: { bg: 'color-mix(in srgb, #7ac74f 14%, transparent)', fg: '#3d6a29', bd: 'color-mix(in srgb, #7ac74f 32%, transparent)' },
    warning: { bg: 'color-mix(in srgb, #b45309 12%, transparent)', fg: '#b45309', bd: 'color-mix(in srgb, #b45309 30%, transparent)' },
    danger:  { bg: 'color-mix(in srgb, #b91c1c 12%, transparent)', fg: '#b91c1c', bd: 'color-mix(in srgb, #b91c1c 30%, transparent)' },
    accent:  { bg: 'color-mix(in srgb, #c2410c 12%, transparent)', fg: '#c2410c', bd: 'color-mix(in srgb, #c2410c 30%, transparent)' },
    solid:   { bg: 'var(--fg)', fg: 'var(--bg)', bd: 'var(--fg)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
      padding: '2px 8px', height: 20, letterSpacing: '0.02em', textTransform: 'uppercase',
      borderRadius: 3, background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
      ...style,
    }}>{children}</span>
  );
}

function Input({ placeholder, value, onChange, icon, style = {}, mono, ...rest }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
      {icon && <div style={{ position: 'absolute', left: 10, color: 'var(--fg-subtle)', display: 'flex', pointerEvents: 'none' }}><Icon name={icon} size={14} /></div>}
      <input placeholder={placeholder} value={value} onChange={onChange} {...rest}
        style={{
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: 13, color: 'var(--fg)',
          height: 32, padding: `0 12px 0 ${icon ? 32 : 12}px`, borderRadius: 4,
          border: '1px solid var(--border)', background: 'var(--surface)',
          outline: 'none', width: '100%',
          transition: 'all 150ms cubic-bezier(0.2, 0, 0, 1)',
          ...style,
        }}/>
    </div>
  );
}

function Switch({ checked, onChange }) {
  return (
    <div onClick={() => onChange && onChange(!checked)}
      style={{
        position: 'relative', width: 32, height: 18,
        background: checked ? 'var(--accent)' : 'var(--gray-300)',
        borderRadius: 3, cursor: 'pointer', transition: '150ms',
      }}>
      <div style={{
        position: 'absolute', top: 2, left: checked ? 16 : 2, width: 14, height: 14,
        background: '#fff', borderRadius: 2,
        transition: '150ms cubic-bezier(0.2, 0, 0, 1)',
      }} />
    </div>
  );
}

function Avatar({ initials, color = 'var(--accent)', size = 24, style = {} }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 3,
      background: color, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-mono)', fontSize: size * 0.4, fontWeight: 600, flexShrink: 0, ...style,
    }}>{initials}</div>
  );
}

function Kbd({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 10,
      background: 'var(--bg-muted)', color: 'var(--fg-muted)',
      border: '1px solid var(--border)', borderRadius: 3,
      padding: '1px 5px', letterSpacing: 0,
    }}>{children}</span>
  );
}

Object.assign(window, { Button, Badge, Input, Switch, Avatar, Kbd });
