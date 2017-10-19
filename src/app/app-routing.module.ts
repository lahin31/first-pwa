import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
    {
        path: '',
        component: StudentsListComponent,
        data: {
            depth: 1
        }
    },
    {
        path: 'detail/:id',
        component: StudentDetailsComponent,
        data: {
            depth: 2
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
