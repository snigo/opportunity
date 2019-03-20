import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor() { }

  mapVolunteerInputToProps(id, { name, about, dateOfBirth }) {
    return [
      id,
      {
        name,
        about,
        dateOfBirth,
      }
    ];
  }

  mapNgoInputToProps(id, { name, about, website, address, email, phone }) {
    return [
      id,
      {
        name,
        about,
        contact: {
          website,
          address,
          publicEmail: email,
          phone,
        }
      }
    ];
  }

  /* mapOpportunityInputToProps is ONLY used for creating Opportunity record */
  /* USE updateOpportunity from firebase.service directly for updating Opportunity */
  mapOpportunityInputToProps(ngoData, { name, about, location, prerequisites }) {
    return {
      name,
      about,
      location,
      prerequisites,
      ngo: {
        id: ngoData.id,
        name: ngoData.name,
        image: ngoData.image,
      },
      timeCreated: new Date().toISOString(),
      active: true,
    }
  }

  mapApplicationInputToProps(volunteerId, opportunityId) {
    return {
      volunteerId,
      opportunityId,
      timeCreated: new Date().toISOString(),
      active: true,
    }
  }
}
