import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GlobalVariables {
    constructor() {

    }
    userChange: EventEmitter<any> = new EventEmitter();

    getUserChangeEmitter() {
        return this.userChange;
    }
}