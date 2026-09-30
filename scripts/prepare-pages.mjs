import { readdir, readFile, rm, stat, cp } from 'node:fs/promises';
import { join } from 'node:path';
// Keep source archives intact; omit abandoned iterations from the deployed artifact.
await cp('node_modules/three/examples/jsm/libs/draco/gltf','dist/draco',{recursive:true});
await rm('dist/draco/draco_encoder.js',{force:true});
const retainedModels = new Set(['CityOptimised.glb','EventsBoard.glb','AirshipFinal.glb','SpeakersBoard.glb','carOptimised.glb','AboutUsBoard.glb','ContactUsBoard.glb','train.glb']);
for (const file of await readdir('dist/models')) if(!retainedModels.has(file)) await rm(join('dist/models',file));
await rm('dist/environments/sunset1QuarterResOrange.hdr',{force:true});
await rm('dist/textures',{recursive:true,force:true});
async function walk(dir) { const files=[]; for(const name of await readdir(dir)){const path=join(dir,name);const info=await stat(path);if(info.isDirectory())files.push(...await walk(path));else files.push([path,info.size]);}return files; }
const files=await walk('dist');
const oversized=files.filter(([,size])=>size>25*1024*1024);
if(oversized.length) throw new Error(`Cloudflare Pages asset exceeds 25 MiB: ${JSON.stringify(oversized)}`);
if(files.length>20000)throw new Error('Cloudflare Pages free-plan file limit exceeded');
// Pages provides native SPA fallback when no top-level 404.html exists.
if(files.some(([path])=>path==='dist/404.html'))throw new Error('404.html would disable the Pages SPA fallback');
await readFile('dist/index.html','utf8');
console.log(`Pages artifact: ${files.length} files, ${(files.reduce((total,[,size])=>total+size,0)/1e6).toFixed(2)} MB; asset limit verified.`);
