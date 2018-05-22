import { AbstractControl } from '@angular/forms';


export class TestValidators {
  static selectOneOrMoreMedia(control: AbstractControl) {
    const groundWater = control.get('groundWater');
    const surfaceWater = control.get('surfaceWater');
    const drinkingWater = control.get('drinkingWater');
    const soil = control.get('soil');
    const vapor = control.get('vapor');
    const freeProduct = control.get('freeProduct');

    // console.error('************selectOneOrMoreMedia');
    // console.error(groundWater.value + surfaceWater.value + drinkingWater.value + soil.value + vapor.value + freeProduct.value);

    if (groundWater.value || surfaceWater.value || drinkingWater.value || soil.value || vapor.value || freeProduct.value ) {
      // console.error('************selectOneOrMoreMedia at least one value checked');
      return null;
    } else {
      // console.error('************selectOneOrMoreMedia no value checked');
      return {
          selectOneOrMoreMedias: true
      };
    }
    // return email.value === confirm.value ? null : { nomatch: true };
  }

  static selectOneOrMoreContaminants(control: AbstractControl) {

    // return (c: AbstractControl): {[key: string]: any} => {
    //     if (c.value.length >= min) {
    //         return null;
    //     }

    //     return { 'minLengthArray': {valid: false }};
    // }
    const heatingOil = control.get('heatingOil');
    const unleadedGas = control.get('unleadedGas');

    console.log('heatingOil');
    console.log(heatingOil);
    // const leadedGas = control.get('leadedGas');
    // const misGas = control.get('misGas');
    // const diesel = control.get('diesel');
    // const wasteOil = control.get('wasteOil');
    // const lubricant = control.get('lubricant');
    // const solvent = control.get('solvent');
    // const otherPet = control.get('otherPet');
    // const chemical = control.get('chemical');
    // const unknown = control.get('unknown');
    // const mtbe = control.get('mtbe');

    // if (heatingOil.value || unleadedGas.value || leadedGas.value || misGas.value || diesel.value || wasteOil.value
    //     || lubricant.value || solvent.value || otherPet.value || chemical.value || unknown.value || mtbe.value ) {
    //     // console.error('************selectOneOrMoreMedia at least one value checked');

    // console.error('************selectOneOrMoreContaminants');
    if (heatingOil.value || unleadedGas.value ) {
      // console.error('************selectOneOrMoreMedia at least one value checked');
      return null;
    } else {
      return { selectOneOrMoreContaminants: true};
    }
    // return email.value === confirm.value ? null : { nomatch: true };
  }
}
