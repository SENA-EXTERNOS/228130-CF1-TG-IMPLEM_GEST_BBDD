(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema1"],{"02c8":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),t("p",[e._v("Las bases de datos son un sistema de información importante para las organizaciones, ya que provee el almacenamiento de registros organizados de manera digital; desde las grandes aplicaciones multiusuario hasta los teléfonos móviles y agendas electrónicas utilizan bases de datos como un elemento fundamental en el desarrollo comercial; es decir, con los datos se pueden realizar ventas, compras o suministrar información de un lugar.")]),e._m(1),t("p",[e._v("Los servicios permiten que una BD sea de alta calidad, con información actualizada, capaz de ofrecer datos que permitan el análisis y el comercio entre los usuarios.")]),t("Separador"),e._m(2),t("div",{staticClass:"bloque-texto-g color-secundario p-3 p-sm-4 p-md-4 mb-5"},[t("div",{staticClass:"row m-0 align-items-center justify-content-between"},[t("div",{staticClass:"col-lg-3 mb-4 mb-lg-0"},[t("div",{staticClass:"bloque-texto-g__img",style:{"background-image":"url("+s("b1c6")+")"},attrs:{"data-aos":"fade-right"}})]),e._m(3)])]),e._m(4),t("p",[e._v("Al hablar de control de concurrencia en las aplicaciones, primordialmente sobre el inicio y el fin de las transacciones de datos que se pueden ejecutar, al mismo tiempo, se evitan bloqueos que se pudieran dar durante su ejecución. El acceso compartido de los datos que realizan estas transacciones simultáneas, puede transferir, como resultado, información inconsistente, generando incoherencias en estos datos o, simplemente, causando la pérdida de los mismos, aportando, aleatoriamente, el resultado que se puede dar en el proceso de las lecturas y escrituras simultáneas. Esta situación ha llevado a diseñar e implementar diferentes estrategias de control de concurrencia de datos, las cuales se encargan de evitar los problemas descritos, de modo que estos procesos de control, se crean transparentes para los desarrolladores de las aplicaciones, en el momento de escribir su código.")]),t("p",[e._v("Veamos este ejemplo de una compra si tenemos una estructura de tablas relacional que incluye la siguiente forma:")]),e._m(5),t("p",[e._v("Cuando se registre un proceso en la BD, pueden ocurrir diferentes problemas relacionados con la escritura simultánea o lecturas, incluyendo los siguientes:")]),t("div",{staticClass:"col-lg-10 mx-auto mb-5"},[t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-10"},[t("div",{staticClass:"tarjeta--boton p-4"},[t("div",{staticClass:"row justify-content-center mb-3"},[t("div",{staticClass:"col-3"},[t("figure",[t("img",{staticClass:"riddle",attrs:{src:e.rid1,alt:"signos de interrogación"},on:{mouseover:function(a){e.rid1=e.f3inv},mouseleave:function(a){e.rid1=e.f3}}})])])]),t("p",[e._v("Dos sentencias UPDATE que actualicen un mismo producto reduciendo el proceso del mismo a una unidad, podrían terminar en que una de ellas no finalice la operación. Si pensamos en un UPDATE como una sucesión de una lectura y una escritura, puede que ambos UPDATE hagan la lectura; por ejemplo, de una acción de 10 segundos y después las escrituras, decrementan ese dato, quedando el resultado en 9 segundos, mientras que lo correcto era un resultado de 8 segundos.")]),t("p",[e._v("Si tenemos una sentencia que primero comprueba que hay una transacción del producto P, y después inserta un nuevo PEDIDO de diez unidades del producto P, que tiene un proceso de 10 segundos, seguido de un UPDATE al proceso por esa cantidad. Puede que otra inserción de un pedido se ejecute antes del UPDATE seguido de la comprobación, realizando quedar el proceso del producto en negativo.")])])])])]),e._m(6),t("p",[e._v("Ocurre cuando dos transacciones distintas intentan acceder concurrentemente a los mismos datos, por lo que es posible que se presenten los siguientes casos:")]),t("TabsB",{staticClass:"color-acento-contenido mb-5",staticStyle:{"background-color":"#ECF6FE !important"}},[t("div",{staticClass:"tarjetacolor-acento-botones--borde p-4",attrs:{titulo:"<em>Dirty Read</em> <b>(Lectura sucia)</b>"}},[t("p",[e._v("Se presenta cuando una segunda transacción lee datos que están siendo actualizados por una transacción antes de que haga"),t("em",[e._v("COMMIT")]),e._v(".")]),t("div",{staticClass:"tabla-a color-acento-contenido mb-5 fblanco"},[t("table",[t("thead",[t("tr",[t("th",[e._v("Transacción 1")]),t("th",[e._v("Transacción 2")])])]),t("tbody",[t("tr",[t("td",[t("em",[e._v("UPDATE")]),e._v("cuentas"),t("em",[e._v("SET")]),e._v("saldo = saldo - 300"),t("em",[e._v("WHERE")]),e._v("id = 1;")]),t("td")]),t("tr",[t("td"),t("td",[t("em",[e._v("SELECT")]),e._v("saldo"),t("em",[e._v("FROM")]),e._v("cuentas"),t("em",[e._v("WHERE")]),e._v("id = 1;")])]),t("tr",[t("td",[t("em",[e._v("SELECT")]),e._v("saldo"),t("em",[e._v("FROM")]),e._v("cuentas"),t("em",[e._v("WHERE")]),e._v("id = 1;")]),t("td")])])])])]),t("div",{staticClass:"tarjetacolor-acento-botones--borde p-4",attrs:{titulo:"<em>Non-Repeatable Read</em> <b>(Lectura No Repetible)</b>"}},[t("p",[e._v("Se presenta cuando una transacción hace la consulta al mismo dato dos veces durante una ejecución de la transacción y la segunda vez encuentra que el valor del dato ha sido modificado por otra transacción.")]),t("div",{staticClass:"tabla-a color-acento-contenido mb-5 fblanco"},[t("table",[t("thead",[t("tr",[t("th",[e._v("Transacción 1")]),t("th",[e._v("Transacción 2")])])]),t("tbody",[t("tr",[t("td",[t("em",[e._v("SELECT")]),e._v("saldo"),t("em",[e._v("FROM")]),e._v("cuenta"),t("em",[e._v("WHERE")]),e._v("id = 1;")]),t("td")]),t("tr",[t("td"),t("td",[t("em",[e._v("UPDATE")]),e._v("CUENTAS"),t("em",[e._v("SET")]),e._v("saldo = saldo - 200"),t("em",[e._v("WHERE")]),e._v("id = 1;")])]),t("tr",[t("td",[t("em",[e._v("SELECT")]),e._v("saldo"),t("em",[e._v("FROM")]),e._v("cuentas"),t("em",[e._v("WHERE")]),e._v("id = 1;")]),t("td")])])])])]),t("div",{staticClass:"tarjetacolor-acento-botones--borde p-4",attrs:{titulo:"<em>Phantom Read</em> <b>(Lectura fantasma)</b>"}},[t("p",[e._v("Se produce este error cuando una transacción registra dos veces una consulta, devuelve un conjunto de filas y en la segunda ejecución de la consulta registra nuevas filas en el conjunto que no existían cuando se inició la transacción.")]),t("div",{staticClass:"tabla-a color-acento-contenido mb-5 fblanco"},[t("table",[t("thead",[t("tr",[t("th",[e._v("Transacción 1")]),t("th",[e._v("Transacción 2")])])]),t("tbody",[t("tr",[t("td",[t("em",[e._v("SELECT SUM")]),e._v("(saldos)"),t("em",[e._v("FROM")]),e._v("cuenta;")]),t("td")]),t("tr",[t("td"),t("td",[t("em",[e._v("INSERT INTO")]),e._v("cuentas"),t("em",[e._v("VALUES")]),e._v("(2, 9000);")])]),t("tr",[t("td",[t("em",[e._v("SELECT SUM")]),e._v("(saldos)"),t("em",[e._v("FROM")]),e._v("cuenta;")]),t("td")])])])])])]),e._m(7),t("p",[e._v("Dentro de las técnicas más utilizadas, se encuentran los bloqueos, como también el control multiversión y las marcas de tiempo:")]),e._m(8),e._m(9),t("Separador"),e._m(10),e._m(11),t("div",{staticClass:"row justify-content-center mb-5"},[e._m(12),t("div",{staticClass:"col-lg-7"},[t("LineaTiempoD",{staticClass:"color-acento-botones"},[t("div",{attrs:{numero:"1",titulo:"Para conectar con bases de datos"}},[t("ol",{staticClass:"lista-ol"},[t("li",[t("p",{staticClass:"mb-0"},[t("span",{staticClass:"text-bold"},[e._v("a.")]),e._v("Descargar e instalar el"),t("em",[e._v("appserv")]),e._v("(Ojo como el usuario será root pueden colocar"),t("em",[e._v("Password")]),e._v("root1234):"),t("a",{attrs:{href:"https://sourceforge.net/projects/appserv/files/AppServ%20Open%20Project/8.5.0/appserv-win32-8.5.0.exe/download?use_mirror=gigenet&download=",target:"_blank"}},[e._v("descargar"),t("em",[e._v("AppServ")])])])]),t("li",[t("p",{staticClass:"mb-0"},[t("span",{staticClass:"text-bold"},[e._v("b.")]),e._v("Ver video de instalación:"),t("a",{attrs:{href:"https://www.youtube.com/watch?v=L2mMMevapSk",target:"_blank"}},[e._v("https://www.youtube.com/watch?v=L2mMMevapSk")])])])])]),t("div",{attrs:{numero:"2",titulo:"Descargar e instalar <em>mysqlworkbench</em>"}},[t("a",{attrs:{href:"https://downloads.mysql.com/archives/workbench/",target:"_blank"}},[e._v("https://downloads.mysql.com/archives/workbench/")])]),t("div",{attrs:{numero:"3",titulo:"Ver video de instalación"}},[t("a",{attrs:{href:"https://www.youtube.com/watch?v=fBogDpofRiQ",target:"_blank"}},[e._v("https://www.youtube.com/watch?v=fBogDpofRiQ")])]),t("div",{attrs:{numero:"4",titulo:"Importante"}},[t("p",[e._v("Es posible que"),t("em",[e._v("MySQLworkbench")]),e._v("le salga que no se puede instalar porque no tiene"),t("em",[e._v("Visual C++")]),e._v("entonces instalarlo.")]),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=fBogDpofRiQ",target:"_blank"}},[e._v("https://www.youtube.com/watch?v=fBogDpofRiQ")])])])])],1)]),e._m(13),t("p",[e._v("Veamos las definiciones al respecto de cada base de datos:")]),t("div",{staticClass:"col-md-8 mx-auto mb-5"},[t("ImagenInfografica",{staticClass:"color-acento-contenido mb-5",scopedSlots:e._u([{key:"imagen",fn:function(){return[t("figure",[t("img",{attrs:{src:s("0ddd"),alt:"imagen relacionada"}})])]},proxy:!0}])},[t("div",{staticClass:"tarjeta color-acento-contenido p-3",attrs:{x:"10%",y:"40%",numero:"1"}},[t("div",{staticClass:"h5 mb-2"},[e._v("BD SQL")]),t("p",[e._v("“Una base de datos es un conjunto de datos almacenados en memoria externa que están organizados mediante una estructura de datos. Cada base de datos ha sido diseñada para satisfacer los requisitos de información de una empresa u otro tipo de organización como, por ejemplo, una universidad o un hospital”. (Marqués, 2009).")])]),t("div",{staticClass:"tarjeta color-acento-contenido p-3",attrs:{x:"73%",y:"32%",numero:"2"}},[t("div",{staticClass:"h5 mb-2"},[e._v("BD NoSQL")]),t("p",[e._v("Cuando se habla de bases de datos “NoSQL” se refiere a tipos de bases de datos no relacionales que almacenan datos de forma distinta a las tablas relacionales. Adicionalmente, las bases de datos NoSQL se pueden consultar utilizando API (aplicación web que permite realizar búsquedas de información) de lenguaje natural, lenguajes de consulta estructurados declarativos y lenguajes de consulta mediante ejemplo, también se les llama bases de datos “no solo SQL”; es decir, que una base de datos NoSQL hace las consultas en archivos o documentos, gráficos o en Bases SQL.")])])])],1),e._m(14),e._m(15),e._m(16),e._m(17),e._m(18),t("p",[e._v("A continuación, comprenderemos los diferentes tipos de seguridad, que existen en las bases de datos:")]),t("div",{staticClass:"row justify-content-center mb-5"},[e._m(19),t("div",{staticClass:"col-lg-8"},[t("AcordionA",{staticClass:"mb-5",attrs:{tipo:"a","clase-tarjeta":"tarjeta tarjeta--gris"}},[t("div",{attrs:{titulo:"Seguridad física"}},[t("p",[e._v("Cuando el servidor de bases de datos es local o en un centro de datos en la nube, es imprescindible que esté dentro de un entorno seguro y con control de clima, es decir, que este en un cuarto con acceso restringido al público y su temperatura este entre 17 °C o 21 °C. Por otra parte, si el servidor de bases de datos está en un centro de datos de nube, el proveedor será el encargado de ello.")])]),t("div",{attrs:{titulo:"Controles de acceso administrativo y de red"}},[t("p",[e._v("Cuando se habla de control de acceso decimos que es la cantidad de usuarios que acceden a la base de datos. Como medida de protección de datos es aconsejable tener el mínimo de usuarios que operen la base de datos y sus permisos deben limitarse a los niveles mínimos necesarios donde podrán realizar sus trabajos. Adicionalmente, el acceso a la red debe estar limitada al nivel mínimo de permisos necesarios, esto con el fin que los usuarios no realicen acciones que no estén dentro de su trabajo.")])]),t("div",{attrs:{titulo:"Seguridad de cuenta/dispositivo de usuario final"}},[t("p",[e._v("Se debe tener la información de quién accede a la base de datos, en qué momento y de qué forma se utiliza su contenido. Supervisar la información, puede alertar si las actividades de la gestión de los datos no son comunes, o parecen arriesgadas. Todas las cuentas y los dispositivos de usuario que se conectan con la red que aloja la base de datos, deben ser físicamente seguros, es decir, que los usuarios conozcan lo que están haciendo, para no tener pérdida de información o inconsistencia de registros.")])]),t("div",{attrs:{titulo:"Cifrado"}},[t("p",[e._v("Es una parte muy importante de la seguridad de datos, deben estar cifrados los datos de la base de datos y los datos de credenciales, adicionalmente, se deberán proteger con el mejor cifrado mientras no estén operando o en tránsito.")])]),t("div",{attrs:{titulo:"Seguridad de <em>software</em> de base de datos"}},[t("p",[e._v("Es importante utilizar la última versión del"),t("em",[e._v("software")]),e._v("de gestión de bases de datos aplicando los parches cuando sean suministrados por el proveedor.")])]),t("div",{attrs:{titulo:"Seguridad del servidor de aplicaciones/<em>web</em>"}},[t("p",[e._v("Cualquier aplicación o servidor web que interactúen con la base de datos, están susceptibles a los ataques y deben estar supervisados de manera constante, para pruebas de seguridad, acompañadas de las mejores prácticas.")])]),t("div",{attrs:{titulo:"Seguridad de copia"}},[t("p",[e._v("Para una buena gestión de la información, las copias de seguridad, copias o imágenes de la base de datos deben estar sujetas a los mismos controles de seguridad, estas deben estar registradas en una bitácora de registro donde indique fecha en la que se va a registrar la copia durante el año en curso.")])]),t("div",{attrs:{titulo:"Auditoría"}},[t("p",[e._v("Los formatos deben hacer parte del administrador de bases de datos, esto con el fin de registrar todos los inicios de sesión en el servidor de bases de datos y el sistema operativo también debe registrar las operaciones realizadas en datos confidenciales. Las auditorías estándar de seguridad de base de datos deben realizarse regularmente, anualmente o antes, si hay registros de fugas de información.")])])])],1)]),e._m(20),t("p",[e._v("A continuación, veamos el video el cual explicará con detalle, la creación de usuarios en una base de datos NoSQL en MongoDB:")]),e._m(21),t("div",{staticClass:"col-lg-10 mx-auto"},[t("div",{staticClass:"tarjeta color-primario grbg1 p-4 mb-5"},[t("div",{staticClass:"row justify-content-around align-items-center"},[e._m(22),t("div",{staticClass:"col-auto"},[t("div",{staticClass:"row justify-content-between align-items-center"},[e._m(23),t("div",{staticClass:"col mb-3 mb-sm-0"},[t("a",{staticClass:"boton color-acento-botones",attrs:{href:e.obtenerLink("downloads/ProcesodeinstalaciondeMongoDB.pdf"),target:"_blank",type:"application/pdf"}},[t("span",{staticStyle:{color:"#12263F !important"}},[e._v("Descargar")]),t("i",{staticClass:"fas fa-file-download",staticStyle:{color:"#12263F !important"}})])])])])])])]),t("Separador"),e._m(24),e._m(25),t("div",{staticClass:"row justify-content-center mb-5"},[e._m(26),t("div",{staticClass:"col-lg-8"},[t("AcordionA",{staticClass:"mb-5",attrs:{tipo:"a","clase-tarjeta":"tarjeta tarjeta--gris"}},[t("div",{attrs:{titulo:"<em>updateUser</em>"}},[t("p",[e._v("El usuario puede cambiar la información personalizada de cualquier usuario en la base de datos dada. Aplique esta acción a los recursos de la base de datos;")]),t("code",[e._v("{"),t("br"),e._v(" updateUser: “<Nombre del usuario>”,"),t("br"),e._v(" pwd: passwordPrompt(), // Or “<método que solicita password>”"),t("br"),e._v(" customData: { <any information> },"),t("br"),e._v(" roles: ["),t("br"),e._v("  { role: “<role>”, db: “<database>” } | “<role>”,"),t("br"),e._v("  ..."),t("br"),e._v("  ],"),t("br"),e._v(" authenticationRestrictions: ["),t("br"),e._v("  {"),t("br"),e._v("  clientSource: [”<IP>” | “<CIDR range>”, ...],"),t("br"),e._v("  serverAddress: [”<IP>”, | “<CIDR range>”, ...]"),t("br"),e._v("  },"),t("br"),e._v("  ..."),t("br"),e._v("  ],"),t("br"),e._v(" mechanisms: [ “<scram-mechanism>”, ... ],"),t("br"),e._v(" digestPassword: <boolean>,"),t("br"),e._v(" writeConcern: { <write concern> },"),t("br"),e._v(" comment: <any>"),t("br"),e._v("}")])]),t("div",{attrs:{titulo:"<em>changePassword</em>"}},[t("p",[e._v("El usuario puede cambiar la contraseña de cualquier usuario en la base de datos dada. Aplique esta acción a los recursos de la base de datos ingresando el siguiente comando; ojo, recuerde que debemos estar en las bases de datos admin de MongoDB para hacer este cambio;"),t("em",[e._v("db.changeUserPassword(“admin”, passwordPrompt())")]),e._v(", cuando solicite el"),t("em",[e._v("password")]),e._v("registrar el nuevo para hacer el cambio.")])]),t("div",{attrs:{titulo:"<em>createRole</em>"}},[t("p",[e._v("Crea un rol y especifica sus privilegios. El rol se aplica a la base de datos en la que ejecuta el comando. El createRole comando devuelve un error de rol duplicado si el rol ya existe en la base de datos.")]),t("p",[e._v("El createRole comando utiliza la siguiente sintaxis:")]),t("code",[e._v("db.adminCommand({ createRole: “myClusterwideAdmin”,"),t("br"),e._v(" privileges: ["),t("br"),e._v("  { resource: { cluster: true }, actions: [ “addShard” ] },"),t("br"),e._v("  { resource: { db: “config”, collection: “” }, actions: [ “find”, “update”, “insert”, “remove” ] },"),t("br"),e._v("  { resource: { db: “users”, collection: “usersCollection” }, actions: [ “update”, “insert”, “remove” ] },"),t("br"),e._v("  { resource: { db: “”, collection: “” }, actions: [ “find” ] }"),t("br"),e._v(" ],"),t("br"),e._v(" roles: ["),t("br"),e._v("  { role: “read”, db: “admin” }"),t("br"),e._v(" ],"),t("br"),e._v(" writeConcern: { w: “majority” , wtimeout: 5000 }"),t("br"),e._v("})")])]),t("div",{attrs:{titulo:"<em>createUser</em>"}},[t("p",[e._v("El usuario puede crear nuevos usuarios en la base de datos dada. Aplique esta acción a los recursos de la base de datos.")]),t("code",[e._v("db.getSiblingDB(“admin”).runCommand( {"),t("br"),e._v("  createUser: “accountAdmin01”,"),t("br"),e._v("  pwd: passwordPrompt(),"),t("br"),e._v("  customData: { employeeId: 12345 },"),t("br"),e._v("    roles: ["),t("br"),e._v("      { role: “clusterAdmin”, db: “admin” },"),t("br"),e._v("      { role: “readAnyDatabase”, db: “admin” },"),t("br"),e._v("      “readWrite”"),t("br"),e._v("    ],"),t("br"),e._v("    writeConcern: { w: “majority” , wtimeout: 5000 }"),t("br"),e._v("    } )")])]),t("div",{attrs:{titulo:"<em>dropRole</em>"}},[t("p",[e._v("El usuario puede eliminar cualquier rol de la base de datos dada. Aplique esta acción a los recursos de la base de datos, con la siguiente sintaxis:")]),t("code",[e._v("use admin"),t("br"),e._v("db.runCommand("),t("br"),e._v("  {"),t("br"),e._v("    dropRole: “readPrices”,"),t("br"),e._v("    writeConcern: { w: “majority” }"),t("br"),e._v("  }"),t("br"),e._v(")")])]),t("div",{attrs:{titulo:"<em>dropUser</em>"}},[t("p",[e._v("El usuario puede eliminar a cualquier usuario de la base de datos dada. Aplique esta acción a los recursos de la base de datos.")]),t("code",[e._v("use admin"),t("br"),e._v("  db.runCommand( {"),t("br"),e._v("  dropUser: “admin”,"),t("br"),e._v("  writeConcern: { w: “majority”, wtimeout: 5000 }"),t("br"),e._v("  } )")])]),t("div",{attrs:{titulo:"<em>grantRole</em>"}},[t("p",[e._v("El usuario puede otorgar cualquier rol en la base de datos a cualquier usuario de cualquier base de datos del sistema. Aplique esta acción a los recursos de la base de datos.")]),t("code",[e._v("use admin"),t("br"),e._v("db.grantPrivilegesToRole("),t("br"),e._v("  “inventoryCntrl01”,"),t("br"),e._v("    ["),t("br"),e._v("      {"),t("br"),e._v("      resource: { db: “admin”, collection: “” },"),t("br"),e._v("      actions: [ “insert” ]"),t("br"),e._v("      },"),t("br"),e._v("      {"),t("br"),e._v("      resource: { db: “admin”, collection: “system.js” },"),t("br"),e._v("      actions: [ “find” ]"),t("br"),e._v("      }"),t("br"),e._v("    ],"),t("br"),e._v("  { w: “majority” }"),t("br"),e._v(")")])]),t("div",{attrs:{titulo:"<em>revokeRole</em>"}},[t("p",[e._v("El usuario puede eliminar cualquier rol de cualquier usuario de cualquier base de datos del sistema. Aplique esta acción a los recursos de la base de datos.")]),t("code",[e._v("db.revokePrivilegesFromRole("),t("br"),e._v("  “associate”,"),t("br"),e._v("  ["),t("br"),e._v("    {"),t("br"),e._v("      resource: { db: “admin”, collection: “” },"),t("br"),e._v("      actions: [ “createCollection”, “createIndex”, “find” ]"),t("br"),e._v("    }"),t("br"),e._v("  ],"),t("br"),e._v("  { w: “majority” }"),t("br"),e._v(")")])]),t("div",{attrs:{titulo:"<em>setAuthenticationRestriction</em>"}},[t("p",[e._v("El usuario puede especificar el campo de restricciones de autenticación en el userdocumento al ejecutar los siguientes comandos:")]),t("ul",{staticClass:"lista-ul--color"},[t("li",[t("i",{staticClass:"fas fa-check"}),e._v("Crear usuario.")]),t("li",[t("i",{staticClass:"fas fa-check"}),e._v("Actualizar usuario.")])])]),t("div",{attrs:{titulo:"<em>viewRole</em>"}},[t("p",[e._v("El usuario puede ver información sobre cualquier rol en la base de datos dada. Aplique esta acción a los recursos de la base de datos.")]),t("code",[e._v("db.getRoles("),t("br"),e._v("  {"),t("br"),e._v("    rolesInfo: 1,"),t("br"),e._v("    showPrivileges:true,"),t("br"),e._v("    showBuiltinRoles: true"),t("br"),e._v("  }"),t("br"),e._v(")")])]),t("div",{attrs:{titulo:"<em>viewUser</em>"}},[t("p",[e._v("El usuario puede ver la información de cualquier usuario en la base de datos dada. Aplique esta acción a los recursos de la base de datos indicamos el siguiente comando en la consola:")]),t("ul",{staticClass:"lista-ul--color"},[t("li",[t("i",{staticClass:"fas fa-check"}),t("code",[e._v("db.getUsers({ filter: { mechanisms: “SCRAM-SHA-256” } })")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("code",[e._v("db.getUsers()")])])])])])],1)])],1)],1)},o=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-principal color-acento-contenido"},[s("div",{staticClass:"titulo-principal__numero"},[s("span",[e._v("1")])]),s("h1",[e._v("Servicios de BD")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bloque-texto-a color-acento-botones p-4 p-md-4 mb-5"},[t("div",{staticClass:"row m-0 align-items-center justify-content-between"},[t("div",{staticClass:"col-lg-8"},[t("div",{staticClass:"contenedor-dashed p-4"},[t("div",{staticClass:"bloque-texto-a__texto p-4 border"},[t("p",[e._v("Los servicios que proveen las bases de datos a las empresas están dados por el funcionamiento de los Sistemas Gestores de Bases de datos (SGBD), siendo las herramientas que permiten el almacenamiento de registros o datos de manera organizada, de tal manera que se pueden hacer consultas en menor tiempo, y adicionalmente, permite compartir datos a los usuarios que los necesitan para realizar acciones, ellas pueden ser de tipo comercial, de consulta o análisis de información, facilitando el mejoramiento y la organización. Por otra parte, los SGBD permiten la edición de registros en cuanto a su actualización, la eliminación de aquello que ya no sirve como una estructura fundamental dentro de la BD y la agregación o registro de información llamado comúnmente como la alimentación de la BD.")])])])]),t("div",{staticClass:"col-lg-3 mb-4 mb-lg-0",attrs:{"data-aos":"zoom-in"}},[t("img",{attrs:{src:s("0705"),alt:"persona frente a un ordenador"}})])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_1","data-aos":"fade-right"}},[s("h2",[e._v("1.1 Protocolos para la gestión de concurrencia")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"contenedor-dashed p-3"},[s("div",{staticClass:"bloque-texto-g1__texto p-3"},[s("p",{staticClass:"mb-0"},[e._v("La cantidad de transacciones de registros por minutos son muy altas, de ahí la importancia de la administración de concurrencia, permitiendo la coherencia, integridad y durabilidad de los datos que son procesados por los SGDB por esto es una tarea vital. La elección de una técnica de manejo de concurrencia que permita la serialización de las transacciones y la coherencia de las operaciones realizadas sobre dichos datos, debe ejecutarse de acuerdo a la naturaleza del problema que se esté tratando de resolver. (Arduino, & Alfonzo, 2018).")]),s("br"),s("br"),e._v("Las técnicas o métodos para administrar la cantidad de transacciones de información sobre dichos datos deben ejecutarse de acuerdo a la naturaleza del problema que se está tratando de resolver, para el caso, veremos un modelo de gestión de compras y ventas, demostrando que con la aplicación de técnicas mencionadas de acuerdo con acciones que no registran un bloqueo o que el bloque resultaría costoso para la operatividad de la organización en el rendimiento del sistema; es decir, en tiempo y recurso busca como objetivo primordial mantener la integridad y coherencia de los datos.")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Control de concurrencia")])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-md-9 mx-auto mb-5"},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[e._v("Tabla 1")]),s("br"),s("em",[e._v("Ejemplo de compra bases de datos relacionales")])]),s("div",{staticClass:"tabla-a color-acento-contenido mb-5"},[s("table",[s("thead",[s("tr",[s("th",[e._v("Tabla")]),s("th",[e._v("Atributos")])])]),s("tbody",[s("tr",[s("td",[e._v("PEDIDO")]),s("td",[e._v("id, num-cliente, id-produc, cantidad, valor")])]),s("tr",[s("td",[e._v("PRODUCTO")]),s("td",[e._v("id-produc, nombre-produc, ..., stock")])])])])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Acceso concurrente a los datos")])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Técnicas para controlar las recurrencias")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row justify-content-center align-items-center mb-5"},[t("div",{staticClass:"col-lg-8"},[t("div",{staticClass:"fcab p-4"},[t("div",{staticClass:"contenedor-dashed p-4"},[t("div",{staticClass:"fblanco borde2 p-3"},[t("h4",[e._v("Bloqueos binarios")]),t("p",[e._v("La primera forma de bloquear es utilizar bloqueos binarios. En un bloqueo binario, cada transacción debe solicitar el bloqueo de cada parte de datos A que vaya a utilizar antes de ingresar a él, sea para leerlo o escribirlo, a través de una operación bloquear(A). Deberá redimir todos los bloqueos, mediante una operación desbloquear(A) de modo que otros procesos puedan tomarlos.")]),t("p",{staticClass:"mb-0"},[e._v("Este sistema de bloqueos tiene una descripción muy simple, ya que solo necesita mantener una tabla que indica qué partes de los datos está bloqueada y por cuál transacción.")])])])])]),t("div",{staticClass:"col-lg-4"},[t("img",{attrs:{src:s("9cfb"),alt:"imagen alusiva a la seguridad"}})])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-6"},[t("figure",[t("img",{staticClass:"mb-4",attrs:{src:s("fdc3"),alt:""}}),t("p",{staticClass:"text-small tarjeta--gris p-3"},[t("b",[e._v("Nota:")]),e._v("el gráfico representa como debe aparecer el código en consola de"),t("em",[e._v("MySQL")]),e._v(", nos muestra el bloque de escritura. Tomado de:"),t("a",{attrs:{href:"https://programmerclick.com",target:"_blank"}},[e._v("https://programmerclick.com")])])])]),t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"fcab p-4"},[t("div",{staticClass:"contenedor-dashed p-4"},[t("div",{staticClass:"fblanco borde2 p-3"},[t("h4",[e._v("Bloqueos de lectura/escritura")]),t("p",{staticClass:"mb-0"},[e._v("Es un método utilizado en los SGBD para restringir el proceso de las tablas que sean definidas en ciertos momentos, todo dependerá de la alta concurrencia que exista; para el caso, podemos ver el siguiente código.")])])])])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_2","data-aos":"fade-right"}},[s("h2",[e._v("1.2 Seguridad de BD SQL y NOSQL")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",[e._v("Vamos a instalar un servidor de bases de datos"),s("em",[e._v("MySQL")]),e._v(", para ello tener en cuenta lo siguiente:")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-lg-5"},[t("figure",[t("img",{attrs:{src:s("badf"),alt:"ilustración de base de datos"}})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Definiciones sobre bases de datos SQL y NOSQL")])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Definición BD NoSQL")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row justify-content-center align-items-center mb-5"},[t("div",{staticClass:"col-lg-1 col-sm-2"},[t("img",{attrs:{src:s("3035"),alt:"icono de base de datos"}})]),t("div",{staticClass:"col-lg-11 col-sm-10"},[t("p",{staticClass:"mb-0"},[e._v("La seguridad es un elemento trascendental que tienen las organizaciones en sus bases de datos, de acuerdo a su disposición en una variedad de herramientas, controles y medidas trazadas para establecer y conservar la"),t("b",[e._v("confidencialidad")]),e._v(", la"),t("b",[e._v("integridad")]),e._v("y la"),t("b",[e._v("disponibilidad")]),e._v("de los registros o datos. De estos tres conceptos que definen la seguridad de datos nos enfocaremos en la confidencialidad, ya que, es el elemento más importante y sensible, en gran parte, concerniente a la seguridad de datos.")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"bloque-texto-a color-acento-botones p-4 p-md-4 mb-5 bg-1"},[s("div",{staticClass:"row m-0 align-items-center justify-content-between"},[s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"contenedor-dashed p-4"},[s("div",{staticClass:"bloque-texto-a__texto p-4"},[s("p",[e._v("La seguridad de las bases de datos se enfoca en los siguientes ítems:")]),s("ul",{staticClass:"lista-ul--color"},[s("li",[s("i",{staticClass:"fas fa-check"}),e._v("El sistema de gestión de bases de datos (SGBD).")]),s("li",[s("i",{staticClass:"fas fa-check"}),e._v("Los datos de la base de datos.")]),s("li",[s("i",{staticClass:"fas fa-check"}),s("p",{staticClass:"mb-0"},[e._v("El servidor de base de datos físico y/o el servidor de base de datos virtual y el"),s("em",[e._v("hardware")]),e._v("subyacente.")])]),s("li",[s("i",{staticClass:"fas fa-check"}),e._v("Cualquier aplicación relacionada.")]),s("li",[s("i",{staticClass:"fas fa-check"}),e._v("La infraestructura informática y/o de red utilizada para acceder a la base de datos.")])])])])]),s("div",{staticClass:"col-lg-4 mb-4 mb-lg-0"})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",{staticClass:"mb-5"},[e._v("Para las organizaciones, la seguridad de base de datos es un reto complejo y desafiante, que implica todos los aspectos de las tecnologías y buenas prácticas de seguridad de la información. Adicionalmente, está naturalmente en desacuerdo con la usabilidad de la base de datos, sin embargo, cuantos más permisos de acceso se puedan manipular entre los usuarios, más vulnerable será ante las amenazas de seguridad; cuanto más invulnerable sea la base de datos ante las amenazas, más difícil será el acceso y el uso. En ocasiones, esta paradoja se denomina"),s("b",[e._v("regla de Anderson.")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Diferentes tipos de seguridad que existen en las bases de datos")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-lg-4"},[t("figure",[t("img",{attrs:{src:s("500f"),alt:"imagen relacionada"}})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("h3",{attrs:{"data-aos":"fade-right"}},[s("i",{staticClass:"fas fa-square cac me-2"}),e._v("Creación de usuarios en una base de datos SQL en servidor"),s("em",[e._v("AppServer con MySQL")]),e._v(".")])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("figure",{staticClass:"mb-5"},[s("div",{staticClass:"video"},[s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/JUBqztYEiJE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-3 col-sm-2 col-lg-1"},[t("img",{attrs:{src:s("332a")}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-auto mb-3 mb-sm-0"},[s("h4",{staticClass:"mb-1"},[e._v("Proceso de instalación de"),s("em",[e._v("MongoDB")])]),s("p",{staticClass:"text-small"},[e._v("Descargue el siguiente documento, el cual explica el proceso de instalación de"),s("em",[e._v("MongoDB")]),e._v(".")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_3","data-aos":"fade-right"}},[s("h2",[e._v("1.3 Permisos y roles de BD")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",[e._v("Permite la creación y modificación de roles y usuarios en la base de datos actual. Dado que el"),s("em",[e._v("userAdminrol")]),e._v("concede a los usuarios cualquier privilegio a cualquier usuario, incluidos ellos mismos, el rol también entrega indirectamente permisos de superusuario a la base de datos o, si se limita a la admin base de datos, al clúster.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-lg-4"},[t("figure",[t("img",{attrs:{src:s("0528"),alt:"imagen relacionada"}})])])}],r={el:".riddle",name:"Tema1",components:{},data:function(){return{rid1:s("7708"),rid2:s("7708"),f3:s("7708"),f3inv:s("6d69")}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},i=r,n=s("2877"),d=Object(n["a"])(i,t,o,!1,null,null,null);a["default"]=d.exports},"0528":function(e,a,s){e.exports=s.p+"img/f12.cd69fb4d.svg"},"0705":function(e,a,s){e.exports=s.p+"img/f1.85761d87.svg"},"0ddd":function(e,a,s){e.exports=s.p+"img/f7.3ac7ed6e.svg"},3035:function(e,a,s){e.exports=s.p+"img/f8.46b43ae2.svg"},"332a":function(e,a,s){e.exports=s.p+"img/f11.2dd258da.svg"},"500f":function(e,a,s){e.exports=s.p+"img/f10.1bb1075c.svg"},"6d69":function(e,a,s){e.exports=s.p+"img/f3-inv.9bd50314.svg"},7708:function(e,a,s){e.exports=s.p+"img/f3.699bfa1f.svg"},"9cfb":function(e,a,s){e.exports=s.p+"img/f4.c1a3e2cd.svg"},b1c6:function(e,a,s){e.exports=s.p+"img/f2.e0551efe.jpg"},badf:function(e,a,s){e.exports=s.p+"img/f6.43856428.svg"},fdc3:function(e,a,s){e.exports=s.p+"img/f5.e3e41c55.png"}}]);
//# sourceMappingURL=tema1.a5629a4d.js.map