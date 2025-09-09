import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cmp02-referencias',
  imports: [],
  templateUrl: './cmp02-referencias.component.html',
  styleUrl: './cmp02-referencias.component.css'
})
export class Cmp02ReferenciasComponent {
  @ViewChild("video") videoRef: ElementRef | null = null
  initialVolume: number = 0

  ngOnInit() {
    console.log('Al inicializar el componente')
    console.log(this.videoRef)
  }

  ngAfterViewInit() {
    console.log("Después de haber inicializado todo lo que hay en este componente")
    console.log(this.videoRef)
    this.initialVolume = (this.videoRef?.nativeElement.volume * 100) || 0
  }

  playVideo() {
    this.videoRef?.nativeElement.play()
  }

  pauseVideo(video: HTMLMediaElement) {
    video.pause()
  }

  setVolume(event: Event, video: HTMLMediaElement) {
    const volumen = (event.target as HTMLInputElement).value
    video.volume = Number(volumen) / 100
  }

}
