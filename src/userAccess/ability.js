import { defineAbility } from '@casl/ability';

export default defineAbility((can, cannot) => {
    
    can('visit', 'planpage');

});