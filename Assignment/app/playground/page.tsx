"use client"

import { useMemo, useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RefreshCcw, WandSparkles } from "lucide-react"

const starterCode = `function App() {
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
}`

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
  const [editorCode, setEditorCode] = useState(starterCode)
  const [activeCode, setActiveCode] = useState(starterCode)

  const previewDocument = useMemo(() => getPreviewDocument(activeCode), [activeCode])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-6">
        <section className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm">
                <WandSparkles className="h-4 w-4" /> React UI Playground
              </p>
              <h1 className="mt-3 text-3xl font-bold">Paste React page and preview full design instantly</h1>
              <p className="mt-2 text-emerald-50">
                Supports JSX with Tailwind CSS and Bootstrap included in the live preview.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
                onClick={() => setEditorCode(starterCode)}
              >
                <RefreshCcw className="mr-2 h-4 w-4" /> Reset template
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800" onClick={() => setActiveCode(editorCode)}>
                Run Preview
              </Button>
            </div>
          </div>
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
