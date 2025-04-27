import { Component, OnInit } from '@angular/core';
import { AtivoService } from '../../services/ativo.service';
import { RouterModule } from '@angular/router';
import { Ativo } from '../../models/ativo.model';

@Component({
  selector: 'app-reducao-de-custo-medio',
  imports: [RouterModule],
  templateUrl: './reducao-de-custo-medio.component.html',
  styleUrl: './reducao-de-custo-medio.component.scss'
})
export class ReducaoDeCustoMedioComponent implements OnInit {

  public constructor(private ativoService: AtivoService) {
  }

  public ngOnInit(): void {
    this.ativoService.get().subscribe(
      {
        next: (ativo: Array<Ativo>) => {

        }
      });
  }
}
