const fs = require("fs");
const User = JSON.parse(fs.readFileSync('./database/user.json'));

/**
 * agregar datos de usuario a la base de datos
 * @param { string } id
 */
const addUser = (id) => {
  let position = false;
    Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = true;
    }
  });
    if (position === false) {
      const obj = { 
          id: id, 
          nama: '-', 
          language: "spanish",
          register: false,
          premium: false, 
          banned: false,
          afk: false,
          afkReason: '-',
          afkTime: '-',
          poin: 0,
          level: 0,
          warn: 0,
        };
        User.push(obj);
        fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
        return false;
    }
};

/**
 * Verifique los datos de usuarios prohibidos en la base de datos
 * @param { string } id 
 */
const cekRegis = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].register;
    }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
*/
const addRegister = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].register = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};
/**
 * Verifique los datos de usuarios prohibidos en la base de datos
 * @param { string } id 
 */
const cekBanned = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].banned;
    }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
*/
const addBanned = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].banned = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
*/
const delBanned = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].banned = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Verifique los datos de usuario premium en la base de datos
 * @param { string } id 
 */
const cekPremium = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].premium;
    }
};


/**
 * cambiar el estado del usuario premium a la base de datos
 * @param { string } id
*/
const addPremium = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].premium = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * cambiar el estado del usuario premium a la base de datos
 * @param { string } id
*/
const delPremium = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].premium = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Verifique los datos de usuario premium en la base de datos
 * @param { string } id 
 */
const cekChatbot = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].chatbot;
    }
};


/**
 * cambiar el estado del usuario del chatbot a la base de datos
 * @param { string } id
*/
const addChatbot = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].chatbot = true;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * cambiar el estado del usuario del chatbot a la base de datos
 * @param { string } id
*/
const delChatbot = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].chatbot = false;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Cek data poin user dalam database
 * @param { string } id 
 */
const cekPoin = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].poin;
    }
};

/**
 * agregar puntos a la base de datos del usuario
 * @param { string } id
*/
const addPoin = (id, value) => {
  let position = false;
  if(!value) {
    value = 1;
  }
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].poin += value;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * reducir poin
 * @param { string } id
*/
const delPoin = (id, value) => {
  let position = false;
  if(!value) {
    value = 1;
  }
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].poin -= value;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


/**
 * Verifique los datos de nivel de usuario en la base de datos
 * @param { string } id 
 */
const cekLevel = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].level;
    }
};

/**
 * agregar nivel a la base de datos del usuario
 * @param { string } id
*/
const addLevel = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].level += 1;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Verifique los datos de afk del usuario en la base de datos
 * @param { string } id 
 */
const cekAfk = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].afk;
    }
};

/**
 * Verifique los datos de afk del usuario en la base de datos
 * @param { string } id 
 */
const cekAfkReason = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].afkReason;
    }
};

/**
 * Verifique los datos de afk del usuario en la base de datos
 * @param { string } id 
 */
const cekAfkTime = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].afkTime;
    }
};


/**
 * agregar datos afk a la base de datos del usuario
 * @param { string } id
 * @param { Object } fecha
 * @param { Object } razón
*/
const addAfk = (id, tanggal, alasan) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].afk = true;
    User[position].afkReason = alasan;
    User[position].afkTime = tanggal;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * eliminar datos de afk en la base de datos del usuario
 * @param { string } id
*/
const delAfk = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].afk = false;
    User[position].afkReason = "-";
    User[position].afkTime = "-";
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * Verifique los datos de usuarios prohibidos en la base de datos
 * @param { string } id 
 */
const cekWarn = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].warn;
    }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
*/
const addWarn = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].warn += 1
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};

/**
 * cambiar el estado del usuario prohibido en la base de datos
 * @param { string } id
 * @param { number } Monto
*/
const delWarn = (id, jumlah) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].warn -= jumlah;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


/**
 * Verifique todos los datos del usuario en la base de datos
 * @param { string } id 
 */
const cekUser = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    result = {
      id: User[position].id, 
      premium: User[position].premium, 
      banned: User[position].banned,
      afk: User[position].afk,
      afkReason: User[position].afkReason,
      afkTime: User[position].afkTime,
      poin: User[position].poin,
      level: User[position].level,
      warn: User[position].warn,
    };
    return result;
    }
};


/**
 * Verifique los datos del idioma del usuario en la base de datos
 * @param { string } id 
 */
const cekBahasa = (id) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    return User[position].language
    }
};


/**
 * Verifique los datos del idioma del usuario en la base de datos
 * @param { string } id 
 * @param { Object } idioma
*/
const addBahasa = (id, bahasa) => {
  let position = false;
  Object.keys(User).forEach((i) => {
    if (User[i].id === id) {
      position = i;
    }
  });
  if (position !== false) {
    User[position].language = bahasa;
    fs.writeFileSync('./database/user.json', JSON.stringify(User, null, "\t"));
  }
};


module.exports = {
  User, 
  cekRegis,
  addRegister,
  addUser, 
  cekUser,
  cekPoin, 
  addPoin, 
  delPoin, 
  addLevel,
  cekLevel,
  cekBanned, 
  addBanned, 
  delBanned,
  cekPremium,
  addPremium,
  delPremium,
  addChatbot,
  delChatbot,
  cekChatbot,
  addAfk,
  delAfk,
  cekAfk,
  cekAfkReason,
  cekAfkTime,
  addWarn,
  delWarn,
  cekWarn,
  addBahasa,
  cekBahasa
 };
 
 /**
  * todas las funciones no son perfectas, si encuentra errores / errores por escrito, corríjalo
  * @turbo._
  */
