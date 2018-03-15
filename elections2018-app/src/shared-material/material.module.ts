import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule
    ]
})
export class AMaterialModule { }