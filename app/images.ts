export function imagePath(name: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/${name}.webp`;
}
