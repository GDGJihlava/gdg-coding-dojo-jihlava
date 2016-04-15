## es6-promise-dojo

## Co si nainstalovat
- git - http://git-scm.com/downloads
- aktuální verzi nodeJS - http://nodejs.org/download/

## NPM závislosti
Nodejs se nainstaloval spolu s balíčkovacím nástrojem npm.

## Ověření správnosti instalace

Stáhněte tento balíček kamkoli k sobě. 

```
https://bitbucket.org/angular_cz/es6-dojo
```

Spusťte v jeho kořenovém adresáři následující příkazy, žádný z nich by neměl hlásit chybu (první může chvíli trvat).

```
 npm install

 npm start
```

Nyní, když otevřete prohlížeč na adrese http://localhost:8000/ uvidíte uvítací obrazovku ES6 dojo.
Pokud se stránka zobrazila, je nastylovaná, vlevo vidíte menu, pak je vše v pořádku. 

Pokud došlo během instalace nebo spuštění k nějaké chybě, nebo podívejte se do sekce **Možné problémy**, případně nás kontaktujte na [angular@angular.cz](mailto:angular@angular.cz)

### Volba editoru ###

Otevřete si složku cvičení ve vašem oblíbeném editoru, tak, abyste viděli všechny příklady jako strom.

Velmi Vám doporučujeme použít editor, který umí syntaxi javascriptu a automatické formátování. Pokud to Váš editor neumí, můžete sáhnout po jednom z těchto:

 - Webstorm - [https://www.jetbrains.com/webstorm/download/] (https://www.jetbrains.com/webstorm/download/) - 30 dní trial
 - Netbeans - [https://netbeans.org/downloads/] (https://netbeans.org/downloads/) - zdarma

## Použití při cvičeních: ##

Všechny potřebné nástroje a závislosti jste nainstalovali už v předchozích krocích pomocí příkazu "npm install".

### Při dalším spouštění už si tak vystačíte s příkazem: ###
```
npm start
```
který spustí lokální server na adrese http://localhost:8000/

### Spuštění testů v jednotlivých cvičeních ###
V některých cvičeních se testy spouštějí externím nástrojem (karma runner). Příkaz pro spuštění najdete v konkrétních cvičeních

### Možné probémy ###

####unable to connect to github.com####
pokud vidíte tuto chybovou zprávu po spuštění *npm install*

* máte buď blokováno připojení ke githubu  - to můžete ověřit otevřením github.com v prohlížeči
* nebo máte blokován protokol git - spusťte příkaz, který "přesměruje" protokol git po https

```
git config url."https://github.com/".insteadOf git@github.com:
git config url."https://".insteadOf git://
```

Nyní už by měl příkaz *npm install* fungovat

Pokud problémy přetrvávají, a jste uživatelem systému Windows, může zde být následující problém:

* Nastavení výše se zapíšou do .gitconfig do domovské složky, na Windows s profilem na vzdáleném disku však může každý ze shelů hledat home jinde. Pokud je toto Váš případ, zkopírujte soubor do obou umístění, na sdílenou domovskou složku a c:\users\[name]\

Chcete-li používat konfiguraci i pro další projekty, můžete ji nastavit globálne (přidat atribut --global)

```
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global url."https://".insteadOf git://
```
Nyní už by měl příkaz npm install fungovat.
