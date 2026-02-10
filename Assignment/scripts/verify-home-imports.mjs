import fs from "node:fs"
import path from "node:path"

const pagePath = path.join(process.cwd(), "app", "page.tsx")
const source = fs.readFileSync(pagePath, "utf8")

const lucideImports = source.match(/from\s+["']lucide-react["']/g) ?? []
if (lucideImports.length !== 1) {
  console.error(`Expected exactly 1 lucide-react import in app/page.tsx, found ${lucideImports.length}.`)
  process.exit(1)
}

const importBlockMatch = source.match(/import\s*\{([\s\S]*?)\}\s*from\s*["']lucide-react["']/)
if (!importBlockMatch) {
  console.error("Could not parse lucide-react import block in app/page.tsx")
  process.exit(1)
}

const names = importBlockMatch[1]
  .split(",")
  .map((name) => name.trim())
  .filter(Boolean)

const seen = new Set()
for (const name of names) {
  if (seen.has(name)) {
    console.error(`Duplicate icon '${name}' detected in lucide-react import block.`)
    process.exit(1)
  }
  seen.add(name)
}

console.log("Import check passed: app/page.tsx has a single lucide-react import with unique symbols.")
