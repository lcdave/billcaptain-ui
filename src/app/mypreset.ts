import {definePreset} from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}'
    },
    surface: {
      50: '{stone.50}',
      100: '{stone.100}',
      200: '{stone.200}',
      300: '{stone.300}',
      400: '{stone.400}',
      500: '{stone.500}',
      600: '{stone.600}',
      700: '{stone.700}',
      800: '{stone.800}',
      900: '{stone.900}',
      950: '{stone.950}'
    }
  }
});

export default MyPreset;
