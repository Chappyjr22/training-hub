const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const exts = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md']
const mojibakePatterns = ['Î“', 'Ã‡', 'ï»¿', 'ΓÇ', 'Â']

function walk(dir, files = []) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const full = path.join(dir, dirent.name)
    if (dirent.isDirectory()) {
        if (full.includes('node_modules') || full.includes('.git') || full.includes(path.join('scripts'))) return
      walk(full, files)
    } else {
      if (exts.includes(path.extname(full))) files.push(full)
    }
  })
  return files
}

const files = walk(root)
let problems = []
files.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8')
    for (const p of mojibakePatterns) {
      if (content.includes(p)) {
        // ignore our own script which may contain pattern in comments
        if (path.relative(root, f).startsWith('scripts' + path.sep)) continue
        problems.push({ file: path.relative(root, f), pattern: p })
        break
      }
    }
  } catch (err) {
    // ignore binary etc
  }
})

if (problems.length === 0) {
  console.log('OK: no mojibake-like patterns found in project files')
  process.exit(0)
} else {
  console.log('Found potential encoding issues:')
  problems.forEach(p => console.log(p.file + '  contains pattern: ' + p.pattern))
  console.log('\nTotal files: ' + problems.length)
  process.exit(2)
}
