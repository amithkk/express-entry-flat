import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.14/mod.ts' 

const filename = Deno.args[0] 
const json = await readJSON(filename)
const rounds = json["rounds"]
const newFilename = `rounds.json` 
await writeJSON(newFilename, rounds) 
console.log("Wrote a post processed file")
await removeFile(filename)