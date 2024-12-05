import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarMenuComponent } from './top-bar-menu/top-bar-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarMenuComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [TopBarMenuComponent],
})
export class SharedModule {}
