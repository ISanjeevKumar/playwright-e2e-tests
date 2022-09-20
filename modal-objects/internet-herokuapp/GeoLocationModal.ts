import { faker } from "@faker-js/faker";
export class GeoLocation {
  longitude: string;
  latitude: string;
  constructor(data: any) {
    this.longitude = data?.longitude ?? faker.address.longitude();
    this.latitude = data?.latitude ?? faker.address.latitude();
  }
}
