import { TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';
import { UserData } from '../models/user-data';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports: [ HttpClientTestingModule ]

  }));

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });

  it('should send http request to http://kaypee.io/api/user/data', () => {
    const httpDeamon = TestBed.get(HttpTestingController);
    const service: UserDataService = TestBed.get(UserDataService);

    service.getUserData().subscribe(userData => {
      const expected = { id: '000001', name: 'kitphon', age: 25 } as UserData;
      expect(userData).toEqual(expected);
    });
    const req = httpDeamon.expectOne('http://kaypee.io/api/user/data');
    expect(req.request.method).toBe('GET');

    const mockUpRespone = { id: '000001', name: 'kitphon', age: 25 } as UserData;
    req.flush(mockUpRespone);
  });

});

