export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/health' && request.method === 'GET') {
			return Response.json({
				status: 'healthy',
				service: 'ai-token-proxy',
			});
		}

		if (url.pathname === '/' && request.method === 'GET') {
			return Response.json({
				name: 'AI Token Usage Proxy',
				version: '1.0.0',
				status: 'running',
				endpoints: {
					health: '/health',
				},
			});
		}

		return Response.json({ error: 'Not Found' }, { status: 404 });
	},
} satisfies ExportedHandler<Env>;
