'use client';

import { TrendingUp, Globe, IndianRupee, Briefcase, Target, Info } from 'lucide-react';

const SALARY_DATA = [
  { role: "Specialist Surgeon", india: "25-50L", global: "$250k-$400k", growth: "High" },
  { role: "Clinical Researcher", india: "12-25L", global: "$110k-$160k", growth: "Very High" },
  { role: "Pharmacologist", india: "8-18L", global: "$95k-$140k", growth: "Moderate" },
  { role: "Agronomist", india: "6-15L", global: "$70k-$110k", growth: "Moderate" },
  { role: "Physiotherapist", india: "5-12L", global: "$80k-$120k", growth: "High" }
];

export default function SalaryTrends() {
  return (
    <div className="glass-card" style={{ padding: '60px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
         <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.15em', marginBottom: '12px' }}>DATA VISUALIZATION</div>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em' }}>Salary <span className="text-gradient">Benchmarks</span></h2>
         </div>
         <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#64748b' }}>
               <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '3px' }}></div> India (LPA)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#64748b' }}>
               <div style={{ width: '12px', height: '12px', background: '#e2e8f0', borderRadius: '3px' }}></div> Global (USD)
            </div>
         </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '60px' }}>
         {SALARY_DATA.map((d, i) => (
           <div key={i} className="salary-card" style={{ padding: '35px', background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '24px', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                 <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1e293b' }}>{d.role}</h4>
                 <TrendingUp size={18} color="#10b981" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                 <div style={{ padding: '20px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '8px' }}>INDIA (AVG)</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)' }}>{d.india}</div>
                 </div>
                 <div style={{ padding: '20px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '8px' }}>GLOBAL (AVG)</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#475569' }}>{d.global}</div>
                 </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#64748b' }}>DEMAND GROWTH</div>
                 <div style={{ padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 900 }}>{d.growth}</div>
              </div>
           </div>
         ))}
      </div>

      {/* Visual Chart Placeholder/Simplified SVG */}
      <div style={{ padding: '50px', background: '#f8fafc', borderRadius: '30px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
         <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '30px' }}>Trajectory Over 10 Years</h4>
         <div style={{ height: '240px', width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 40px' }}>
            {/* Simple CSS bars to simulate a chart */}
            {[40, 55, 75, 95, 120, 150].map((h, idx) => (
               <div key={idx} style={{ width: '40px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: `${h}px`, background: 'var(--primary)', borderRadius: '10px 10px 0 0', boxShadow: '0 10px 20px rgba(79, 70, 229, 0.2)' }}></div>
                  <div style={{ position: 'absolute', bottom: '-30px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8' }}>YEAR {idx * 2}</div>
               </div>
            ))}
            {/* Global Comparison Line Overlay (Dashed) */}
            <div style={{ position: 'absolute', bottom: '150px', left: '40px', right: '40px', borderTop: '2px dashed #cbd5e1', color: '#94a3b8', fontSize: '0.7rem', textAlign: 'right', paddingTop: '5px' }}>GLOBAL AVG BASELINE</div>
         </div>
      </div>

      <style jsx>{`
        .salary-card:hover { border-color: var(--primary); transform: translateY(-3px); }
      `}</style>
    </div>
  );
}
