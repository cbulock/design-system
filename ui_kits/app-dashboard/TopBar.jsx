function TopBar({ crumbs = ['home'], onToggleTheme, theme }) {
  return (
    <header style={{
      height: 48, padding: '0 20px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 0, fontFamily: 'var(--font-mono)' }}>
        <span style={{ fontSize: 12, color: 'var(--fg-subtle)' }}>~/</span>
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ color: 'var(--fg-faint)', fontSize: 12 }}>/</span>}
            <span style={{
              fontSize: 12,
              color: i === crumbs.length - 1 ? 'var(--fg)' : 'var(--fg-muted)',
              fontWeight: i === crumbs.length - 1 ? 500 : 400,
            }}>{c}</span>
          </React.Fragment>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '0.08em' }}>BUILD · OK · 142MS</div>
      <Button variant="ghost" size="sm" onClick={onToggleTheme}>{theme === 'dark' ? '◐ DARK' : '○ LIGHT'}</Button>
      <Button variant="ghost" size="sm" icon="bell" />
      <Button variant="primary" size="sm" icon="zap" kbd="⌘J">Run</Button>
    </header>
  );
}

window.TopBar = TopBar;
