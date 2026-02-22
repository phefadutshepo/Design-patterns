import { HomeTheaterFacade } from "./facade/hometheater-facade";
import { DVDPlayer } from "./services/dvd-player";
import { Projector } from "./services/projector";
import { SoundSystem } from "./services/sound-system";

const homeTheater = new HomeTheaterFacade(
  new DVDPlayer(),
  new Projector(),
  new SoundSystem()
);

homeTheater.watchMovie("Inception");
homeTheater.endMovie();