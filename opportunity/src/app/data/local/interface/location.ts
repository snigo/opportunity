import { PostalAddress } from './postalAddress';
import { GeoPin } from './geoPin';

export interface Location {
  address: PostalAddress;
  geoPin?: GeoPin;
  featuredPhoto?: string;
  title?: string;
  description?: string;
}