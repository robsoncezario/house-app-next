import algoliasearch from 'algoliasearch/lite';
import { shuffle } from '@algolia/client-common';

import mapHit from './mapHit';
import { HitProps } from './types';

export default class Geocoder {
    static placesClient = algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY, {
            hosts: [{ url: 'places-dsn.algolia.net' }].concat(
              shuffle([
                { url: 'places-1.algolia.net' },
                { url: 'places-2.algolia.net' },
                { url: 'places-3.algolia.net' }
              ])
            )
        }
    );

    static search = async (query: string, options: any) : Promise<Array<HitProps>> => {
        const result : any = await Geocoder.placesClient.transporter.read(
        {
            method: 'POST',
            path: '1/places/query',
            data: {
                query: query,
                type: 'address',
                hitsPerPage: options?.rows ?? 5,
                language: options.language ?? 'en',
                aroundLatLngViaIP: options?.ip !== undefined
            },
            cacheable: true
        },
        
        {
            cacheable: true,
            headers: options?.ip !== undefined ? {
                'X-Forwarded-For': options.ip
            } : null
        });

        return result.hits.map((h: any) => mapHit(h))
    }
}