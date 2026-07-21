export default function Stats() {
  const stats = [
    { number: '200+', label: 'готовых решений' },
    { number: '1000+', label: 'довольных клиентов' },
    { number: '50+', label: 'функций в боте' },
    { number: '24/7', label: 'поддержка' },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
      {stats.map((s) => (
        <div key={s.label} className="glass p-3 text-center">
          <div className="text-xl font-bold neon-text">{s.number}</div>
          <div className="text-xs text-purple-200/50">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
