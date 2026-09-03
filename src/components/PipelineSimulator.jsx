import React, { useState, useRef, useEffect } from 'react';
import { Database, Play, CheckCircle2, RefreshCw, FileCode, Layers, BarChart3, Terminal, Copy, Check } from 'lucide-react';

export function PipelineSimulator() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [recordsProcessed, setRecordsProcessed] = useState(100000);
  const [logs, setLogs] = useState([
    '[INIT] Airflow DAG: customer_campaign_etl_v2 initialized.',
    '[INFO] Ingested 100,000 raw transaction logs from S3 bucket.',
    '[VALIDATE] 99.94% data schema validation passed.',
    '[STAGE] PostgreSQL staging schema loaded in 42ms.'
  ]);
  const logContainerRef = useRef(null);

  const pipelineSteps = [
    {
      id: 'ingest',
      name: '1. Multi-Source Ingestion',
      icon: Layers,
      tech: 'Python / REST APIs',
      latency: '110 ms',
      detail: 'Extracts customer demographics, marketing campaign metrics, and transactional event streams.',
      code: `def ingest_raw_data(source_uri):\n    df_customer = pd.read_csv(f"{source_uri}/customers.csv")\n    df_transactions = pd.read_json(f"{source_uri}/transactions.json")\n    return df_customer, df_transactions`
    },
    {
      id: 'validate',
      name: '2. Schema & Quality Validation',
      icon: CheckCircle2,
      tech: 'Pandas / Data Rules',
      latency: '18 ms',
      detail: 'Enforces strict data type casting, null check verification, and deduplication of transaction IDs.',
      code: `def validate_schema(df):\n    assert df['customer_id'].notnull().all(), "Null Customer IDs detected!"\n    df = df.drop_duplicates(subset=['transaction_id'])\n    return df`
    },
    {
      id: 'transform',
      name: '3. Airflow DAG Transformation',
      icon: RefreshCw,
      tech: 'Apache Airflow / SQL',
      latency: '320 ms',
      detail: 'Transforms raw streams into dimensional star-schema models (Fact_Transactions, Dim_Customer).',
      code: `@task()\ndef execute_star_schema_transform():\n    db.execute("""\n        INSERT INTO dw.fact_campaign_conversions\n        SELECT c.id, sum(t.amount) FROM staging_transactions t\n        JOIN staging_customers c ON t.cust_id = c.id GROUP BY 1;\n    """)`
    },
    {
      id: 'load',
      name: '4. Data Warehouse Load',
      icon: Database,
      tech: 'PostgreSQL / Docker',
      latency: '45 ms',
      detail: 'Bulk loads partitioned records into PostgreSQL warehouse with indexed query performance.',
      code: `CREATE INDEX CONCURRENTLY idx_fact_campaign_date \nON dw.fact_campaign_conversions (campaign_id, transaction_timestamp DESC);`
    },
    {
      id: 'viz',
      name: '5. BI Analytics Dashboards',
      icon: BarChart3,
      tech: 'Power BI / Tableau / SAS',
      latency: '12 ms',
      detail: 'Exposes automated semantic views for executive portfolio risk and campaign conversion reporting.',
      code: `-- Semantic Layer Query for Power BI / Tableau\nSELECT campaign_name, ROI_percentage, risk_score \nFROM dw.v_executive_campaign_kpis \nWHERE report_month = CURRENT_MONTH();`
    }
  ];

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setLogs(['[RUN] Starting complete ETL pipeline simulation...']);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < pipelineSteps.length) {
        setActiveStep(current);
        const stepName = pipelineSteps[current].name;
        const count = 100000 + Math.floor(Math.random() * 5000);
        setRecordsProcessed(count);
        setLogs((prev) => [
          ...prev,
          `[SUCCESS] Step ${current + 1} completed: ${stepName} (${count.toLocaleString()} rows processed).`
        ]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setLogs((prev) => [
          ...prev,
          '[FINISH] ETL Pipeline finished with 0 errors. PostgreSQL Data warehouse synced!'
        ]);
      }
    }, 900);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pipelineSteps[activeStep].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const currentStepInfo = pipelineSteps[activeStep];
  const StepIcon = currentStepInfo.icon;

  return (
    <div className="card pipeline-card">
      <div className="pipeline-header">
        <div>
          <span className="badge category-badge">Interactive Data Engineering Demo</span>
          <h3 className="pipeline-title">ETL Pipeline Architecture Simulator</h3>
          <p className="pipeline-sub">
            Simulate how Jaishriram's Airflow & PostgreSQL pipeline ingests, validates, and loads enterprise data.
          </p>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="btn btn-primary btn-sm simulate-btn"
        >
          {isRunning ? <RefreshCw size={15} className="spin" /> : <Play size={15} />}
          <span>{isRunning ? 'Executing Pipeline...' : 'Run Simulation'}</span>
        </button>
      </div>

      {/* Stepper Grid */}
      <div className="pipeline-stepper">
        {pipelineSteps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;
          return (
            <button
              key={step.id}
              onClick={() => !isRunning && setActiveStep(idx)}
              disabled={isRunning}
              className={`step-node ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
            >
              <div className="step-number">{idx + 1}</div>
              <Icon size={16} className="step-icon" />
              <span className="step-label">{step.name.split('. ')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase */}
      <div className="pipeline-detail-grid">
        <div className="pipeline-info-panel">
          <div className="step-title-row">
            <StepIcon size={20} className="step-active-icon" />
            <h4>{currentStepInfo.name}</h4>
          </div>
          <span className="badge tech-badge">{currentStepInfo.tech}</span>
          <p className="step-desc">{currentStepInfo.detail}</p>

          <div className="metrics-badge-row">
            <div className="metric-item">
              <span className="metric-lbl">Status</span>
              <span className="metric-val">{isRunning && activeStep === pipelineSteps.indexOf(currentStepInfo) ? 'Processing...' : 'Active / Ready'}</span>
            </div>
            <div className="metric-item">
              <span className="metric-lbl">Batch Rows</span>
              <span className="metric-val mono">{recordsProcessed.toLocaleString()}</span>
            </div>
            <div className="metric-item">
              <span className="metric-lbl">Latency</span>
              <span className="metric-val mono">{currentStepInfo.latency}</span>
            </div>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="pipeline-code-panel">
          <div className="code-header">
            <div className="code-header-title">
              <FileCode size={14} />
              <span className="mono">pipeline_dag_definition.py</span>
            </div>
            <button onClick={handleCopyCode} className="copy-code-btn" title="Copy code snippet">
              {copiedCode ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="code-block mono">{currentStepInfo.code}</pre>
        </div>
      </div>

      {/* Execution Console Logs */}
      <div className="pipeline-logs-panel">
        <div className="logs-header">
          <Terminal size={14} />
          <span className="mono">Airflow Task Execution Console Log</span>
        </div>
        <div className="logs-body mono" ref={logContainerRef}>
          {logs.map((log, i) => (
            <div key={i} className={`log-line ${log.startsWith('[SUCCESS]') ? 'success' : log.startsWith('[FINISH]') ? 'finish' : log.startsWith('[RUN]') ? 'run' : ''}`}>
              {log}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pipeline-card {
          margin-top: 2rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-hover);
        }

        .pipeline-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .pipeline-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-top: 0.35rem;
          margin-bottom: 0.35rem;
        }

        .pipeline-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .simulate-btn {
          margin-top: 0.5rem;
        }

        .pipeline-stepper {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .step-node {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.75rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .step-node:hover:not(:disabled) {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        .step-node.active {
          border-color: var(--badge-green-text);
          background: var(--bg-surface);
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
        }

        .step-node.passed {
          border-color: var(--badge-green-border);
          color: var(--text-primary);
        }

        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--bg-primary);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .step-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pipeline-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .pipeline-info-panel {
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .step-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .step-title-row h4 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .tech-badge {
          align-self: flex-start;
          margin-bottom: 0.75rem;
        }

        .step-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .metrics-badge-row {
          display: flex;
          gap: 1rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.6rem 0.85rem;
          border-radius: 8px;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-lbl {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .metric-val {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pipeline-code-panel {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .code-header {
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

        .code-block {
          padding: 1rem;
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--text-primary);
          overflow-x: auto;
          margin: 0;
          white-space: pre-wrap;
        }

        .pipeline-logs-panel {
          background: #09090b;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
        }

        .logs-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background: #111115;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.775rem;
          color: #888891;
        }

        .logs-body {
          padding: 0.6rem 0.85rem;
          font-size: 0.775rem;
          color: #a1a1aa;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          max-height: 140px;
          overflow-y: auto;
        }

        .log-line.run {
          color: #3b82f6;
        }
        .log-line.success {
          color: #10b981;
        }
        .log-line.finish {
          color: #34d399;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .pipeline-stepper {
            grid-template-columns: repeat(2, 1fr);
          }
          .pipeline-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .pipeline-stepper {
            grid-template-columns: 1fr;
          }
          .metrics-badge-row {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}


