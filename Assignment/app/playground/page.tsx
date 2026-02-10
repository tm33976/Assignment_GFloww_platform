"use client"

import { useMemo, useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RefreshCcw, WandSparkles } from "lucide-react"

type PlaygroundTemplate = {
  id: string
  label: string
  details: string
  code: string
}

const playgroundTemplates: PlaygroundTemplate[] = [
  {
    id: "starter",
    label: "Starter Card Page",
    details: "Simple starter page with Tailwind + Bootstrap buttons.",
    code: `function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-body p-5">
                <span className="badge text-bg-success mb-3">Tailwind + Bootstrap</span>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">React Playground</h1>
                <p className="text-slate-500 mb-4">
                  Paste your React page here and preview it with Tailwind CSS + Bootstrap styles.
                </p>

                <button className="btn btn-primary px-4 py-2 rounded-pill">Bootstrap Button</button>
                <button className="ml-3 px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
                  Tailwind Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    id: "saas",
    label: "SaaS Landing Page",
    details: "A detailed hero, feature cards, pricing and CTA section.",
    code: `function App() {
  const plans = [
    { name: "Starter", price: "$19", users: "Up to 3 users" },
    { name: "Growth", price: "$49", users: "Up to 20 users" },
    { name: "Enterprise", price: "$99", users: "Unlimited users" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="container py-4 d-flex justify-content-between align-items-center">
        <h3 className="m-0 fw-bold text-teal-300">FlowPilot</h3>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-light btn-sm">Login</button>
          <button className="btn btn-info btn-sm text-white">Start Free</button>
        </div>
      </nav>

      <header className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <span className="badge text-bg-info mb-3">AI Workflow Suite</span>
            <h1 className="display-5 fw-bold leading-tight">Build, automate and scale your business workflows.</h1>
            <p className="text-slate-300 fs-5 mt-3">
              Combine no-code automations, analytics dashboards and team collaboration in one place.
            </p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-info btn-lg text-white">Get Started</button>
              <button className="btn btn-outline-light btn-lg">Book Demo</button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="rounded-4 p-4 bg-white/10 border border-white/25">
              <p className="text-uppercase text-info fw-semibold mb-2">Live Metrics</p>
              <h3 className="fw-bold mb-3">92.4% Automation Success</h3>
              <p className="text-slate-200">Save 28 hours/week with pre-built templates and one-click deployments.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container py-5">
        <div className="row g-4">
          {["Drag & Drop Builder", "Real-time Analytics", "Team Permissions"].map((item) => (
            <div className="col-md-4" key={item}>
              <div className="h-100 rounded-4 bg-white text-slate-900 p-4 shadow">
                <h5 className="fw-bold">{item}</h5>
                <p className="mb-0 text-slate-600">Launch enterprise-grade workflow pages in minutes.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-5">
        <h2 className="fw-bold mb-4">Pricing</h2>
        <div className="row g-4">
          {plans.map((plan) => (
            <div className="col-md-4" key={plan.name}>
              <div className="rounded-4 p-4 bg-slate-900 border border-slate-700 h-100">
                <h5 className="fw-bold">{plan.name}</h5>
                <p className="display-6 fw-bold my-3">{plan.price}</p>
                <p className="text-slate-300">{plan.users}</p>
                <button className="btn btn-info w-100 text-white">Choose Plan</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}`,
  },
  {
    id: "dashboard",
    label: "Admin Dashboard Page",
    details: "Detailed admin layout with KPI cards and activity table.",
    code: `function App() {
  const stats = [
    { label: "Revenue", value: "$82,450", trend: "+18%" },
    { label: "Orders", value: "1,284", trend: "+6%" },
    { label: "Users", value: "9,412", trend: "+12%" },
    { label: "Refunds", value: "24", trend: "-2%" },
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h2 mb-1">Admin Dashboard</h1>
            <p className="text-muted m-0">Track performance and team activity in one view.</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">Export</button>
            <button className="btn btn-success">Create Report</button>
          </div>
        </div>

        <div className="row g-3 mb-4">
          {stats.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.label}>
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <p className="text-muted mb-1">{item.label}</p>
                  <h3 className="fw-bold mb-0">{item.value}</h3>
                  <span className="badge text-bg-light text-success mt-2">{item.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Recent Orders</h5>
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["#1001", "Ayesha Khan", "Completed", "$420"],
                        ["#1002", "Ravi Shah", "Pending", "$180"],
                        ["#1003", "Olivia Park", "Completed", "$250"],
                      ].map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>
                            <span className={row[2] === "Completed" ? "badge text-bg-success" : "badge text-bg-warning"}>
                              {row[2]}
                            </span>
                          </td>
                          <td>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold">Team Activity</h5>
                <ul className="list-group list-group-flush mt-3">
                  {[
                    "Priya updated pricing settings",
                    "Daniel approved 3 refund requests",
                    "Mina added 2 new products",
                  ].map((item) => (
                    <li className="list-group-item px-0" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,
  },
]

const getPreviewDocument = (code: string) => {
  const serializedCode = JSON.stringify(code).replace(/<\/script>/gi, "<\\/script>")

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GigFloww Playground Preview</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { margin: 0; font-family: Inter, system-ui, sans-serif; }
      #error {
        margin: 12px;
        padding: 12px;
        border-radius: 8px;
        background: #fef2f2;
        color: #991b1b;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <div id="error" style="display: none"></div>

    <script>
      try {
        const userCode = ${serializedCode}
        const transpiled = Babel.transform(userCode, { presets: ["react"] }).code
        const mountNode = document.getElementById("root")

        const executeUserCode = new Function(
          "React",
          "ReactDOM",
          transpiled +
            "\\nreturn { app: typeof App !== \"undefined\" ? App : null, globalApp: typeof globalThis !== \"undefined\" ? globalThis.App : null };"
        )

        const executed = executeUserCode(React, ReactDOM)
        const AppComponent = executed.app || executed.globalApp

        if (AppComponent) {
          ReactDOM.createRoot(mountNode).render(React.createElement(AppComponent))
        } else {
          ReactDOM.createRoot(mountNode).render(
            React.createElement(
              "div",
              { style: { padding: "20px" } },
              React.createElement(
                "h2",
                { style: { fontWeight: "bold", marginBottom: "8px" } },
                "No App component found."
              ),
              React.createElement(
                "p",
                null,
                "Please define function App() in your pasted code."
              )
            )
          )
        }
      } catch (error) {
        const errorBox = document.getElementById("error")
        if (errorBox) {
          errorBox.style.display = "block"
          errorBox.textContent = error?.stack || error?.message || String(error)
        }
      }
    </script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`
}

export default function PlaygroundPage() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(playgroundTemplates[0].id)
  const [editorCode, setEditorCode] = useState(playgroundTemplates[0].code)
  const [activeCode, setActiveCode] = useState(playgroundTemplates[0].code)

  const selectedTemplate =
    playgroundTemplates.find((template) => template.id === selectedTemplateId) ?? playgroundTemplates[0]

  const previewDocument = useMemo(() => getPreviewDocument(activeCode), [activeCode])

  const loadTemplate = () => {
    setEditorCode(selectedTemplate.code)
    setActiveCode(selectedTemplate.code)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-6">
        <section className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm">
                <WandSparkles className="h-4 w-4" /> React UI Playground
              </p>
              <h1 className="mt-3 text-3xl font-bold">Build detailed app pages and preview instantly</h1>
              <p className="mt-2 text-emerald-50">
                Choose a ready template (SaaS landing, dashboard, starter) or paste your own page code.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <select
                value={selectedTemplateId}
                onChange={(event) => setSelectedTemplateId(event.target.value)}
                className="rounded-md border border-white/40 bg-white px-3 py-2 text-slate-900"
              >
                {playgroundTemplates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.label}
                  </option>
                ))}
              </select>
              <Button
                variant="secondary"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
                onClick={loadTemplate}
              >
                <RefreshCcw className="mr-2 h-4 w-4" /> Load page
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800" onClick={() => setActiveCode(editorCode)}>
                Run Preview
              </Button>
            </div>
          </div>
          <p className="mt-3 text-sm text-emerald-100">Template details: {selectedTemplate.details}</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">React Code</h2>
            <Textarea
              value={editorCode}
              onChange={(event) => setEditorCode(event.target.value)}
              className="min-h-[70vh] font-mono text-sm"
              spellCheck={false}
            />
          </article>

          <article className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Live Preview</h2>
            <iframe
              title="React Playground Preview"
              srcDoc={previewDocument}
              sandbox="allow-scripts allow-modals"
              className="h-[70vh] w-full rounded-xl border border-slate-200 bg-white"
            />
          </article>
        </section>
      </main>
    </div>
  )
}
