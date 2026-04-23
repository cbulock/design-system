function StatCard({ label, value, unit, delta, positive = true }) {
  return (
    <div style={{
      padding: 16, borderRadius: 6,
      background: 'var(--surface)', border: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-subtle)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 500, letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1 }}>{value}</div>
        {unit && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-subtle)' }}>{unit}</div>}
      </div>
      {delta && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: positive ? '#3d6a29' : 'var(--danger)', fontWeight: 500 }}>{positive ? '↑' : '↓'} {delta}</div>}
    </div>
  );
}

function HomeView() {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 6 }}>WED · 2026-04-23 · 09:14</div>
        <h1 style={{ margin: 0, fontSize: 40, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Good morning, alex.
        </h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, maxWidth: 520 }}>
          3 items in inbox · 2 projects awaiting review · build passing
        </p>
      </div>

      {/* Terminal-style suggestion */}
      <div style={{ padding: 16, borderRadius: 6, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
        <div style={{ width: 3, alignSelf: 'stretch', background: 'var(--accent)', borderRadius: 2 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>// SUGGESTED · RESUME</div>
          <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 2 }}>Finish the design tokens refactor</div>
          <div style={{ fontSize: 12, color: 'var(--fg-muted)', fontFamily: 'var(--font-mono)' }}>morgan@ · 3 notes · 2h ago</div>
        </div>
        <Button variant="primary" size="md" iconRight="arrowRight">Continue</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        <StatCard label="PROJECTS" value="12" delta="2 this week" />
        <StatCard label="THREADS" value="38" delta="8%" />
        <StatCard label="SHIPPED" value="7" delta="3" />
        <StatCard label="REVIEW" value="1.4" unit="d" delta="12%" positive={false} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6 }}>
          <div style={{ padding: '10px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-subtle)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-subtle)' }}>// ACTIVITY · LAST 48H</div>
            <Button variant="ghost" size="sm" iconRight="arrowRight">all</Button>
          </div>
          {[
            { who: 'morgan', color: '#c2410c', what: 'shipped the design tokens refactor', when: '2h', tag: 'push' },
            { who: 'sam',    color: '#42403a', what: 'commented on quiet-ds review',        when: '4h', tag: 'note' },
            { who: 'jamie',  color: '#5e5a4e', what: 'created 3 components in atlas',       when: '1d', tag: 'new' },
            { who: 'you',    color: '#878273', what: 'archived 2 drafts in inbox',          when: '2d', tag: 'arch' },
          ].map((a, i, arr) => (
            <div key={i} style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i < arr.length - 1 ? '1px solid var(--border-muted)' : 'none', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
              <span style={{ color: 'var(--fg-subtle)', width: 32 }}>{a.when}</span>
              <Avatar initials={a.who.slice(0,2).toUpperCase()} color={a.color} size={20} />
              <span style={{ color: 'var(--accent)', minWidth: 64 }}>{a.who}@</span>
              <span style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg)' }}>{a.what}</span>
              <Badge tone="default">{a.tag}</Badge>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6 }}>
          <div style={{ padding: '10px 16px', borderBottom: '1px solid var(--border)', background: 'var(--bg-subtle)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-subtle)' }}>// QUICK · RUN</div>
          </div>
          <div style={{ padding: 8 }}>
            {[
              { icon: 'plus',     label: 'new project',   kbd: '⌘N' },
              { icon: 'file',     label: 'new document',  kbd: '⌘D' },
              { icon: 'calendar', label: 'schedule review', kbd: '⌘R' },
              { icon: 'settings', label: 'settings',      kbd: '⌘,' },
            ].map((q) => (
              <div key={q.label} className="hov" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px', borderRadius: 4, cursor: 'pointer', fontSize: 13, color: 'var(--fg)' }}>
                <Icon name={q.icon} size={14} style={{ color: 'var(--fg-subtle)' }} />
                <span style={{ flex: 1 }}>{q.label}</span>
                <Kbd>{q.kbd}</Kbd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsView() {
  const rows = [
    { name: 'quiet-ds',       owner: 'alex',   status: 'live',     tone: 'success', updated: '2h',  ver: 'v0.3.0', color: '#c2410c' },
    { name: 'atlas',          owner: 'morgan', status: 'review',   tone: 'warning', updated: '5h',  ver: 'v1.4.0', color: '#42403a' },
    { name: 'ember-notes',    owner: 'alex',   status: 'draft',    tone: 'default', updated: '1d',  ver: 'v0.0.3', color: '#5e5a4e' },
    { name: 'field-journal',  owner: 'sam',    status: 'draft',    tone: 'default', updated: '3d',  ver: 'v0.1.0', color: '#878273' },
    { name: 'halcyon',        owner: 'jamie',  status: 'archived', tone: 'danger',  updated: '2w',  ver: 'v2.0.0', color: '#b8b3a2' },
  ];
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: '-0.03em' }}>Projects</h1>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-subtle)', marginTop: 4 }}>// {rows.length} projects · this workspace</div>
        </div>
        <Button variant="secondary" size="md" icon="filter">Filter</Button>
        <Button variant="primary" size="md" icon="plus" kbd="⌘N">New</Button>
      </div>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.7fr 32px', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500, color: 'var(--fg-subtle)', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border)' }}>
          <div>NAME</div><div>OWNER</div><div>STATUS</div><div>UPDATED</div><div>VERSION</div><div />
        </div>
        {rows.map((r, i) => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.7fr 32px', padding: '10px 16px', fontSize: 13, alignItems: 'center', borderBottom: i < rows.length - 1 ? '1px solid var(--border-muted)' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 6, height: 6, background: r.color }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{r.name}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)' }}>{r.owner}@</div>
            <div><Badge tone={r.tone}>{r.status}</Badge></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-muted)' }}>{r.updated} ago</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-subtle)' }}>{r.ver}</div>
            <div style={{ color: 'var(--fg-subtle)', cursor: 'pointer', display: 'flex', justifyContent: 'flex-end' }}><Icon name="more" size={14} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InboxView() {
  const items = [
    { from: 'morgan', color: '#c2410c', subj: 'token pipeline ready for review', preview: 'pushed the refactored build step — 40% faster. mind taking a look before friday?', time: '09:14', unread: true },
    { from: 'sam',    color: '#42403a', subj: 'quiet-ds v0.3 — notes',            preview: 'a few small things on the button states. nothing blocking, but worth discussing.', time: '08:02', unread: true },
    { from: 'jamie',  color: '#5e5a4e', subj: 'atlas: 3 new components',          preview: 'added card, sheet, and popover. followed the same patterns as the existing set.',  time: 'yda',  unread: true },
    { from: 'system', color: '#878273', subj: 'weekly digest',                    preview: 'shipped 7 · reviewed 12 · closed 3 threads this week.', time: 'mon' },
  ];
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: '-0.03em' }}>Inbox</h1>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-subtle)', marginTop: 4 }}>// 3 unread · 4 total</div>
        </div>
        <div style={{ display: 'inline-flex', background: 'var(--bg-muted)', borderRadius: 4, padding: 2, border: '1px solid var(--border)' }}>
          {['ALL', 'UNREAD', 'MENTIONS'].map((t, i) => (
            <button key={t} style={{ background: i === 0 ? 'var(--surface)' : 'transparent', border: 'none', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: i === 0 ? 'var(--fg)' : 'var(--fg-muted)', padding: '4px 10px', borderRadius: 3, cursor: 'pointer', letterSpacing: '0.04em' }}>{t}</button>
          ))}
        </div>
      </div>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
        {items.map((m, i) => (
          <div key={i} style={{ padding: '12px 16px', display: 'flex', gap: 12, borderBottom: i < items.length - 1 ? '1px solid var(--border-muted)' : 'none', cursor: 'pointer', alignItems: 'center' }}>
            <div style={{ width: 6, display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
              {m.unread && <div style={{ width: 6, height: 6, borderRadius: 2, background: 'var(--accent)' }} />}
            </div>
            <Avatar initials={m.from.slice(0,2).toUpperCase()} color={m.color} size={22} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', minWidth: 72 }}>{m.from}@</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: m.unread ? 600 : 400, color: 'var(--fg)', letterSpacing: '-0.005em', marginBottom: 2, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{m.subj}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-muted)', lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.preview}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)', flexShrink: 0 }}>{m.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HomeView, ProjectsView, InboxView, StatCard });
