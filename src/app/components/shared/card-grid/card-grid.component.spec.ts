import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGridComponent } from './card-grid.component';
import { Component } from '@angular/core';

describe('CardGridComponent', () => {
  let component: CardGridComponent;
  let fixture: ComponentFixture<CardGridComponent>;

  @Component({
    selector: 'app-test-host',
    template: '<app-card-grid>Test content</app-card-grid>',
  })
  class TestHostComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardGridComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should project content inside ng-content', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();
    const compiled = hostFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-card-grid div')?.textContent).toContain(
      'Test content'
    );
  });
});
