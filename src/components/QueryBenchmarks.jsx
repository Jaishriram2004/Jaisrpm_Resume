import React, { useState } from 'react';
import { Database, Zap, Code2, Copy, Check } from 'lucide-react';

export function QueryBenchmarks() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [copiedQuery, setCopiedQuery] = useState(false);

  const benchmarks = [
    {
      id: 'genpact-risk',
      title: 'Banking Risk Portfolio Aggregation',
      context: 'Genpact — Banking Analytics',
      tech: 'SAS & PostgreSQL SQL',
      beforeTime: '14.2 sec',
      afterTime: '0.38 sec',
      improvement: '37x Faster',
      ratioPercent: 97,
      description: 'Optimized complex JOIN operations on large-scale banking transaction datasets by implementing composite indexing, partition pruning, and automated SAS macro workflows.',
      sql: `-- Optimized SAS & PostgreSQL Analytical Query
SELECT 
    portfolio_id, 
    risk_tier, 
    COUNT(DISTINCT account_id) AS total_accounts, 
    SUM(exposure_amount) AS total_exposure
FROM dw.banking_portfolio_facts
WHERE reporting_period = '2025-Q3'
GROUP BY portfolio_id, risk_tier
ORDER BY total_exposure DESC;`
    },
    {
      id: 'amazon-sync',
      title: 'Kindle Sync Payload Optimization',
      context: 'Amazon — SDE Internship',
      tech: 'C++ / AWS Cloud Sync',
      beforeTime: '100% Latency Baseline',
      afterTime: '40% Reduced Latency',
      improvement: '40% Latency Drop',
      ratioPercent: 40,
      description: 'Streamlined cloud data synchronization routines between React Native client state and AWS backend services, significantly reducing device payload sizes.',
      sql: `// C++ AWS Cloud Sync Routine Optimization
auto syncPayload = SyncEngine::PrepareCompressedBatch(readingLogs);
awsClient.UploadSyncPayloadAsync(syncPayload, [](const SyncResult& result) {
    if (result.isSuccess()) {
        TelemetryLogger::LogLatencyMetric(result.executionTimeMs);
    }
});`
    },
    {
      id: 'airflow-etl',
      title: 'Multi-Source Campaign Ingestion',
      context: 'Customer Campaign Platform',
      tech: 'Apache Airflow & Pandas',
      beforeTime: '4.8 sec',
      afterTime: '0.12 sec',
      improvement: '40x Throughput',
      ratioPercent: 97.5,
      description: 'Automated multi-source transaction ingestion with parallel validation checks, transforming raw data into PostgreSQL star-schema tables.',
      sql: `-- Star-Schema Fact Table Ingestion
INSERT INTO dw.fact_campaign_conversions (campaign_id, customer_id, conversion_value)
SELECT 
    c.campaign_id, 
    u.customer_id, 
    SUM(t.amount)
FROM staging_transactions t
JOIN staging_customers u ON t.user_id = u.id
JOIN staging_campaigns c ON t.campaign_code = c.code
GROUP BY c.campaign_id, u.customer_id;`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(benchmarks[activeQuery].sql);
    setCopiedQuery(true);
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  const current = benchmarks[activeQuery];

  return (
    <div className="card query-benchmark-card">
      <div className="benchmark-header">
        <div>
          <span className="badge category-badge">Engineering Performance Metrics</span>
          <h3 className="benchmark-title">Query & Data Optimization Benchmarks</h3>
          <p className="benchmark-sub">
            Real-world performance improvements achieved through database indexing, SAS automation, and memory tuning.
          </p>
        </div>
      </div>

      {/* Query Selector Tabs */}
      <div className="benchmark-tabs">
        {benchmarks.map((b, idx) => (
          <button
            key={b.id}
            onClick={() => setActiveQuery(idx)}
            className={`benchmark-tab-btn ${activeQuery === idx ? 'active' : ''}`}
          >
            <Database size={14} />
            <span>{b.title}</span>
          </button>
        ))}
      </div>

      {/* Benchmark Content Grid */}
      <div className="benchmark-detail-grid">
        <div className="benchmark-stats-panel">
          <div className="context-row">
            <span className="badge">{current.context}</span>
            <span className="badge tech-tag">{current.tech}</span>
          </div>

          <h4 className="detail-heading">{current.title}</h4>
          <p className="detail-desc">{current.description}</p>

          {/* Visual Speedup Comparison Bar */}
          <div className="speedup-visual-box">
            <div className="visual-bar-header">
              <span className="visual-lbl">Latency Reduction Ratio</span>
              <span className="visual-val mono">{current.improvement}</span>
            </div>
            <div className="visual-bar-track">
              <div
                className="visual-bar-fill"
                style={{ width: `${current.ratioPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="before-after-card">
            <div className="stat-box">
              <span className="stat-lbl">Original Runtime</span>
              <span className="stat-num original">{current.beforeTime}</span>
            </div>
            <div className="arrow-divider">→</div>
            <div className="stat-box">
              <span className="stat-lbl">Optimized Runtime</span>
              <span className="stat-num optimized">{current.afterTime}</span>
            </div>
            <div className="gain-badge">
              <Zap size={14} />
              <span>{current.improvement}</span>
            </div>
          </div>
        </div>

        {/* Code Snippet Box */}
        <div className="benchmark-code-panel">
          <div className="code-panel-header">
            <div className="code-header-title">
              <Code2 size={14} />
              <span className="mono">optimized_execution_query.sql</span>
            </div>
            <button onClick={handleCopy} className="copy-code-btn" title="Copy SQL snippet">
              {copiedQuery ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedQuery ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="code-view mono">{current.sql}</pre>
        </div>
      </div>

      <style>{`
        .query-benchmark-card {
          margin-top: 2rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-hover);
        }

        .benchmark-header {
          margin-bottom: 1.5rem;
        }

        .benchmark-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-top: 0.35rem;
          margin-bottom: 0.35rem;
        }

        .benchmark-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .benchmark-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .benchmark-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-sans);
          font-size: 0.825rem;
          font-weight: 600;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .benchmark-tab-btn.active, .benchmark-tab-btn:hover {
          background: var(--bg-surface);
          color: var(--text-primary);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-sm);
        }

        .benchmark-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 1.5rem;
        }

        .benchmark-stats-panel {
          display: flex;
          flex-direction: column;
        }

        .context-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
          flex-wrap: wrap;
        }

        .detail-heading {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .detail-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .speedup-visual-box {
          margin-bottom: 1.25rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          padding: 0.75rem 0.85rem;
          border-radius: 8px;
        }

        .visual-bar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.4rem;
        }

        .visual-lbl {
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .visual-val {
          color: var(--badge-green-text);
          font-weight: 700;
        }

        .visual-bar-track {
          width: 100%;
          height: 6px;
          background: var(--bg-surface);
          border-radius: 4px;
          overflow: hidden;
        }

        .visual-bar-fill {
          height: 100%;
          background: var(--badge-green-text);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        .before-after-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 0.85rem 1rem;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
        }

        .stat-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .stat-num {
          font-size: 1rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }

        .stat-num.original {
          color: #ef4444;
          text-decoration: line-through;
        }

        .stat-num.optimized {
          color: #10b981;
        }

        .arrow-divider {
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        .gain-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--badge-green-bg);
          color: var(--badge-green-text);
          border: 1px solid var(--badge-green-border);
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }

        .benchmark-code-panel {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .code-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .code-header-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .copy-code-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .copy-code-btn:hover {
          color: var(--text-primary);
        }

        .code-view {
          padding: 1rem;
          font-size: 0.775rem;
          line-height: 1.5;
          color: var(--text-primary);
          overflow-x: auto;
          margin: 0;
          white-space: pre-wrap;
        }

        @media (max-width: 900px) {
          .benchmark-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .before-after-card {
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-start;
          }
          .arrow-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}


