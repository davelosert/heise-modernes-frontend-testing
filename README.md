# GetVaxxed

Diese App ist der Begleit-Code zum Webinar von heise [Modernes Frontend-Testing in der Praxis](https://webinare.heise.de/webentwicklung-in-der-praxis/frontend-testing/).
Es handelt sich um eine Beispielhafte App zur Buchung von Impf-Terminen.

## Voraussetzungen

Auf dem System werden folgende Installationen benötigt:

- Node.js (> Version 12)
- npm (> Version 6)
- Chrome oder Firefox als Browser

## Installation der Abhängigkeiten

Vor dem ersten Start müssen alle Abhängigkeiten einmalig installiert werden. Öffne dazu ein Terminal, navigiere in das Projektverzeichnis und tippe dann:

```shell
$ npm install
```

## Starten der App und Tests

### App

Die App kann über folgenden Befehl gestartet werden:

```shell
$ npm start
```

### Unit- und Component-Tests

```shell
$ npm run test
```

### Browser-Tests

```shell
$ npm run cypress:open
```
