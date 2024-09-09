import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'button-doc',
    template: `
        <app-docsectiontext>
            <p>Buttons can be placed at either side of an input element.</p>
        </app-docsectiontext>
        <div class="card flex flex-col md:flex-row gap-4">
            <p-input-group>
                <button type="button" pButton label="Search"></button>
                <input type="text" pInputText placeholder="Keyword" />
            </p-input-group>
            <p-input-group>
                <input type="text" pInputText placeholder="Keyword" />
                <button type="button" pButton icon="pi pi-search" class="p-button-warning"></button>
            </p-input-group>
            <p-input-group>
                <button type="button" pButton icon="pi pi-check" class="p-button-success"></button>
                <input type="text" pInputText placeholder="Vote" />
                <button type="button" pButton icon="pi pi-times" class="p-button-danger"></button>
            </p-input-group>
        </div>
        <app-code [code]="code" selector="input-group-button-demo"></app-code>
    `,
})
export class ButtonDoc {
    code: Code = {
        basic: `<p-input-group>
    <button type="button" pButton label="Search"></button>
    <input type="text" pInputText placeholder="Keyword" />
</p-input-group>
<p-input-group>
    <input type="text" pInputText placeholder="Keyword" />
    <button type="button" pButton icon="pi pi-search" class="p-button-warning"></button>
</p-input-group>
<p-input-group>
    <button type="button" pButton icon="pi pi-check" class="p-button-success"></button>
    <input type="text" pInputText placeholder="Vote" />
    <button type="button" pButton icon="pi pi-times" class="p-button-danger"></button>
</p-input-group>`,

        html: `<div class="card flex flex-col md:flex-row gap-4">
    <p-input-group>
        <button type="button" pButton label="Search"></button>
        <input type="text" pInputText placeholder="Keyword" />
    </p-input-group>
    <p-input-group>
        <input type="text" pInputText placeholder="Keyword" />
        <button type="button" pButton icon="pi pi-search" class="p-button-warning"></button>
    </p-input-group>
    <p-input-group>
        <button type="button" pButton icon="pi pi-check" class="p-button-success"></button>
        <input type="text" pInputText placeholder="Vote" />
        <button type="button" pButton icon="pi pi-times" class="p-button-danger"></button>
    </p-input-group>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'input-group-button-demo',
    templateUrl: './input-group-button-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule]
})
export class InputGroupButtonDemo {
}`,
    };
}
