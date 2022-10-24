const fs = require('fs')
const exec = require('child_process').exec;
let blacklist = ['.git', 'common', 'dist']
fs.readdir(__dirname, { withFileTypes: true }, (err, files) => {
    let dirs = files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name)
    dirs.forEach(dir => {
        if (blacklist.includes(dir)) return;
        exec(["esbuild", `./${dir}/src`, `--outfile=./dist/${dir}.js`, '--target=ES2019', '--minify'].join(" "), (err, stdout, stderr) => {
            process.stdout.write(stderr)
        })

    })
})