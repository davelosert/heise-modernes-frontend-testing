# Test Theorie

## Was sind Tests überhaupt?

- Stellen Funktionalität einer Applikation sicher
- Manuelle vs. automatisierten Tests
- Nicht funktionale Anforderungen
  - Performance, Compliance, Style …

Fokus heute: automatiserten, funktionalen Tests

## Warum überhaupt automatisiert testen?

- sehr schnelles Feedback
- Regressionen vermeiden
- Tests zu besserem Code führen - Entkopplung

- Passive Vorteile
  - geben Sicherheit
  - ermutigt zu Experimenten

Zusammengefasst:
Tests sorgen für **Geschwindigkeit**, **Stabilität**, **Qualität** - **Vertrauen**

## Im Hinterkopf behalten

- Test sind ein Sicherheitsnetz - keine Garantie
- Tests sind Mehraufwand

## Arten von Tests

- Unit
  - Testen eine Unit
  - Unit = Modul, eine Funktion, eine Klasse
  - immer in Isolation
  - testet das öffentliche Interface der Unit
  - Richtet sich an: Entwickler*innen
- Integration
  - Testen die integration / zusammenspiel mehrerer Units
  - die Integration mit I/O Modulen / Plugins / Libraries usw.
  - im Frontend: Component Tests - testen die Interaktion mit dem DOM
- E2E Tests / Browser Tests
  - End 2 End Tests
  - Browser über API automatisiert zu steuern
  - Die Applikation gesamtheitlich zu testen

## Testing im Frontend

- Läuft Applikation i.d.R. im Browser
- Tests (Unit & Integration Tests) mit NodeJS
- Dank Frameworks: Entkopplung zum eigentlich DOM
- Was wird getestet? JavaScript
- **Library**: JSDom

Was testen wir nicht? Integration mit HTML & CSS

### Visual Regression Tests

- Screenshots vorher / nachher vergleicht
- HTML Bäume vorher / nachher

=> Kosten / Nutzen Verhältnis nicht gegeben
