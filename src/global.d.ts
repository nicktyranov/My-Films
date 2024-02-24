// declare module '*.module.css';
// custom.d.ts

// Для SVG файлов
declare module '*.svg' {
  const content: string;
  export default content;
}

// Для изображений
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

// Для CSS модулей
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
