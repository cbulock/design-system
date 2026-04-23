function Sidebar({ active, onNav }) {
  const groups = [
    { label: 'Workspace', items: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'inbox', label: 'Inbox', icon: 'inbox', badge: 3 },
      { id: 'projects', label: 'Projects', icon: 'layers' },
      { id: 'files', label: 'Files', icon: 'folder' },
    ]},
    { label: 'Recent', items: [
      { id: 'atlas', label: 'atlas', dot: '#c2410c' },
      { id: 'quiet', label: 'quiet-ds', dot: '#7ac74f' },
      { id: 'drafts', label: 'field-journal', dot: '#878273' },
    ]},
  ];
  return (
    <aside style={{
      width: 232, background: 'var(--bg-subtle)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', flexShrink: 0,
    }}>
      <div style={{ height: 48, padding: '0 14px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid var(--border)' }}>
        <div style={{
          width: 24, height: 24, borderRadius: 4,
          background: 'var(--gradient-mark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
        }}>Q</div>
        <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.01em' }}>alex's space</div>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7ac74f' }} />
      </div>

      <div style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '0 10px', height: 28, borderRadius: 4,
          background: 'var(--surface)', border: '1px solid var(--border)',
          color: 'var(--fg-subtle)', fontSize: 12, fontFamily: 'var(--font-mono)',
        }}>
          <Icon name="search" size={12} />
          <span style={{ flex: 1 }}>search</span>
          <Kbd>⌘K</Kbd>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: 8 }}>
        {groups.map((g) => (
          <div key={g.label} style={{ marginBottom: 14 }}>
            <div style={{ padding: '6px 10px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--fg-subtle)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{g.label}</div>
            {g.items.map((it) => {
              const isActive = active === it.id;
              return (
                <div key={it.id} onClick={() => onNav && onNav(it.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '6px 10px', borderRadius: 4, margin: '1px 0',
                    fontSize: 13, fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--fg)' : 'var(--fg-muted)',
                    background: isActive ? 'var(--bg-muted)' : 'transparent',
                    borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    paddingLeft: 10,
                    cursor: 'pointer', letterSpacing: '-0.005em',
                    transition: 'all 100ms cubic-bezier(0.2, 0, 0, 1)',
                  }}>
                  {it.icon && <Icon name={it.icon} size={14} style={{ color: isActive ? 'var(--accent)' : 'var(--fg-subtle)' }} />}
                  {it.dot && <div style={{ width: 6, height: 6, borderRadius: 2, background: it.dot, marginLeft: 4, marginRight: 2 }} />}
                  <span style={{ flex: 1, fontFamily: it.dot ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: it.dot ? 12 : 13 }}>{it.label}</span>
                  {it.badge && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: '#fff', background: 'var(--accent)', padding: '1px 5px', borderRadius: 2 }}>{it.badge}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div style={{ padding: 10, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar initials="AL" color="var(--accent)" size={24} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg)' }}>alex lim</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-subtle)', letterSpacing: '0.04em' }}>PRO · v0.3.0</div>
        </div>
        <Icon name="more" size={14} style={{ color: 'var(--fg-subtle)', cursor: 'pointer' }} />
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
