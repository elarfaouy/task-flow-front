import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddBottomSheetComponent } from './task-add-bottom-sheet.component';

describe('TaskAddBottomSheetComponent', () => {
  let component: TaskAddBottomSheetComponent;
  let fixture: ComponentFixture<TaskAddBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskAddBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskAddBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
