import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caratValue',
  standalone: true
})
export class CaratValuePipe implements PipeTransform {
  private pricePerCarat = 100;

  transform(caratWeight: number): string {
    if (isNaN(caratWeight) || caratWeight <= 0) {
      return 'N/A';
    }
    const estimatedValue = caratWeight * this.pricePerCarat;
    return `$${estimatedValue.toFixed(2)}`;
  }
}
