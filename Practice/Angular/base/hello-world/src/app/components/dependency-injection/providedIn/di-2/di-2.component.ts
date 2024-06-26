import {Component} from '@angular/core';
import {DIWithoutProvidedInService} from "../../../../services/dependency-injection/di-without-provided-in.service";

@Component({
    selector: 'app-di-2',
    standalone: true,
    imports: [],
    template: `<p>di-2 - diWithoutProvidedInService - {{ this.name }}</p>`,
})
export class DI2Component {

    name: string = 'John Doe';

    constructor(public diWithoutProvidedInService: DIWithoutProvidedInService) {
        console.log('Di2Component Constructor Invoked.');
    }

}
