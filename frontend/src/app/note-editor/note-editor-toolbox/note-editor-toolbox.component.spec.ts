import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoteEditorToolboxComponent} from './note-editor-toolbox.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

describe('NoteEditorToolboxComponent', () => {
  let component: NoteEditorToolboxComponent;
  let fixture: ComponentFixture<NoteEditorToolboxComponent>;

  const getIcon = (className: string) => {
    fixture.detectChanges();
    return fixture.nativeElement.querySelector(className);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteEditorToolboxComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditorToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly render save button', () => {
    component.canSave = true;
    let saveIcon = getIcon('.save');
    expect(saveIcon).toBeTruthy();

    component.canSave = false;
    saveIcon = getIcon('.save');
    expect(saveIcon).toBeNull();
  });

  it('should properly render edit button', () => {
    component.canEdit = true;
    let editIcon = getIcon('.edit');
    expect(editIcon).toBeTruthy();

    component.canEdit = false;
    editIcon = getIcon('.edit');
    expect(editIcon).toBeNull();
  });

  it('should properly render remove button', () => {
    component.canRemove = true;
    let removeIcon = getIcon('.remove');
    expect(removeIcon).toBeTruthy();

    component.canRemove = false;
    removeIcon = getIcon('.remove');
    expect(removeIcon).toBeNull();
  });

  it('should emit event when save icon clicked', () => {
    component.canSave = true;
    const saveIcon = getIcon('.save');

    spyOn(component.saveClicked, 'emit');
    saveIcon.click();
    expect(component.saveClicked.emit).toHaveBeenCalled();
  });

  it('should emit event when edit icon clicked', () => {
    component.canEdit = true;
    const editIcon = getIcon('.edit');

    spyOn(component.editClicked, 'emit');
    editIcon.click();
    expect(component.editClicked.emit).toHaveBeenCalled();
  });

  it('should emit event when remove icon clicked', () => {
    component.canRemove = true;
    const removeIcon = getIcon('.remove');

    spyOn(component.removeClicked, 'emit');
    removeIcon.click();
    expect(component.removeClicked.emit).toHaveBeenCalled();
  });
});
