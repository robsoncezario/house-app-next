export interface HitProps {
  name?: string;
  city?: string;
  administrative?: string;
  country?: string;
  suburb?: string;
  county?: string;
  postcode?: string;
  location: {
    latitude?: number;
    longitude?: number;
  }
}
