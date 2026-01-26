#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { execSync } from "child_process"
import { fileURLToPath } from "url"

/* ---------------------------------- */
/* Helpers                            */
/* ---------------------------------- */

function run(command, cwd) {
  execSync(command, {
    cwd,
    stdio: "inherit"
  })
}

/* ---------------------------------- */
/* Banner                             */
/* ---------------------------------- */

console.log(`
⚡ create-lumin-app
──────────────────
`)

/* ---------------------------------- */
/* Setup paths                        */
/* ---------------------------------- */

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectName = process.argv[2]

if (!projectName) {
  console.error("❌ Please provide a project name")
  console.log("Usage: create-lumin-app my-app")
  process.exit(1)
}

const targetDir = path.join(process.cwd(), projectName)
const templateDir = path.join(__dirname, "../template")

if (fs.existsSync(targetDir)) {
  console.error("❌ Folder already exists:", projectName)
  process.exit(1)
}

/* ---------------------------------- */
/* Create project                     */
/* ---------------------------------- */

console.log("📁 Creating project folder...")
fs.mkdirSync(targetDir)

/* ---------------------------------- */
/* Copy template                      */
/* ---------------------------------- */

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

console.log("📄 Copying template files...")
copyDir(templateDir, targetDir)

/* ---------------------------------- */
/* Update package.json                */
/* ---------------------------------- */

const pkgPath = path.join(targetDir, "package.json")
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"))
pkg.name = projectName
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

/* ---------------------------------- */
/* Install & git init                 */
/* ---------------------------------- */

console.log("📦 Installing dependencies...")
run("npm install", targetDir)

console.log("🔧 Initializing git repository...")
run("git init", targetDir)

/* ---------------------------------- */
/* Done                               */
/* ---------------------------------- */

console.log(`
✨ Lumin app created successfully!

Next steps:
  cd ${projectName}
  npm run dev
`)
