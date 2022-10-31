import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  transferencias: any[] = [] ;
  menuFechado = false;
  screenWidth = 0;

  transferir($event){
    console.log($event)
    const transferencia = { ...$event, data: new Date().toLocaleDateString('pt-Br')};
    this.transferencias.push(transferencia);
  }

  barraMenu(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.menuFechado = data.collapsed
  }
}
