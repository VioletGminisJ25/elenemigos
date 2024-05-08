# Review astro webpage
## IDEAS
La idea es hacer que cuando le das click te salga un modal de la card con la reseña y su información y enlazarlo con view transitions api y me imagino que lo más cómodo para este tipo de uso es hacer un archivo de config en el que se meterían la info de la reseña, no se si así y desplegandolo cada cierto tiempo se actualizarían los datos sin necesidad de montar una web con serverside y si es así molaría meter una dirección en la que hay un formulario con el que se puede modificar el archivo más fácil.

## ESQUEMAS
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
