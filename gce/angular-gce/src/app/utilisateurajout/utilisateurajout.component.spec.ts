import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurajoutComponent } from './utilisateurajout.component';

describe('UtilisateurajoutComponent', () => {
  let component: UtilisateurajoutComponent;
  let fixture: ComponentFixture<UtilisateurajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
