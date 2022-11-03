import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginForm{
    form!:FormGroup;

    constructor(private fb:FormBuilder){
this.form = fb.group({
    email:['',[Validators.required, Validators.email]],
    pwd: ['',[Validators.required ]]
})
    }
}