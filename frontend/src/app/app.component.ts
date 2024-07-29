import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {MenuService} from "./shared/service/ui/menu/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Ordnungsamt';
  items: MenuItem[] = [];

  constructor(private menuService:MenuService,private router:Router) {
  }

  ngOnInit(): void {
    this.items=this.menuService.getMenubarItems();
  }
}
