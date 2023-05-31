import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filsize',
})
export class FilsizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB'): string {
    return (size / 10).toFixed(2) + extension;
  }
}
