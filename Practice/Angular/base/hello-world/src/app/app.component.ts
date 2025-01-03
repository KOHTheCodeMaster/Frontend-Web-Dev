import {Component} from '@angular/core';
import {DemoGoogleComponent} from "./components/demo-practice/demo-google/demo-google.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [DemoGoogleComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title: string = 'Frontend-Web-Dev';
}
