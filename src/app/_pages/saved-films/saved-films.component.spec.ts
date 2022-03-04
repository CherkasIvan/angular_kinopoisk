import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFilmsComponent } from './saved-films.component';

describe('SavedFilmsComponent', () => {
  let component: SavedFilmsComponent;
  let fixture: ComponentFixture<SavedFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
