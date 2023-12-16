const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null || members == undefined) {
    return false;
  }
  let team = '';

  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      members[i] = members[i].replace(' ', '').trim();
    }
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      team += members[i][0].toUpperCase();
    }
  }

  if (team.length === 0) {
    return false;
  }

  let newTeam = team.split('');
  newTeam.sort();
  let dreamTeam = newTeam.join('');

  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
