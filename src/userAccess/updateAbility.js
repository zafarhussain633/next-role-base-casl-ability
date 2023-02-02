import { AbilityBuilder, Ability } from '@casl/ability';


function updateAbility(ability, role) {
   
    const { can, rules } = new AbilityBuilder(Ability);
  
    if (role === 'admin') {
      can('visit', 'planpage');
    } else {
      cannot('visit', 'planpage');
    }
  
    ability.update(rules);
}

export default updateAbility;