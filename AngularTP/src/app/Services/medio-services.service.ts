import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})

export class MedioServicesService {
   dataconst: any = [];
   // data: any={
   // "listaDeDescuentosLimitadasDeTarifas": [
   //    {
   //       "rows": [
   //          { "tipoPeriodo": 1, "limite": 40, "definicionDiaria": "08:00", "definicionSemanal": 0, "definicionMensual": 0, "pasajeroId": 1 },
   //          {
   //             "tipoPeriodo": 2,
   //             "limite": 41,
   //             "definicionDiaria": "0",
   //             "definicionSemanal": 1,
   //             "definicionMensual": 0,
   //             "pasajeroId": 1
   //          },
   //          {
   //             "tipoPeriodo": 3,
   //             "limite": 42,
   //             "definicionDiaria": "0",
   //             "definicionSemanal": 0,
   //             "definicionMensual": 21,
   //             "pasajeroId": 1
   //          },
   //          {
   //             "tipoPeriodo": 1,
   //             "limite": 90,
   //             "definicionDiaria": "10:00",
   //             "definicionSemanal": 0,
   //             "definicionMensual": 0,
   //             "pasajeroId": 2
   //          },
   //          {
   //             "tipoPeriodo": 2,
   //             "limite": 91,
   //             "definicionDiaria": "0",
   //             "definicionSemanal": 7,
   //             "definicionMensual": 0,
   //             "pasajeroId": 2
   //          },
   //          {
   //             "tipoPeriodo": 3,
   //             "limite": 92,
   //             "definicionDiaria": "0",
   //             "definicionSemanal": 0,
   //             "definicionMensual": 4,
   //             "pasajeroId": 2
   //          },
   //          {
   //             "tipoPeriodo": 1,
   //             "limite": 150,
   //             "definicionDiaria": "23:00",
   //             "definicionSemanal": 0,
   //             "definicionMensual": 0,
   //             "pasajeroId": 3
   //          },
   //          {
   //             "tipoPeriodo": 2,
   //             "limite": 151,
   //             "definicionDiaria": "0",
   //             "definicionSemanal": 5,
   //             "definicionMensual": 0,
   //             "pasajeroId": 3
   //          },
   //          {
   //             "tipoPeriodo": 3,
   //             "limite": 152,
   //             "definicionDiaria": "0",
   //             "definicionMensual": 30,
   //             "definicionSemanal": 0,
   //             "pasajeroId": 3
   //          }
   //       ]
   //    }
   //    ]

   // }



   constructor() {

   }

   getdata() {
      return this.dataconst = dataconst.rows;
   }

}

// export interface ListaDeDescuentosLimitadasDeTarifa {
//   tipoPeriodo: number;
//   limite: number;
//   definicionDiaria: string;
//   definicionSemanal: number;
//   definicionMensual: number;
//   pasajeroId: number;
// }

const dataconst = {
   "rows": [
      {
         "listaDeDescuentosLimitadasDeTarifas": [
            { "tipoPeriodo": 1, "limite": 40, "definicionDiaria": "08:00", "definicionSemanal": 0, "definicionMensual": 0, "pasajeroId": 1 },
            {
               "tipoPeriodo": 2,
               "limite": 41,
               "definicionDiaria": "0",
               "definicionSemanal": 1,
               "definicionMensual": 0,
               "pasajeroId": 1
            },
            {
               "tipoPeriodo": 3,
               "limite": 42,
               "definicionDiaria": "0",
               "definicionSemanal": 0,
               "definicionMensual": 21,
               "pasajeroId": 1
            },
            {
               "tipoPeriodo": 1,
               "limite": 90,
               "definicionDiaria": "10:00",
               "definicionSemanal": 0,
               "definicionMensual": 0,
               "pasajeroId": 2
            },
            {
               "tipoPeriodo": 2,
               "limite": 91,
               "definicionDiaria": "0",
               "definicionSemanal": 7,
               "definicionMensual": 0,
               "pasajeroId": 2
            },
            {
               "tipoPeriodo": 3,
               "limite": 92,
               "definicionDiaria": "0",
               "definicionSemanal": 0,
               "definicionMensual": 4,
               "pasajeroId": 2
            },
            {
               "tipoPeriodo": 1,
               "limite": 150,
               "definicionDiaria": "23:00",
               "definicionSemanal": 0,
               "definicionMensual": 0,
               "pasajeroId": 3
            },
            {
               "tipoPeriodo": 2,
               "limite": 151,
               "definicionDiaria": "0",
               "definicionSemanal": 5,
               "definicionMensual": 0,
               "pasajeroId": 3
            },
            {
               "tipoPeriodo": 3,
               "limite": 152,
               "definicionDiaria": "0",
               "definicionMensual": 30,
               "definicionSemanal": 0,
               "pasajeroId": 3
            }
         ]
      }
   ]
}