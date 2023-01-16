import { TestBed } from '@angular/core/testing';
import { RestaurantsService } from '../services/restaurants.service';



describe('AuthGuard', () => {
  let guard: RestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestaurantsService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
