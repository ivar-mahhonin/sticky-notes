import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleModalComponent} from './simple-modal.component';
import {NgbActiveModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

export class MockNgbActiveModalRef {
  close(value: boolean): void {
  }

  dismiss(value: string): void {
  }
}

describe('SimpleModalComponent', () => {
  let component: SimpleModalComponent;
  let fixture: ComponentFixture<SimpleModalComponent>;

  let title: HTMLElement;
  let text: HTMLElement;
  let confirmButton: HTMLElement;
  let cancelButton: HTMLElement;

  let modalService: NgbActiveModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleModalComponent],
      imports: [NgbModalModule],
      providers: [{provide: NgbActiveModal, useClass: MockNgbActiveModalRef}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    modalService = TestBed.inject(NgbActiveModal);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind modal title', () => {
    component.title = "Title";
    fixture.detectChanges();
    title = fixture.nativeElement.querySelector('.modal-title');
    expect(title.textContent).toContain(component.title);
  });

  it('should bind modal text', () => {
    component.text = "Text";
    fixture.detectChanges();
    text = fixture.nativeElement.querySelector('.modal-body p');
    expect(text.textContent).toContain(component.text);
  });

  it('should bind confirm text', () => {
    component.confirmText = "Confirm text";
    fixture.detectChanges();
    confirmButton = fixture.nativeElement.querySelector('.confirm');
    expect(confirmButton.textContent).toContain(component.confirmText);
  });

  it('should bind cancel text', () => {
    component.cancelText = "Cancel text";
    fixture.detectChanges();
    cancelButton = fixture.nativeElement.querySelector('.cancel');
    expect(cancelButton.textContent).toContain(component.cancelText);
  });

  it('should trigger dismiss', () => {
    spyOn(modalService, 'dismiss');
    const closeButton = fixture.nativeElement.querySelector('.close');
    closeButton.click();
    expect(modalService.dismiss).toHaveBeenCalledWith('Dismissed');
  });

  it('should trigger close method on confirm button clicked', () => {
    component.confirmText = "Confirm text";
    fixture.detectChanges();
    spyOn(modalService, 'close');
    const confirmButton = fixture.nativeElement.querySelector('.confirm');
    confirmButton.click();
    expect(modalService.close).toHaveBeenCalledWith(true);
  });

  it('should trigger close method on cancel button clicked', () => {
    component.cancelText = "Cancel text";
    fixture.detectChanges();
    spyOn(modalService, 'close');
    const confirmButton = fixture.nativeElement.querySelector('.cancel');
    confirmButton.click();
    expect(modalService.close).toHaveBeenCalledWith(false);
  });
});
