import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleModalComponent } from './simple-modal.component';
import {NgbActiveModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

describe('SimpleModalComponent', () => {
  let component: SimpleModalComponent;
  let fixture: ComponentFixture<SimpleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleModalComponent ],
      imports: [NgbModalModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
