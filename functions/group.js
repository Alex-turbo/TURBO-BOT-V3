const fs = require("fs");
const Group = JSON.parse(fs.readFileSync('./database/group.json'));

/**
 * agregar grupo de datos a la base de datos
 * @param { string } id
 */
const addGroup = (id) => {
  let position = false;
    Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = true;
    }
  });
    if (position === false) {
      const obj = { 
          from: id, 
          offline: false, 
          welcome: false, 
          antilink: false,
          badword: false,
          antidelete: false,
          detect: false,
          viewOnce: false,
        };
        Group.push(obj);
        fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
        return false;
    }
};

/**
 * Verifique los datos fuera de línea en la base de datos
 * @param { string } id 
 */
const cekOffline = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].offline;
    }
};

/**
 * cambiar el estado fuera de línea a la base de datos
 * @param { string } id
*/
const addOffline = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].offline = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado fuera de línea a la base de datos
 * @param { string } id
*/
const delOffline = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].offline = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Consulta los datos de bienvenida en la base de datos.
 * @param { string } id 
 */
const cekWelcome = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].welcome;
    }
};

/**
 * cambiar el estado de bienvenida a la base de datos
 * @param { string } id
*/
const addWelcome = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].welcome = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado de bienvenida a la base de datos
 * @param { string } id
*/
const delWelcome = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].welcome = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};
/**
 * Comprobar detectar datos en la base de datos
 * @param { string } id 
 */
const cekDetect = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].detect;
    }
};

/**
 * cambiar el estado de detección en la base de datos
 * @param { string } id
*/
const addDetect = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].detect = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado de detección en la base de datos
 * @param { string } id
*/
const delDetect = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].detect = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Verifique los datos antienlace en la base de datos
 * @param { string } id 
 */
const cekAntilink = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].antilink;
    }
};

/**
 * cambiar el estado de antienlace a la base de datos
 * @param { string } id
*/
const addAntilink = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antilink = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado de antienlace a la base de datos
 * @param { string } id
*/
const delAntilink = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antilink = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Verifique los datos de palabras incorrectas en la base de datos
 * @param { string } id 
 */
const cekBadword = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].badword;
    }
};

/**
 * cambiar el estado de badword en la base de datos
 * @param { string } id
*/
const addBadword = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].badword = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado de badword en la base de datos
 * @param { string } id
*/
const delBadword = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].badword = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Verifique los datos antidelete en la base de datos
 * @param { string } id 
 */
const cekAntidelete = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].antidelete;
    }
};

/**
 * cambiar el estado antidelete a la base de datos
 * @param { string } id
*/
const addAntidelete = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antidelete = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado antidelete a la base de datos
 * @param { string } id
*/
const delAntidelete = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].antidelete = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * Verifique los datos anti viewOnce en la base de datos
 * @param { string } id 
 */
const cekViewonce = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    return Group[position].viewOnce;
    }
};

/**
 * cambiar el estado anti viewOnce a la base de datos
 * @param { string } id
*/
const addViewonce = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].viewOnce = true;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
};

/**
 * cambiar el estado antidelete a la base de datos
 * @param { string } id
*/
const delViewonce = (id) => {
  let position = false;
  Object.keys(Group).forEach((i) => {
    if (Group[i].from === id) {
      position = i;
    }
  });
  if (position !== false) {
    Group[position].viewOnce = false;
    fs.writeFileSync('./database/group.json', JSON.stringify(Group, null, "\t"));
  }
}; 

module.exports = {
  Group,
  addGroup,
  addOffline,
  delOffline,
  cekOffline,
  addWelcome,
  delWelcome,
  cekWelcome,
  addAntilink,
  delAntilink,
  cekAntilink,
  addBadword,
  delBadword,
  cekBadword,
  addAntidelete,
  delAntidelete,
  cekAntidelete,
  addDetect,
  delDetect,
  cekDetect,
  addViewonce,
  delViewonce,
  cekViewonce
};
