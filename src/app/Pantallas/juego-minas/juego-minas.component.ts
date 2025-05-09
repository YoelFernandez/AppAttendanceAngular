import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-juego-minas',
  imports: [NgClass],
  templateUrl: './juego-minas.component.html',
  styleUrl: './juego-minas.component.css'
})
export class JuegoMinasComponent implements OnInit {

  numerosRandom = Array.from({ length: 4 }, () => Math.floor(Math.random() * 25));

  botones = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    activo: false,
  }));

  ngOnInit(): void {
    this.generarAleatorio();

  }


  onButtonClick(index: number): void {
    console.log(this.numerosRandom);
    console.log(`Botón en la posición ${index} fue clickeado.`)
    this.botones[index].activo = !this.botones[index].activo;

  }

  btnReiniciar() {
    this.numerosRandom = [];
    this.botones.forEach(boton => boton.activo = false);
    this.generarAleatorio();
  }
  generarAleatorio() {
    const numerosUnicos = new Set<number>();
    while (numerosUnicos.size < 4) {
      const num = Math.floor(Math.random() * 25);
      numerosUnicos.add(num);
    }
    this.numerosRandom = Array.from(numerosUnicos);
  }

  cobrar() {
    this.numerosRandom.forEach((numero) => {
      this.botones[numero].activo = true;

    }
    );

  }

  reproducirAudio() {
    const audio = new Audio();
    audio.src = '/audio.mp3'; // ruta relativa al archivo en assets
    audio.load();
    audio.play();
  }
}
