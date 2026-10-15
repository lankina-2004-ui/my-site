import { copyFile, readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { join, relative } from 'node:path'

// GitHub Pages has no SPA rewrites. Keep existing direct project URLs usable.
await copyFile('dist/index.html', 'dist/404.html')

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(path) : [path]
  }))
  return files.flat()
}

// Identify the exact release without changing any page or its appearance.
const assets = {}
for (const file of (await listFiles('dist')).sort()) {
  if (file.endsWith('build-info.json')) continue
  const path = relative('dist', file).replaceAll('\\', '/')
  assets[path] = createHash('sha256').update(await readFile(file)).digest('hex')
}
const fingerprint = createHash('sha256').update(JSON.stringify(assets)).digest('hex')
await writeFile('dist/build-info.json', JSON.stringify({ fingerprint, assets }, null, 2) + '\n')
console.log(`Release fingerprint: ${fingerprint}`)
