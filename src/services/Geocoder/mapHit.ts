
import { HitProps } from './types';
import getBestPostcode from './getBestPostcode';
import getBestHighlightedForm from './getBestHighlightedForm';

export default function mapHit(hit: any): HitProps {
    const name = hit.locale_names[0];
    const country = hit.country;
    const administrative =
      hit.administrative && hit.administrative[0] !== name
        ? hit.administrative[0]
        : undefined;
    const city = hit.city && hit.city[0] !== name ? hit.city[0] : undefined;
    const suburb =
      hit.suburb && hit.suburb[0] !== name ? hit.suburb[0] : undefined;

    const county =
      hit.county && hit.county[0] !== name ? hit.county[0] : undefined;

    const { postcode, highlightedPostcode } =
      hit.postcode && hit.postcode.length
        ? getBestPostcode(hit.postcode, hit._highlightResult.postcode)
        : { postcode: undefined, highlightedPostcode: undefined };

    return {
        name: getBestHighlightedForm(hit._highlightResult.locale_names)?.replace('<em>', '')?.replace('</em>', ''),
        city: city
          ? getBestHighlightedForm(hit._highlightResult.city)?.replace('<em>', '')?.replace('</em>', '')
          : undefined,
        administrative: administrative
          ? getBestHighlightedForm(hit._highlightResult.administrative)?.replace('<em>', '')?.replace('</em>', '')
          : undefined,
        country: country ? hit._highlightResult?.country?.value?.replace('<em>', '')?.replace('</em>', '') : undefined,
        suburb: suburb
          ? getBestHighlightedForm(hit._highlightResult.suburb)?.replace('<em>', '')?.replace('</em>', '')
          : undefined,
        county: county
          ? getBestHighlightedForm(hit._highlightResult.county)?.replace('<em>', '')?.replace('</em>', '')
          : undefined,
        postcode: highlightedPostcode?.replace('<em>', '')?.replace('</em>', ''),
        location: {
            latitude: hit._geoloc.lat,
            longitude: hit._geoloc.lng,
        }
    }
}