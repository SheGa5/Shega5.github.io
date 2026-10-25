# Fotky nápojů

Fotky pití. Předpona v názvu říká, o co jde — podle ní se to dá filtrovat
i jen pohledem do složky:

| předpona | co to je | příklad |
|---|---|---|
| `p_` | **pivo** | `p_brunclikova-cep.jpg` |
| `v_` | **víno** | `v_cabernet-sauvignon-hu.jpg` |

Další druhy (nealko, káva, destiláty) dostanou svoji předponu, až budou
potřeba — proto je tu tahle tabulka, ať se to nerozjede každý po svém.

## Jak fotku pojmenovat

Za předponou následuje název bez diakritiky, mezery nahradí spojovník:

```
v_cabernet-sauvignon-hu.jpg      ← maďarský Cabernet Sauvignon
v_ryzlink-vlassky.jpg
p_brunclikova-cep.jpg
```

U vína se vyplatí na konec přidat původ (`-hu`, `-cz`), protože stejná
odrůda bývá od víc vinařství a podle samotného `v_cabernet-sauvignon.jpg`
bys za půl roku nepoznal, která lahev to je.

## Na co nezapomenout

- Fotky sem jdou nahrát **přímo přes web GitHubu** (Add file → Upload files).
- Když fotku přejmenuješ nebo přesuneš, **najdi, kde se používá**, jinak na
  stránce zůstane prázdné místo. Teď odsud bere `p_brunclikova-cep.jpg`
  stránka `brunclikova-10_draft_beer.html`.
- Soubory v tomhle repozitáři jsou **veřejné** — co sem nahraješ, je na
  internetu dostupné i bez odkazu.
