import { routes } from "./app.routes"
import { DoctorComponent } from '../../intermediate2/doctor/doctor.component';

describe('Main routes', ()=>{
    it('Should exist route path2/:id',()=>{
        expect(routes).toContain({
            path:'path2/:id',
            component:DoctorComponent
        })
    })
})