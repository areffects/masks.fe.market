import { NextApiRequest, NextApiResponse } from 'next'

/**
 * /api/v1/_health
 * [GET]
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const health = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	res.send('OK')
}

export default health
