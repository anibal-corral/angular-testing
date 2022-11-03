import { ControlContainer, FormBuilder } from "@angular/forms";
import { LoginForm } from "./form"

describe('Testing Forms',()=>{
    let loginForm:LoginForm;
beforeEach(()=>{
    loginForm = new LoginForm(new FormBuilder());
})
    it('Should create a new form with 2 fields', ()=>{
expect(loginForm.form.contains('email')).toBeTruthy();
expect(loginForm.form.contains('pwd')).toBeTruthy();


    }),

    it('Email should be required',()=>{
        const emailControl = loginForm.form.get('email');
        emailControl?.setValue('');
        expect(emailControl?.valid).toBeFalsy();

    })
    it('Email should be valid email',()=>{
        const emailControl = loginForm.form.get('email');
        emailControl?.setValue('anastasia@gmail.com');
        expect(emailControl?.valid).toBeTruthy();

    })

})