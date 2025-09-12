import { Component } from '@angular/core';
import { filter, interval, map, Observable, Subscriber, Subscription, take } from 'rxjs';
import { LoggerService } from '../../services/logger.service';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  usuario: string = "Charly"
  idioma: string = ''

  subscription: Subscription | null = null

  constructor(
    private logger: LoggerService,
    private idiomaService: IdiomaService,
  ) { }

  ngOnInit() {
    const observable1 = new Observable<string>((subscriber: Subscriber<string>) => {
      setTimeout(() => {
        subscriber.next('El canario está en la jaula.')
      }, 2000)
      setTimeout(() => {
        subscriber.next('El canario sigue en la jaula.')
      }, 2200)
      setTimeout(() => {
        subscriber.next('El canario sigue en la jaula.')
      }, 2500)
      setTimeout(() => {
        subscriber.next('El canario se ha asomado a la puerta de la jaula.')
      }, 3200)
      setTimeout(() => {
        subscriber.error('El canario se ha escapado de la jaula.')
        // subscriber.complete()
      }, 4000)
      setTimeout(() => {
        subscriber.next('El canario ha vuelto a la jaula.')
      }, 4800)
    })

    const subscription: Subscription = observable1.subscribe({
      next: (mensaje: string) => {
        this.logger.info(mensaje)
      },
      error: (error: string) => {
        this.logger.warn("Ha ocurrido un error: " + error)
      },
      complete: () => {
        this.logger.info("Se terminó :(")
      }
    })

    setTimeout(() => {
      subscription.unsubscribe()
    }, 3000)


    this.subscription = interval(1000)
      .pipe(
        map(num => num * 2),
        filter(num => num > 10),
        take(5),
        map(num => num + "!")
      )
      .subscribe((num) => {
        this.logger.info(num)
      })


    this.idiomaService.idioma$.subscribe((idioma: string) => {
      console.log('IDIOMA', idioma)
      this.idioma = idioma
    })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
