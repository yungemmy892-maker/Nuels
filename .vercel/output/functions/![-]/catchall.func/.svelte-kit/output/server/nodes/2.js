

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CsQiFnhM.js","_app/immutable/chunks/qzX8Pj0D.js","_app/immutable/chunks/CfdghhU4.js","_app/immutable/chunks/C8PTQz4I.js"];
export const stylesheets = ["_app/immutable/assets/2.BaftXrVm.css"];
export const fonts = [];
