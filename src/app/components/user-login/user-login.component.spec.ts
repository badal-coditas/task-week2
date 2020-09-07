import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { RouterTestingModule } from '@angular/router/testing';

// describe('UserRegisterComponent', () => {
//   let component: UserLoginComponent;
//   let fixture: ComponentFixture<UserLoginComponent>;

//   test('should have a default name', () => {
//     expect(false).toBeFalsy();
//   });
// });

describe('UserLoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserLoginComponent],
    }).compileComponents();
  }));

  it('should render title ', () => {
    const fixture = TestBed.createComponent(UserLoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form-heading').textContent).toContain(
      'login'
    );
  });
});
