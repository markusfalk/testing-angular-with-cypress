# testing-angular-with-cypress

Angular Meetup Dresden #10: e2e-Testing mit Cypress

* https://www.cypress.io/

## Diskussion

* Was ist der Unterschied zu anderen Testumgebungen?
  * Kein Selenium
  * Läuft direkt im Kontext der Anwendung und im Browser
  * Frameworkunabhängig all-in-one Lösung
* Was soll getestet werden? 
  * Kritische Pfade
* Wer soll die Tests schreiben?
  * Developer? Tester?

## Was kann Cypress?

* Einfach einzurichten und zu verwenden
* Debugging direkt in den Dev-Tools deiner Wahl
* Screenshots und Videos
* TimeTravel
* Real time reloads
* Open Source und Kostenlos (+ Dashboard-Service)

## Was kann Cypress nicht?

* Fokusiert auf e2e-Testing (Kein Performance-Testing)
* Unterstützt nur JavaScript Anwendungen da es nur im Browser läuft (kein Node.js)
* Wird niemals mehrere Tabs unterstützen
* Wird niemals mehrere Browser-Fenster unterstützen
* Same-Domain-Policy (nur eine Domain pro Test aufrufbar)

## Topics

* Cypress starten (Lokal und auf Server)
* Interacting with Elements
* Fixtures
* Custom Actions
* Conditional Testing
* Best Practices (https://docs.cypress.io/guides/references/best-practices.html)
