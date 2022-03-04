import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavButtons } from '../../interface/nav-buttons.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navButtons: NavButtons[] = [
    {
      buttonName: 'home',
      path: '',
    },
    {
      buttonName: 'saved',
      path: 'saved-films',
    },
  ];

  constructor(private router: Router) {}

  navigate(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {}
}
