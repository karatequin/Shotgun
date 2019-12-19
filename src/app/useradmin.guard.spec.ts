import { TestBed, async, inject } from '@angular/core/testing';

import { Useradminguard } from './useradmin.guard';

describe('UseradminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Useradminguard]
    });
  });

  it('should ...', inject([Useradminguard], (guard: Useradminguard) => {
    expect(guard).toBeTruthy();
  }));
});
