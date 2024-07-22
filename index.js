const logger = require('pino')()
const express = require('express')
const app = express()


app.all('*', (req, res) => {
	logger.info({
		headers: req.headers,
		body: req.body,
		method: req.method,
		path: req.path,
		query: req.query,
	}, 'Request received');

	res.status(200).send('Success');
});