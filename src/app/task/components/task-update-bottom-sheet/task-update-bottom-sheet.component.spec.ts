import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdateBottomSheetComponent } from './task-update-bottom-sheet.component';

describe('TaskUpdateBottomSheetComponent', () => {
  let component: TaskUpdateBottomSheetComponent;
  let fixture: ComponentFixture<TaskUpdateBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskUpdateBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskUpdateBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
