import {Component} from '@angular/core';
import {HomeComponent} from "./component/home/home.component";
import {NavbarComponent} from "./component/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HomeComponent,
        NavbarComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Blinkit';
}
