export function getFilename(filename: string) {
  return filename.split('/').pop();
}

export function getContentType(filename: string): string {
  switch (filename.split('.').pop()) {
    case 'jpg':
      return 'jpeg';
    default:
      return 'jpeg';
  }
}
