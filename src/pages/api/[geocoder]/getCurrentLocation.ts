import {
  NextApiRequest,
  NextApiResponse
} from 'next'
import Geocoder from '../../../services/Geocoder/service'
import validate from '../../../middlewares/validation'
import schema from '../../../schemas/geocoder/getCurrentLocation'

export default validate({ body: schema }, async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers: { 'x-real-ip': ip }, body: { data } } = req

  if (method !== 'POST') {
    res.status(400).send({ message: 'Request HTTP method incorrect.' })
    return
  } else if (ip === undefined) {
    res.status(200).json({ location: null })
    return
  }

  const result = await Geocoder.getCurrentLocationFromIp(
    ip as string,
    data.language
  )

  res.status(200).json({ location: result })
})
