# Pasta de Imagens — Integrade Consulting

Coloque aqui todas as imagens do site institucional (logos, fotos de produtos,
ícones, imagens de fundo, etc.).

## Como usar as imagens

Tudo que fica dentro de `public/` é servido a partir da raiz do site.
Ou seja, um arquivo salvo em:

```
public/images/logo-integrade.png
```

é acessível no navegador pela URL:

```
/images/logo-integrade.png
```

## Referenciando no código (React / JSX)

Use o caminho **absoluto começando com `/images/`** (sem `public` na frente):

```jsx
// <img> simples
<img src="/images/logo-integrade.png" alt="Integrade Consulting" />

// imagem com classes do Tailwind
<img
  src="/images/banner-inventario.jpg"
  alt="Serviço de inventário patrimonial"
  className="w-full h-64 object-cover rounded-xl"
/>

// em CSS / background inline
<div style={{ backgroundImage: "url('/images/bg-hero.jpg')" }} />
```

## Convenções sugeridas

- Use nomes em minúsculas, separados por hífen (ex.: `logo-integrade.svg`)
- Prefira **SVG** para logos e ícones (escalável e leve)
- Otimize JPG/PNG antes de subir (ferramentas como TinyPNG)
- Formatos recomendados: `.svg`, `.png`, `.webp`, `.jpg`

## Subpastas (opcional)

```
public/images/logos/
public/images/produtos/
public/images/clientes/
public/images/fundos/
```

Exemplo de referência: `/images/logos/logo-integrade.svg`
