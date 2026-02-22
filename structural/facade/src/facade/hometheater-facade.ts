import { DVDPlayer } from "../services/dvd-player";
import { Projector } from "../services/projector";
import { SoundSystem } from "../services/sound-system";

export class HomeTheaterFacade {
  constructor(
    private dvd: DVDPlayer,
    private projector: Projector,
    private sound: SoundSystem
  ) {}

  watchMovie(movie: string) {
    console.log("Get ready to watch a movie...");
    this.projector.on();
    this.projector.setWideScreenMode();
    this.sound.on();
    this.sound.setVolume(10);
    this.dvd.on();
    this.dvd.play(movie);
  }

  endMovie() {
    console.log("Shutting movie theater down...");
    this.dvd.off();
    this.sound.off();
    this.projector.off();
  }
}