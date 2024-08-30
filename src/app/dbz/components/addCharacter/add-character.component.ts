import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html'
})

export class AddCharacterComponent {

    @Output()
    onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
        name: '',
        power: 0
    }

    emitCharacter(){

        //debugger; --> Breakpoint to pause the execution whe passes here

        //console.log(this.character);
        
        if(this.character.name.length === 0) return;

        this.onNewCharacter.emit(this.character);

        this.character = {name: '', power: 0};
    }
}