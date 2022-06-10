export class Salat {
  date_for: string;
  fajr: string;
  shurooq: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  constructor(
    date_for: string,
    fajr: string,
    shurooq: string,
    dhuhr: string,
    asr: string,
    maghrib: string,
    isha: string
  ) {
    this.date_for = date_for;
    this.fajr = fajr;
    this.shurooq = shurooq;
    this.dhuhr = dhuhr;
    this.asr = asr;
    this.maghrib = maghrib;
    this.isha = isha;
  }
}
