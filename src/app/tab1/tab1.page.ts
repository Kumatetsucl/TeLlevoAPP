// import { Tab1Page } from './tab1.page';
// // // @Component({
// // //   selector: 'app-tab1',
// // //   templateUrl: 'tab1.page.html',
// // //   styleUrls: ['tab1.page.scss'],
// // // })

// // // export class Tab1Page implements AfterViewInit {
// // //   lat: number = -33.59813725425291;
// // //   lng: number = -70.5782624941369;

// // //   public popUp = new mapboxgl.Popup().setHTML('<p>Tu ubicación!</p>');
// // //   public marker = new mapboxgl.Marker({
// // //     draggable: true,
// // //     scale: 1,
// // //   });

// // //   searchTerm: string = '';
// // //   presentingElement: Element | null = null;
// // //   presentingElement2: Element | null = null;

// // //   public mapa: mapboxgl.Map;

// // //   ngAfterViewInit() {
// // //     this.constriurMapa();

// // //     this.presentingElement2 = document.querySelector('.ion-page');
// // //     if (!this.presentingElement2) {
// // //       console.error("No se encontró ningún elemento con la clase '.ion-page'");
// // //     }

// // //     this.presentingElement = document.querySelector('.ion-page');
// // //     if (!this.presentingElement) {
// // //       console.error("No se encontró ningún elemento con la clase '.ion-page'");
// // //     }

// // //     const list: NodeListOf<Element> = document.querySelectorAll(".list");

// // //     function activeLink(this: HTMLElement) {
// // //       list.forEach((item: Element) => item.classList.remove("active"));
// // //       this.classList.add("active");
// // //     }

// // //     list.forEach((item: Element) => item.addEventListener("click", activeLink));
// // //   }

// // //   constriurMapa() {
// // //     this.mapa = new mapboxgl.Map({
// // //       accessToken: environment.mapboxKey,
// // //       container: 'mapbox',
// // //       style: 'mapbox://styles/mapbox/streets-v12',
// // //       zoom: 13,
// // //       center: [this.lng, this.lat],
// // //     });

// // //     this.marker.setLngLat([this.lng, this.lat]);
// // //     this.marker.addTo(this.mapa);
// // //   }
// // // }
////////////////////////////////////////////////////////////////////////////////////////////////////////

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { ApiServiceService } from '../api-service.service';

import {
  Component,
  AfterViewInit,
} from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements AfterViewInit {
  imprimirCoordenadas: () => [number, number];
  
  constructor(private apiService: ApiServiceService, private storage: Storage) {}
  ngAfterViewInit() {
    this.constriurMapa();
    
  }

  lngFin: number = 0;
  latFin: number = 0;

  // crear el mapbox
  public mapa: mapboxgl.Map;

  // direccion del Duoc
  lat: number = -33.59813725425291;
  lng: number = -70.5782624941369;
  
  

  ir(index: number) {
    const rutaSeleccionada = this.rutas[index];
    console.log('esta es la ruta seleccionada: '+ rutaSeleccionada);

    

    var duoc = [-70.57902808465514, -33.59778231829415];
    var map = new mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [duoc[0], duoc[1]],
      zoom: 13,
    });

    let startPoint = [-74.5, 40]; // Coordenadas del punto de inicio

    let endPoint = [-74.45, 40.1]; // Coordenadas del punto de destino
    

    startPoint = duoc;
    endPoint = [this.lngFin, this.latFin];
    console.log(endPoint);
    this.imprimirCoordenadas = (): [number, number] => {
      return [endPoint[0], endPoint[1]];
    };
    
    var marker = new mapboxgl.Marker().setLngLat([duoc[0], duoc[1]]).addTo(map);
    var marker2 = new mapboxgl.Marker()
      .setLngLat([endPoint[0], endPoint[1]])
      .addTo(map);
    // Utiliza la API de direcciones para obtener la ruta entre los dos puntos
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startPoint[0]},${startPoint[1]};${endPoint[0]},${endPoint[1]}?steps=true&geometries=geojson&access_token=${environment.mapboxKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data.routes[0].geometry;
        
        // Añade la ruta al mapa
        map.on('load', function () {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: route,
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75,
            },
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  direccion: string = '';

  rutas: string[] = [];
  
  
  buscar() {
    this.rutas = [];
    

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.direccion}.json?access_token=${environment.mapboxKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data;

        console.log(route['features']);
        var largo = route['features'].length;

        console.log(largo);
        if (largo > 0) {
          this.lngFin = route['features'][0]['center'][0];
          this.latFin = route['features'][0]['center'][1];
        }
        for (let index = 0; index < route['features'].length; index++) {
          const element = route['features'][index]['place_name'];
          console.log(element);
          this.rutas.push(element + index);
          const lng = route['features'][index]['center'][0];
          const lat = route['features'][index]['center'][1];
          console.log(index + 1 + ') Lng:' + lng + ' Lat:' + lat);
          this.mostrarBotonTomarViaje();
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
  viajeData: any;
  
  
  tomarViaje() {
    const data: [number, number] = this.imprimirCoordenadas();
    var longitud = data[0];
    var latitud = data[1];
    this.storage.get('user_id').then(
      async (userId: number | null) => {
        if (userId !== null) {
          this.apiService.getConductorById(userId).subscribe(
          );
          this.viajeData ={
            inicio_lat: -33.59778231829415,
            inicio_lon: -70.57902808465514,
            destino_lat: latitud,
            destino_lon : longitud,
            tarifa: 1000,
            metodo_pago: "efectivo",
            usuario_viaje: userId,
            conductor: userId
          }
          this.apiService.createViaje(this.viajeData).subscribe(
            (response) => {
              //this.router.navigate(['login/registro-exitoso']);
              console.log("Guardado correctamente:" + response)
            },
            (error) => {
              console.log("error: " + error)
            }
          );
        } else {
          console.error('No se pudo obtener el conductor de la sesión.');
        }
      },
    );
    
  }

  mostrarBotonTomarViaje() {
    // Verificar si hay al menos una ruta encontrada
    if (this.rutas.length > 0) {
      const botonTomarViaje = document.createElement('button');
      botonTomarViaje.innerText = 'Tomar viaje';
      botonTomarViaje.addEventListener('click', this.tomarViaje.bind(this));
      document.body.appendChild(botonTomarViaje);
    }
  }


  constriurMapa() {
    this.mapa = new mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 13,
      center: [this.lng, this.lat],
    });
  }
}
