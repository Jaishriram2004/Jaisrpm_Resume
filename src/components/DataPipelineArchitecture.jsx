import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Layers, 
  BarChart3, 
  Globe, 
  Workflow, 
  Play, 
  Pause, 
  RotateCcw, 
  Copy, 
  Check, 
  Server, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Code2,
  Cpu
} from 'lucide-react';

export function DataPipelineArchitecture() {
  const [activeStage, setActiveStage] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeRecordCount, setActiveRecordCount] = useState(148200);

  const stages = [
    {
      id: 'ingest',
      step: '01',
      name: 'Multi-Source Ingestion',
      category: 'Data Ingestion & Event Streaming',
      icon: Server,
      badge: 'Real-time & Batch Ingest',
      tech: ['REST APIs', 'PostgreSQL CDC', 'Webhooks', 'Banking Datasets'],
      throughput: '35,000 rec/sec',
      latency: '< 180ms',
      health: '99.98% valid',
      status: 'Active Streaming',
      summary: 'Automated data ingestion from banking databases, transactional logs, and external client APIs with schema registry and automated dead-letter queues.',
      codeTitle: 'ingest_event_stream.py',
      codeSnippet: `# Automated Batch & CDC Event Stream Ingester
def ingest_source_stream(source_config: Dict[str, Any]) -> StreamResult:
    session = create_resilient_session(retries=3, backoff_factor=0.5)
    raw_payloads = session.fetch_cdc_events(
        source_id=source_config["banking_cluster_01"],
        checkpoint=source_config["last_offset"]
    )
    validated_records = [
        sanitize_and_type_cast(rec) for rec in raw_payloads 
        if validate_checksum(rec)
    ]
    return stream_publisher.publish_batch(
        topic="dw.staging.raw_events", 
        payload=validated_records
    )`
    },
    {
      id: 'transform',
      step: '02',
      name: 'ETL Pipeline & Validation',
      category: 'Data Engineering & Processing',
      icon: Workflow,
      badge: 'Apache Airflow & Pandas',
      tech: ['Apache Airflow', 'Python', 'Data Quality Checks', 'SAS Automation'],
      throughput: '250,000 rec/min',
      latency: '2.4s execution',
      health: '100% SLA',
      status: 'DAG Orchestrated',
      summary: 'Orchestrated DAG workflows with automated data cleaning, deduplication, surrogate key generation, and anomaly detection rules.',
      codeTitle: 'airflow_etl_dag.py',
      codeSnippet: `# Production Apache Airflow Task Orchestration
with DAG(
    dag_id="enterprise_banking_etl_pipeline",
    schedule_interval="@hourly",
    default_args={"retries": 2, "retry_delay": timedelta(minutes=3)}
) as dag:
    validate_staging = PythonOperator(
        task_id="validate_source_integrity",
        python_callable=assert_no_null_keys
    )
    transform_facts = SparkSubmitOperator(
        task_id="aggregate_portfolio_risk",
        application="/dags/spark_jobs/risk_weights.py"
    )
    load_warehouse = PostgresOperator(
        task_id="upsert_star_schema",
        sql="sql/upsert_facts.sql"
    )
    validate_staging >> transform_facts >> load_warehouse`
    },
    {
      id: 'warehouse',
      step: '03',
      name: 'Warehouse & Star Schema',
      category: 'Storage & Semantic Modeling',
      icon: Database,
      badge: 'Optimized PostgreSQL & ClickHouse',
      tech: ['PostgreSQL', 'Star Schema', 'Partition Pruning', 'Dimensional Modeling'],
      throughput: '< 45ms lookup',
      latency: '37x Speedup',
      health: '99.99% Uptime',
      status: 'Partitioned & Indexed',
      summary: 'High-performance star-schema data warehouse with partitioned fact tables, bitmap indexes, and fast analytical read layers.',
      codeTitle: 'schema_fact_portfolio.sql',
      codeSnippet: `-- Optimized Fact Table with Composite Partition Pruning
CREATE TABLE dw.fact_banking_portfolio (
    record_id BIGSERIAL,
    reporting_date DATE NOT NULL,
    portfolio_id VARCHAR(64) NOT NULL,
    risk_tier VARCHAR(16) NOT NULL,
    total_exposure NUMERIC(18, 2),
    account_count INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
) PARTITION BY RANGE (reporting_date);

CREATE INDEX idx_portfolio_risk_tier 
ON dw.fact_banking_portfolio (reporting_date, risk_tier)
INCLUDE (total_exposure);`
    },
    {
      id: 'bi',
      step: '04',
      name: 'BI & Executive Dashboards',
      category: 'Analytics & Decision Systems',
      icon: BarChart3,
      badge: 'Power BI & Tableau',
      tech: ['Power BI', 'Tableau', 'DAX Measures', 'Semantic Data Models'],
      throughput: 'Real-time KPIs',
      latency: '< 200ms render',
      health: '100% Sync',
      status: 'Executive Ready',
      summary: 'Executive-grade KPI visualizations, risk matrices, cohort retention tables, and self-serve drilldown dashboards for business stakeholders.',
      codeTitle: 'portfolio_kpi_model.dax',
      codeSnippet: `// Executive Portfolio Yield & Risk Weight DAX Measure
Portfolio_Risk_Adjusted_Yield = 
VAR TotalExposure = CALCULATE(SUM(dw_fact_portfolio[total_exposure]))
VAR LossProvision = CALCULATE(SUM(dw_dim_risk[loss_reserve_amt]))
VAR NetYield = CALCULATE(SUM(dw_fact_portfolio[interest_income])) - LossProvision
RETURN
    DIVIDE(
        NetYield, 
        TotalExposure, 
        0
    )`
    },
    {
      id: 'app',
      step: '05',
      name: 'Client Web Apps & APIs',
      category: 'Full-Stack Delivery & Client Solutions',
      icon: Globe,
      badge: 'React, Vite & FastAPI',
      tech: ['React / Vite', 'REST APIs', 'Modern UI/UX', 'Cloud Deployment'],
      throughput: 'Edge Distributed',
      latency: '< 90ms Edge TTFB',
      health: '100% Responsive',
      status: 'Production Live',
      summary: 'Modern, high-performance web applications and internal client portals built with intuitive UI/UX, responsive layouts, and secure API endpoints.',
      codeTitle: 'client_analytics_service.ts',
      codeSnippet: `// High-Performance Client Analytics Hook
export const useExecutiveAnalytics = (timeframe: string) => {
  return useQuery({
    queryKey: ['executive-metrics', timeframe],
    queryFn: async () => {
      const response = await apiClient.get('/api/v1/metrics/executive-summary', {
        params: { range: timeframe, format: 'compressed' }
      });
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minute cached sync
    refetchOnWindowFocus: false
  });
};`
    }
  ];

  // Auto-advance through pipeline when running
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
      setActiveRecordCount((prev) => prev + Math.floor(Math.random() * 450 + 120));
    }, 4500);
    return () => clearInterval(interval);
  }, [isRunning, stages.length]);

  const handleCopy = () => {
    navigator.clipboard.writeText(stages[activeStage].codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <div className="card pipeline-architecture-card">
      {/* Header */}
      <div className="pipeline-header">
        <div>
          <div className="pipeline-tag-wrapper">
            <span className="badge category-badge">
              <Cpu size={13} />
              <span>Full Lifecycle Architecture</span>
            </span>
            <span className="live-indicator">
              <span className={`live-dot ${isRunning ? 'pulse' : 'paused'}`}></span>
              <span>{isRunning ? 'Interactive Pipeline Live' : 'Simulation Paused'}</span>
            </span>
          </div>

          <h3 className="pipeline-title">End-to-End Data & BI Architecture</h3>
          <p className="pipeline-sub">
            Interactive multi-tier workflow showcasing my end-to-end engineering lifecycle — from raw streaming ingestion and Airflow ETL to dimensional warehousing, executive BI, and client web applications.
          </p>
        </div>

        {/* Play / Pause Toggle Controls */}
        <div className="pipeline-controls">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="control-btn"
            title={isRunning ? 'Pause automatic stage progression' : 'Play automatic stage progression'}
          >
            {isRunning ? <Pause size={14} /> : <Play size={14} />}
            <span>{isRunning ? 'Pause' : 'Auto Play'}</span>
          </button>
          <button
            onClick={() => {
              setActiveStage(0);
              setIsRunning(true);
            }}
            className="control-btn"
            title="Reset to Stage 01"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Stepper Pipeline Navigation Bar */}
      <div className="pipeline-stepper-track">
        {stages.map((stage, idx) => {
          const StepIcon = stage.icon;
          const isActive = activeStage === idx;
          const isPassed = activeStage > idx;

          return (
            <React.Fragment key={stage.id}>
              <button
                onClick={() => {
                  setActiveStage(idx);
                  setIsRunning(false);
                }}
                className={`stepper-node ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
              >
                <div className="node-icon-box">
                  <StepIcon size={16} />
                  <span className="node-step mono">{stage.step}</span>
                </div>
                <div className="node-text">
                  <span className="node-name">{stage.name}</span>
                  <span className="node-status-text mono">{stage.status}</span>
                </div>
                {isActive && <div className="node-active-indicator" />}
              </button>
              {idx < stages.length - 1 && (
                <div className={`stepper-connector ${isPassed || isActive ? 'active' : ''}`}>
                  <div className="connector-arrow">
                    <ArrowRight size={14} />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Detail Showcase Area */}
      <div className="pipeline-details-grid">
        {/* Left Specification Column */}
        <div className="pipeline-info-col">
          <div className="stage-meta-header">
            <div className="stage-icon-hero">
              <CurrentIcon size={22} className="stage-icon-svg" />
            </div>
            <div>
              <span className="badge category-pill mono">STAGE {current.step} OF 05</span>
              <h4 className="stage-title">{current.name}</h4>
              <span className="stage-category-label">{current.category}</span>
            </div>
          </div>

          <p className="stage-summary-text">{current.summary}</p>

          {/* Tech Stack Chips */}
          <div className="tech-stack-row">
            <span className="tech-row-lbl">Core Toolset:</span>
            <div className="tech-chips-list">
              {current.tech.map((t, idx) => (
                <span key={idx} className="badge tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Live Metrics Grid */}
          <div className="stage-metrics-grid">
            <div className="metric-cell">
              <span className="metric-lbl">Throughput / Speed</span>
              <span className="metric-val mono highlight-emerald">{current.throughput}</span>
            </div>
            <div className="metric-cell">
              <span className="metric-lbl">Processing Latency</span>
              <span className="metric-val mono">{current.latency}</span>
            </div>
            <div className="metric-cell">
              <span className="metric-lbl">Data Health / SLA</span>
              <span className="metric-val mono highlight-cyan">{current.health}</span>
            </div>
            <div className="metric-cell">
              <span className="metric-lbl">Simulated Stream</span>
              <span className="metric-val mono">{activeRecordCount.toLocaleString()} events</span>
            </div>
          </div>
        </div>

        {/* Right Code / Schema View Column */}
        <div className="pipeline-code-col">
          <div className="code-header">
            <div className="code-title-left">
              <Code2 size={15} />
              <span className="mono">{current.codeTitle}</span>
            </div>
            <button onClick={handleCopy} className="copy-code-btn" title="Copy code snippet">
              {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="code-body mono">{current.codeSnippet}</pre>
        </div>
      </div>

      <style>{`
        .pipeline-architecture-card {
          margin-top: 3.5rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-hover);
          border-radius: 14px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .pipeline-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .pipeline-tag-wrapper {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.6rem;
          flex-wrap: wrap;
        }

        .category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(16, 185, 129, 0.1);
          color: var(--badge-green-text);
          border: 1px solid var(--badge-green-border);
        }

        .live-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.775rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        .live-dot.pulse {
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 1.8s infinite;
        }

        .live-dot.paused {
          background: #71717a;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .pipeline-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          letter-spacing: -0.02em;
        }

        .pipeline-sub {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 820px;
        }

        .pipeline-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .control-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .control-btn:hover {
          background: var(--bg-surface);
          color: var(--text-primary);
          border-color: var(--border-hover);
          transform: translateY(-1px);
        }

        /* Stepper Track */
        .pipeline-stepper-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.75rem;
          margin-bottom: 2rem;
          overflow-x: auto;
          gap: 0.5rem;
        }

        .stepper-node {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.9rem;
          border-radius: 9px;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          flex: 1;
          min-width: 150px;
          position: relative;
          text-align: left;
        }

        .stepper-node:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
        }

        .stepper-node.active {
          background: var(--bg-surface);
          border-color: rgba(16, 185, 129, 0.45);
          color: var(--text-primary);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), 0 0 12px rgba(16, 185, 129, 0.15);
        }

        .stepper-node.passed .node-icon-box {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.3);
        }

        .node-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          flex-shrink: 0;
          position: relative;
          color: var(--text-muted);
          transition: all 0.25s ease;
        }

        .stepper-node.active .node-icon-box {
          background: rgba(16, 185, 129, 0.18);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.5);
          transform: scale(1.08);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
        }

        .node-step {
          position: absolute;
          top: -4px;
          right: -4px;
          font-size: 0.6rem;
          font-weight: 800;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 0 3px;
        }

        .node-text {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .node-name {
          font-size: 0.825rem;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .node-status-text {
          font-size: 0.7rem;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .stepper-node.active .node-status-text {
          color: #10b981;
        }

        .stepper-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          opacity: 0.4;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .stepper-connector.active {
          color: #10b981;
          opacity: 0.9;
        }

        /* Detail Grid */
        .pipeline-details-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 1.75rem;
          align-items: stretch;
        }

        .pipeline-info-col {
          display: flex;
          flex-direction: column;
        }

        .stage-meta-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .stage-icon-hero {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #10b981;
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.2);
          flex-shrink: 0;
        }

        .category-pill {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .stage-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .stage-category-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .stage-summary-text {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .tech-stack-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .tech-row-lbl {
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .tech-chips-list {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .tech-badge {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          font-size: 0.75rem;
          padding: 0.25rem 0.55rem;
        }

        /* Metrics grid */
        .stage-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-top: auto;
        }

        .metric-cell {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 9px;
          padding: 0.75rem 0.9rem;
          display: flex;
          flex-direction: column;
        }

        .metric-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .metric-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .highlight-emerald {
          color: #10b981;
        }

        .highlight-cyan {
          color: #06b6d4;
        }

        /* Code panel */
        .pipeline-code-col {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem 1rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
        }

        .code-title-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .copy-code-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          transition: color var(--transition-fast);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
        }

        .copy-code-btn:hover {
          color: var(--text-primary);
          background: var(--bg-elevated);
        }

        .copied-icon {
          color: #10b981;
        }

        .code-body {
          padding: 1.15rem;
          font-size: 0.785rem;
          line-height: 1.55;
          color: var(--text-primary);
          margin: 0;
          overflow-x: auto;
          white-space: pre-wrap;
          flex-grow: 1;
        }

        @media (max-width: 900px) {
          .pipeline-details-grid {
            grid-template-columns: 1fr;
          }
          .pipeline-stepper-track {
            flex-direction: column;
            align-items: stretch;
          }
          .stepper-connector {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
