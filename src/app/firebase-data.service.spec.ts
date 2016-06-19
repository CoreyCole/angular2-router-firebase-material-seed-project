/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FirebaseDataService } from './firebase-data.service';

describe('FirebaseData Service', () => {
  beforeEachProviders(() => [FirebaseDataService]);

  it('should ...',
      inject([FirebaseDataService], (service: FirebaseDataService) => {
    expect(service).toBeTruthy();
  }));
});
