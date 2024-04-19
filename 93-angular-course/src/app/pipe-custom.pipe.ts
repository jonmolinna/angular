import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustom',
})
export class PipeCustomPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    return value?.toUpperCase() || '';
  }
}
