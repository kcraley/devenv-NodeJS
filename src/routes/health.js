import Router from 'express';
const router = new Router();

router.get('/health', (req, res) => {
  res.set('Content-type', 'text/plain');
  const status = req.app.get('HEALTH_STATUS');
  return res.status(200).send(status);
});

export default router;
