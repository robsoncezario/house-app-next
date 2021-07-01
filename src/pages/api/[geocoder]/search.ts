import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import Geocoder from "../../../services/Geocoder/service";
import validate from '../../../middlewares/validation';
import schema from '../../../schemas/geocoder/search';

export default validate({ body: schema }, async(req: NextApiRequest, res: NextApiResponse) => {
    const {method, socket: {remoteAddress}, body: {data}} = req;

    switch(method) {
        case 'POST': 
            const result = await Geocoder.search(data.query, {
                ip: remoteAddress,
                language: data.language
            });

            return res.status(200).json({places: result});
        default: 
            res.status(400).send({message: 'Request HTTP method incorrect.'})
            break;
    } 
});