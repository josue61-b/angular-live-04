import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { AuthService } from '../../../../core/services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el email y la password deben ser campos requeridos', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });

    expect(component.loginForm.valid).toBeFalsy();
  });

  it('si el formulario es invalido, no se debe hacer login y debe mostrar un alert', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });

    const alertSpy = spyOn(window, 'alert');

    component.login();

    expect(alertSpy).toHaveBeenCalledWith('Please fill in all fields');
  });

  it('si el formulario es valido, se debe hacer login', () => {
    component.loginForm.setValue({
      email: 'test@mail.com',
      password: '123456',
    });

    const authService = TestBed.inject(AuthService);
    const loginSpy = spyOn(authService, 'login');

    component.login();

    expect(loginSpy).toHaveBeenCalledWith('test@mail.com', '123456');
  });
});
