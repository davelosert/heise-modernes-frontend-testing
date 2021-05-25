# GetVaxxed

Diese App ist der Begleit-Code zum Webinar von heise [Modernes Frontend-Testing in der Praxis](https://webinare.heise.de/webentwicklung-in-der-praxis/frontend-testing/).
Es handelt sich um eine Beispielhafte App zur Buchung von Impf-Terminen.

## Voraussetzungen

Auf dem System werden folgende Installationen benötigt:

- Node.js (> Version 12)
- npm (> Version 6)
- Chrome oder Firefox als Browser

### Installation der Abhängigkeiten

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

## Test selbst implementieren

Auf dem Branch **main** befindet sich die Musterlösung.
Der Branch **No_Tests enhtält eben keine Tests und dient damit als Startpunkt, diese zur Übung selbst zu implementieren.

Test dabei die folgenden Dateien in dieser Reihenfolge:

- [src/PickAppointmentForm/formStateHandler.js](./src/PickAppointmentForm/formStateHandler.js)
  - Unit-Tests einfacher Datentransformationen
- [src/PickAppointmentForm/ValuePicker.jsx](./src/PickAppointmentForm/ValuePicker.jsx)
  - Erste Component-Tests mit der React-Testing-Library
  - Nutze sinon, um den Callback zu prüfen
- [src/PickAppointmentForm/PickAppointmentForm.jsx](./src/PickAppointmentForm/PickAppointmentForm.jsx)
  - Nutze **user-events** um auch die Inputs von Textfeldern zu testen
- [src/App.jsx](./src/App.jsx)
  - Mocke die BackendAPI, um die Gesamt-App integrativ testen zu können
  
Danach kannst du versuchen, im Ordner *cypress/integration* einen Cypress-Test zu implementieren, der die Applikation Ende-Zu-Ende testet.

Vergiss nicht, die App vorher mit `npm run start` zu starten!
