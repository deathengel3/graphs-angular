import { Component, OnInit } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public pieData: any[] = [
    { category: 'Analista Seg. Tec.', value: 0.4100 },
    { category: 'Proveedor', value: 0.5800 }
  ];

  constructor(private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
  }

  public labelContent(args: LegendLabelsContentArgs): string {
    return  `${this.intl.formatNumber(args.dataItem.value, 'p2')}`; //`${args.dataItem.category} years old:`;
  }
  ngOnInit() {
  }

}
