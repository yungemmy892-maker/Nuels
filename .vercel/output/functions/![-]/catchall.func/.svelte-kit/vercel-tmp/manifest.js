export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","profile.jpg","resume.pdf","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CGQDNKsV.js",app:"_app/immutable/entry/app.CVEfwZVH.js",imports:["_app/immutable/entry/start.CGQDNKsV.js","_app/immutable/chunks/ClIm2p38.js","_app/immutable/chunks/qzX8Pj0D.js","_app/immutable/chunks/CJi-AoIC.js","_app/immutable/entry/app.CVEfwZVH.js","_app/immutable/chunks/qzX8Pj0D.js","_app/immutable/chunks/CfdghhU4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
