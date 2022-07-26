import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBlockComponent } from './photo-block.component';

describe('PhotoBlockComponent', () => {
  let component: PhotoBlockComponent;
  let fixture: ComponentFixture<PhotoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
