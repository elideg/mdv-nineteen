import { PhonesFacade } from './../../../../../../libs/core-state/src/lib/phones/phones.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '@mdv-nineteen/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-nineteen-phones-item',
  templateUrl: './phones-item.component.html',
  styleUrls: ['./phones-item.component.scss']
})
export class PhonesItemComponent implements OnInit {
  phones$: Observable<Phone>;

  constructor(
    private route: ActivatedRoute,
    private phonesFacade: PhonesFacade
  ) { }

  ngOnInit() {
    this.phonesFacade.loadPhones();
    this.route.params.subscribe((param) => this.phonesFacade.selectPhone(param['id']));
    this.phones$ = this.phonesFacade.selectedPhone$
  }

}
