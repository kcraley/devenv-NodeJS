import Router from 'express';

const router = new Router();

router.get('/health', (req, res) => {
  res.set('Content-type', 'application/json');
  const status = req.app.get('HEALTH_STATUS');
  return res.status(200).send(status);
});

export default router;
