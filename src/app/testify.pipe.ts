import { Interpolation } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testify'
})
export class TestifyPipe implements PipeTransform {

  transform(value: string): string {
    const val = parseInt(value);

    if(val < 500)
        return ".. below 500: " + value
      else
        return ".. above 500: " + value

  }

}

// WE THEN PIPE THIS FUNCTION INTO THE Interpolation in the TEMPLATE - WITH JUST THE NAME AND PIPE SYMBOL - SEE TEMPLATE!!