import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurlisteComponent } from './utilisateurliste.component';

describe('UtilisateurlisteComponent', () => {
  let component: UtilisateurlisteComponent;
  let fixture: ComponentFixture<UtilisateurlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
