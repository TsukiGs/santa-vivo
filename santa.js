require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is alive!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});


const Discord = require("discord.js");
const  client = new Discord.Client();


function presence(){
  client.user.setPresence({
status: "online",
activity: {
  name: "s!help",
  type: "PLAYING"
}
})
}



client.on("ready", () => {
   console.log("Estoy listo!");
   presence();
});
let prefix = process.env.prefix;
client.on("message", async message => {

  if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  ///////// COMANDOS CON PREFIX /////////
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


if(command === "mencion"){
  message.delete()
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:x: | ${message.author.username},** No tienes los permisos necesarios para ejecutar este comando.`)
  message.channel.send("@here")

}
//////// DIVERSION ///////

if(command === "hi"){
  const pregunta = args.join(" ")
  const respuestas = ["https://c.tenor.com/52-JrsJFxrUAAAAC/souma-saludo.gif", "https://nekocdn.com/images/uVmQe2X9Y.gif", "https://pa1.narvii.com/6643/29a6e1ce65182c65590b7902b2a01da3929cda43_hq.gif", "https://media.giphy.com/media/RevyT2hf51kxa/giphy.gif", "https://c.tenor.com/6K9ZBPOyQ8IAAAAC/anime-hi.gif", "https://ohpauletta.files.wordpress.com/2017/04/200.gif"]
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
  let usuario = message.member;
  const embed = new Discord.MessageEmbed()
  .setDescription(`**${usuario.user.username}** saluda a todos`)
  .setImage(respuesta)
  .setColor("RANDOM")


  message.channel.send(embed)
}

  if(command === "cry"){
  const pregunta = args.join(" ")
  const respuestas = ["https://c.tenor.com/JnfN36glomcAAAAC/anime-triste.gif", "https://i.pinimg.com/originals/e5/12/84/e51284eedbc2df14ac00cef66f6604d1.gif", "https://i.pinimg.com/originals/6e/8d/98/6e8d98db51b7bac3497b8ce0f58eb4cf.gif", "https://c.tenor.com/lcUIc0XdCHQAAAAd/triste-anime.gif", "https://pa1.narvii.com/6355/a4911089a1b58edf2f5708b8351f091342e5145d_hq.gif"]
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
  let usuario = message.member;
  const embed = new Discord.MessageEmbed()
  .setDescription(`**${usuario.user.username}** esta llorando 7-7`)
  .setImage(respuesta)
  .setColor("RANDOM")


  message.channel.send(embed)
}



if(command === "avatar"){
  let usuario = message.mentions.members.first() || message.member;
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Avatar de ${usuario.user.username}`)
  .setImage(usuario.user.displayAvatarURL())
  return message.channel.send(embed)
  .catch(error => {
    message.channel.send(`Ocurrio un error: ${error}`)
  })
}

  if(command === "pat"){
  const pregunta = args.join(" ")
  const respuestas = ["https://i.pinimg.com/originals/7b/4e/27/7b4e27392baf0fc817223e6bcffc9818.gif", "https://pa1.narvii.com/6090/15d695e9effce175c435af89f97566e50595bec9_hq.gif", "https://images.hive.blog/0x0/https://i.pinimg.com/originals/a3/3a/46/a33a46a9e0a0e894f12ba4a6f9e4c7b0.gif", "https://i.makeagif.com/media/4-15-2018/jnL1H2.gif", "https://c.tenor.com/Usd3lUQD6uQAAAAC/acaricio-smile.gif", "https://pa1.narvii.com/6049/f014a6e830be6452256aa9ea8a1878c6404cc6f3_hq.gif", "https://c.tenor.com/tnzt38CHIuoAAAAC/pat-acariciar.gif", "https://photos1.iorbix.com/00/00/00/00/03/94/41/33/Esdeath-Reina-de-Hielo-kDpPxw83r-b.gif", "https://pa1.narvii.com/6648/cfc63d882f57d490335041279a0c79359e274b70_hq.gif"]
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
  let usuario = message.member;
  let member = message.mentions.members.first()
  if(member.id === message.author.id) return message.channel.send(`No te puedes acariciar a ti mismo`)
  if(member.id === client.user.id) return message.channel.send(`No me puedes acariciar`)
  if(!member) return message.channel.send(`Debes mencionar a alguien para acariciar`)
  const embed = new Discord.MessageEmbed()
  .setDescription(`**${usuario.user.username}** acarició a **${member.user.username}** uwu`)
  .setImage(respuesta)
  .setColor("RANDOM")


  message.channel.send(embed)
}

  if(command === "happy"){
  const pregunta = args.join(" ")
  const respuestas = ["https://c.tenor.com/VFA8oAnd1xYAAAAC/zodiaco-anime.gif", "https://i.pinimg.com/originals/38/4f/90/384f90adb2173061f49b225e4c95353e.gif", "https://data.whicdn.com/images/236713063/original.gif", "https://c.tenor.com/1T4QZyApse0AAAAC/sugoi-kawaii.gif", "https://d29nucfiy6mx2f.cloudfront.net/244/ce7dd/c789/48d0/b413/36bbeae0a9d2/animated/311897.gif", "https://media1.giphy.com/media/aqOUrkDo2fdyE/source.gif"]
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
  let usuario = message.member;
  const embed = new Discord.MessageEmbed()
  .setDescription(`**${usuario.user.username}** esta feliz :D`)
  .setImage(respuesta)
  .setColor("RANDOM")


  message.channel.send(embed)
}

  if(command === "hug"){
  const pregunta = args.join(" ")
  const respuestas = ["https://i.pinimg.com/originals/42/92/2e/42922e87b3ec288b11f59ba7f3cc6393.gif", "https://i.pinimg.com/originals/b5/1d/f1/b51df18c3a0ebe6ddff723cf3103e174.gif", "https://c.tenor.com/ncblDAj_2FwAAAAC/abrazo-hug.gif", "https://i.pinimg.com/originals/b6/cc/7d/b6cc7d41671f2b80d37f763409c78fd6.gif", "https://64.media.tumblr.com/826a784897bf75177d3369d5f2a026ea/tumblr_mzui9iywOG1t8690mo1_500.gifv", "https://pa1.narvii.com/6054/e11eef98b053e70d1404a12a085e8c6220917069_hq.gif"]
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
  let usuario = message.member;
  let member = message.mentions.members.first()
  if(member.id === message.author.id) return message.channel.send(`No te puedes abrazar a ti mismo >.<`)
  if(member.id === client.user.id) return message.channel.send(`No me puedes abrazar >.<`)
  if(!member) return message.channel.send(`Debes mencionar a alguien para abrazarlo >.<`)
  const embed = new Discord.MessageEmbed()
  .setDescription(`**${usuario.user.username}** le ha dado un abrazo a **${member.user.username}** uwu`)
  .setImage(respuesta)
  .setColor("RANDOM")

  message.channel.send(embed)
}

if(command === "userinfo"){
  let estados = {
    "online": "Conectado",
    "offline": "Desconectado/Invisible",
    "idle": "Ausente",
    "dnd": "No molestar"

  }
  let usuario = message.mentions.members.first() || message.member;
  let embed = new Discord.MessageEmbed()
  .setThumbnail(usuario.user.displayAvatarURL( {format: "png", dynamic: "true"} ))
    .addField("ID", (usuario.id))
    .addField("Boosts", usuario.premiumSince ? "Usuario booster" : "Usuario no booster")
    .addField("Roles", (usuario.roles.cache.map(m => m). join(" **|** ")))
    .setColor("RANDOM")
    .setAuthor(usuario.user.tag, usuario.user.displayAvatarURL())
  return message.channel.send(embed)
  .catch(error => {
    message.channel.send(`Ocurrio un error: ${error}`)
  })
}

if (command === "clear"){
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo los permisos necesarios para ejecutar este comando.")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes los permisos necesarios para ejecutar este comando.")
  if(!args[0]) return message.channel.send("Necesitas especificar un numero mayor a 1 y menor a 100")
  let number = args [0]
  if(isNaN(number)) return message.channel.send("Pon un numero, no letras ni simbolos.")
  number = parseInt(number)
  if(number >= 100 || number <= 0) return message.channel.send("Pon un numero mayor a 1 y menor a 100")
  message.channel.bulkDelete(number +1).then ( () => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`Mensajes eliminados: **${number}**`)
    message.channel.send(embed)


  }).catch(error => {
    message.channel.send(`Ocurrio un error: ${error}`)
  })

}

if (command === "ban"){
  let member = message.mentions.members.first();
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`**:x: | ${message.author.username},** No tengo los permisos necesarios para ejecutar este comando.`)
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`**:x: | ${message.author.username},** No tienes los permisos necesarios para ejecutar este comando.`)

  if(!member) return message.channel.send(`**:x: | ${message.author.username},** Debes mencionar a alguien para banear, por ejemplo: **s!ban @Tsuki por hacer spam.**`)
  if(!member.bannable) return message.channel.send(`**:x: | ${message.author.username},** No puedes banear a este usuario\n \n Por que el / ella es del mismo rango que tu o mayor.`)

  if(message.guild.owner.id !== message.author.id && member.roles.highest.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send(`**:x: | ${message.author.username},** Este usuario no puede ser baneado.`)

  if(member.id === message.author.id) return message.channel.send(`**:x: | ${message.author.username},** No te puedes banear a ti mismo.`)

  if(member.id === client.user.id) return message.channel.send(`**:x: | ${message.author.username},** No me puedes banear.`)

  let reason = args[1] ? args.slice(1).join (' ') : `Ninguna.`

  await member.ban({ reason }).catch(error => message.channel.send(`**:x: | ${message.author.username},** No puedes banear a este usuario \n \nError: **${error}**`));
 
  let unban = message.mentions.members.first() || message.guild.members.get(args[0])

  const embed = new Discord.MessageEmbed()
  .setAuthor("Usuario baneado", client.user.avatarURL())
  .setDescription(`El usuario **${member.user.username}** ha sido baneado del servidor.`)
  .setColor("RED")
  .addField("MODERADOR", message.author.username)
  .addField("RAZON", reason)
  .setTimestamp()
  message.channel.send(embed)

}

});

client.on("message", async message => {

  
  

  if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "kick"){
    let member = message.mentions.members.first();
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`**:x: | ${message.author.username},** No tengo los permisos necesarios para ejecutar este comando.`)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`**:x: | ${message.author.username},** No tienes los permisos necesarios para ejecutar este comando.`)
  
    if(!member) return message.channel.send(`**:x: | ${message.author.username},** Debes mencionar a alguien para kickear, por ejemplo: **s!kick @Tsuki por hacer spam.**`)
    if(!member.kickable) return message.channel.send(`**:x: | ${message.author.username},** No puedes kickear a este usuario\n \n Por que el / ella es del mismo rango que tu o mayor.`)
  
    if(message.guild.owner.id !== message.author.id && member.roles.highest.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send(`**:x: | ${message.author.username},** Este usuario no puede ser kickeado.`)
  
    if(member.id === message.author.id) return message.channel.send(`**:x: | ${message.author.username},** No te puedes kickear a ti mismo.`)
  
    if(member.id === client.user.id) return message.channel.send(`**:x: | ${message.author.username},** No me puedes kickear.`)
  
    let reason = args[1] ? args.slice(1).join (' ') : `Ninguna.`
  
    await member.kick({ reason }).catch(error => message.channel.send(`**:x: | ${message.author.username},** No puedes kickear a este usuario \n \nError: **${error}**`));
   
    let unkick = message.mentions.members.first() || message.guild.members.get(args[0])
  
    const embed = new Discord.MessageEmbed()
    .setAuthor("Usuario kickeado", client.user.avatarURL())
    .setDescription(`El usuario **${member.user.username}** ha sido kickeado del servidor.`)
    .setColor("RED")
    .addField("MODERADOR", message.author.username)
    .addField("RAZON", reason)
    .setTimestamp()
    message.channel.send(embed)
  }

});
//////////// COMANDOS SIN PREFIX ////////////
client.on("message", (message) => {
  
  
    
  

    if (message.content.includes("santaprro"), message.author == client.User) {
      message.channel.send("Santaprro el streamer mas famoso del fucking world");
    }

    if (message.content.includes("santaperro"), message.author == client.User) {
      message.channel.send("Santaprro el streamer mas famoso del fucking world");
    }

    if (message.content.includes("santa"), message.author == client.User) {
      message.channel.send("Santaprro el streamer mas famoso del fucking world");
    }

    if (message.content.includes("piporro")) {
      message.channel.send("Santaprro el streamer mas famoso del fucking world");
    }

    if (message.content.includes("santaperra")) {
      message.channel.send("Santaprro el streamer mas famoso del fucking world");
    }
  

});


//////////// EMBEDS ////////////
client.on("message", (message) => {

  

    if (message.content.startsWith("m!r_miau")) {
      message.delete()
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:x: | ${message.author.username},** No tienes los permisos necesarios para ejecutar este comando.`)
        const embed = new Discord.MessageEmbed()
           .setTitle('REGLAS DEL SERVIDOR')
           .setColor(0x00FFFF)
           .setDescription('Estas son las reglas del servidor:')
           .addField('─────────────────────', "─────────────────────")
           .addField('1. NO TRATAR MAL A OTROS USUARIOS', "No se permite ser toxico, amenazar, acosar, discriminar, insultar u ofender a otros miembros del servidor.")
           .addField("2. NO HACER SPAM NI FLOOD", "No promocionar otros servidores, canales ni enviar ningun tipo de enlace, no inundar los canales con palabras o emojis y evitar mandar el mismo mensaje repetidas veces.")
           .addField("3. NO MOLESTAR A OTROS USUARIOS EN LOS CANALES DE VOZ", "Evita entrar a otros canales de voz intentando molestar a otros usuarios que esten conectados en ellos.")
           .addField("4. UTILIZAR LOS CANALES COMO ES DEBIDO", "utiliza cada canal como es debido y no mandes contenido de un canal a otro al que no corresponde.")
           .addField("5. NO HACERSE PASAR POR OTROS MIEMBROS", "No se permite la suplantacion de identidad ya que puede resultar molesto y confuso para otros miembros.")
           .addField("6. NO USAR NOMBRES O FOTOS DE PERFIL INAPROPIADOS", "No se permite tener nombres o fotos de perfil inapropiados ya que puede afectar a personas sensibles u ofender a otros miembros.")
           .addField("7. NO ENVIAR CONTENIDO INAPROPIADO", "No enviar archivos, imagenes, mensajes, enlaces, entre otros de NSFW, Gore, CP, Lolicon, incumplir esta regla te llevara al baneo permanente del servidor.")
           .addField("8. NO ABUSAR DE LAS MENCIONES", "No mencionar mucha gente ni repetidamente los mismos usuarios ya que puede resultar molesto para los miembros.")
           .addField("9. RESPETAR LOS GUSTOS Y OPINIONES DE LOS DEMAS", "Respeta los gustos y opiniones de los demas ya que cada quien es diferente y tiene su forma de ser y pensar.")
           .addField("10. NO RAIDEAR", "Raidear esta completamente prohibido y es razon de baneo permanente")
           .addField("11. INVITACIONES", "Solo invita gente conocida y de confianza para evitar problemas con el servidor.")
           .addField("─────────────────────", "─────────────────────")
           .addField("SI INCUMPLES UNA REGLA SERAS WARNEADO O BANEADO DEPENDIENDO LA REGLA INCUMPLIDA", "SI RECIBES 2 WARNS SERAS BANEADO PERMANENTEMENTE")
           .setThumbnail('https://media.giphy.com/media/aLppTjgw67wPmjLNbg/giphy.gif')
           .setImage('https://media.giphy.com/media/EoZfDAKYPoltS/giphy.gif')
           .setFooter(message.member.displayName, message.author.avatarURL())
           .setTimestamp()
           
         message.channel.send(embed);
        }

   
      if (message.content.startsWith("m!reglas")) {
        message.delete()
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:x: | ${message.author.username},** No tienes los permisos necesarios para ejecutar este comando.`)
        const embed = new Discord.MessageEmbed()
           .setTitle('REGLAS DEL SERVIDOR')
           .setColor(0x00FFFF)
           .setDescription('Estas son las reglas del servidor:')
           .addField('─────────────────────', "─────────────────────")
           .addField('1. NO TRATAR MAL A OTROS USUARIOS', "No se permite ser toxico, amenazar, acosar, discriminar, insultar u ofender a otros miembros del servidor.")
           .addField("2. NO HACER SPAM NI FLOOD", "No promocionar otros servidores, canales ni enviar ningun tipo de enlace, no inundar los canales con palabras o emojis y evitar mandar el mismo mensaje repetidas veces.")
           .addField("3. NO MOLESTAR A OTROS USUARIOS EN LOS CANALES DE VOZ", "Evita entrar a otros canales de voz intentando molestar a otros usuarios que esten conectados en ellos.")
           .addField("4. UTILIZAR LOS CANALES COMO ES DEBIDO", "utiliza cada canal como es debido y no mandes contenido de un canal a otro al que no corresponde.")
           .addField("5. NO HACERSE PASAR POR OTROS MIEMBROS", "No se permite la suplantacion de identidad ya que puede resultar molesto y confuso para otros miembros.")
           .addField("6. NO USAR NOMBRES O FOTOS DE PERFIL INAPROPIADOS", "No se permite tener nombres o fotos de perfil inapropiados ya que puede afectar a personas sensibles u ofender a otros miembros.")
           .addField("7. NO ENVIAR CONTENIDO INAPROPIADO", "No enviar archivos, imagenes, mensajes, enlaces, entre otros de NSFW, Gore, CP, Lolicon, incumplir esta regla te llevara al baneo permanente del servidor.")
           .addField("8. NO ABUSAR DE LAS MENCIONES", "No mencionar mucha gente ni repetidamente los mismos usuarios ya que puede resultar molesto para los miembros.")
           .addField("9. RESPETAR LOS GUSTOS Y OPINIONES DE LOS DEMAS", "Respeta los gustos y opiniones de los demas ya que cada quien es diferente y tiene su forma de ser y pensar.")
           .addField("10. NO RAIDEAR", "Raidear esta completamente prohibido y es razon de baneo permanente")
           .addField("─────────────────────", "─────────────────────")
           .addField("SI INCUMPLES UNA REGLA SERAS WARNEADO O BANEADO DEPENDIENDO LA REGLA INCUMPLIDA", "SI RECIBES 2 WARNS SERAS BANEADO PERMANENTEMENTE")
           .setThumbnail('https://media.giphy.com/media/aLppTjgw67wPmjLNbg/giphy.gif')
           .setImage('https://media.giphy.com/media/EoZfDAKYPoltS/giphy.gif')
           .setFooter(message.member.displayName, message.author.avatarURL())
           .setTimestamp()
           
         message.channel.send(embed);
        }

        

//////////// HELP ////////////
        if (message.content.startsWith("s!help")){
          
          
            const embed = new Discord.MessageEmbed()
                          .setDescription("Prefijo:  s!")
                          .setColor(0x00FFFF)
                          .addField("Comandos de diversion", "`say` `8ball`")
                          .addField("Comandos de reaccion", "`hi`" `happy` `cry` `hug` `pat`)
                          .addField("Comandos de moderacion", "`clear` `ban` `kick` `redes`")
                          .addField("Otros", "`avatar` `userinfo` `invite` `help`")
                          .setAuthor("COMANDOS DEL BOT", client.user.avatarURL())
                          .setImage("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJidHRzemJqaGl4ZmNwcTQ5ejM0Zjl1NTZmanhkeGphZW1oNjRnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3qrrseDEV35Qs/giphy.gif")
                          .setFooter("Escribe s!h <comando> para ayuda detallada. | Creado por Tsuki.31")
          
                    message.channel.send(embed);
                  
        }
      

        if (message.content.startsWith("s!h hi")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Saluda a todos.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!hi`")
                        .addField("Ejemplo", "• s!hi")
                        .addField("Alias", "hi")
                        .setAuthor("Reaccion: hi", client.user.avatarURL())
                        .setThumbnail("https://c.tenor.com/47a0RiMxzvAAAAAM/anime-kurumi-kumamakura.gif")
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }
  if (message.content.startsWith("s!h pat")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Acaricia a un usuario.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!pat <usuario>`")
                        .addField("Ejemplo", "• s!pat @usuario")
                        .addField("Alias", "pat")
                        .setAuthor("Reaccion: pat", client.user.avatarURL())
                        .setThumbnail("https://c.tenor.com/AOOfi8VnUVEAAAAC/anime-ep10.gif")
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

  if (message.content.startsWith("s!h hug")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Abraza a un usuario.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!hug <usuario>`")
                        .addField("Ejemplo", "• s!hug @usuario")
                        .addField("Alias", "hug")
                        .setAuthor("Reaccion: hug", client.user.avatarURL())
                        .setThumbnail("https://acegif.com/wp-content/gif/anime-hug-12.gif")
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

  if (message.content.startsWith("s!h cry")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Hazle saber a todos que estas triste.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!cry`")
                        .addField("Ejemplo", "• s!cry")
                        .addField("Alias", "cry")
                        .setAuthor("Reaccion: cry", client.user.avatarURL())
                        .setThumbnail("https://i.pinimg.com/originals/29/af/aa/29afaa9f46f44d2eccf69a981b70fefe.gif")
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

   if (message.content.startsWith("s!h happy")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Hazle saber a todos que estas feliz..")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!happy`")
                        .addField("Ejemplo", "• s!happy")
                        .addField("Alias", "happy")
                        .setAuthor("Reaccion: happy", client.user.avatarURL())
                        .setThumbnail("https://c.tenor.com/EgEqkUelPeQAAAAC/anime-blush-anime-feliz.gif")
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

  
         if (message.content.startsWith("s!h say")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("El bot repetira lo que digas.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!say <texto>`")
                        .addField("Ejemplo", "• s!say miau")
                        .addField("Alias", "say")
                        .setAuthor("Diversion: say", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

        if (message.content.startsWith("s!h 8ball")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Has una pregunta de si/no.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!8ball <texto>`")
                        .addField("Ejemplo", "• s!8ball ¿soy un gato?")
                        .addField("Alias", "8ball")
                        .setAuthor("Diversion: 8ball", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

 

        if (message.content.startsWith("s!h invite")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Manda la invitacion del bot.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!invite`")
                        .addField("Ejemplo", "• s!invite")
                        .addField("Alias", "invite")
                        .setAuthor("Otro: invite", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

        if (message.content.startsWith("s!h help")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Manda la lista de comandos.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!help`")
                        .addField("Ejemplo", "• s!help")
                        .addField("Alias", "help")
                        .setAuthor("Otro: help", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

        if (message.content.startsWith("s!h avatar")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Muestra el avatar del usuario.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!avatar [usuario]`")
                        .addField("Ejemplo", "• s!avatar")
                        .addField("Alias", "avatar")
                        .setAuthor("Otro: avatar", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

        if (message.content.startsWith("s!h userinfo")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Muestra la informacion de un usuario.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!userinfo [usuario]`")
                        .addField("Ejemplo", "• s!userinfo")
                        .addField("Alias", "userinfo")
                        .setAuthor("Otro: userinfo", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

        if (message.content.startsWith("s!h clear")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Elimina la cantidad de mensajes especificados.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!clear <cantidad>`")
                        .addField("Ejemplo", "• s!clear 30")
                        .addField("Alias", "clear")
                        .addField("Permisos requeridos", "Gestionar mensajes")
                        .setAuthor("Moderacion: clear", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);
                
        }

        if (message.content.startsWith("s!h ban")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Banea al usuario mencionado.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!ban <usuario>`")
                        .addField("Ejemplo", "• s!ban @Tsuki")
                        .addField("Alias", "ban")
                        .addField("Permisos requeridos", "Banear miembros")
                        .setAuthor("Moderacion: ban", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);

        }
        
        if (message.content.startsWith("s!h kick")) {
          const embed = new Discord.MessageEmbed()
                        .setDescription("Kickea al usuario mencionado.")
                        .setColor(0x00FFFF)
                        .addField("Uso", "`s!kick <usuario>`")
                        .addField("Ejemplo", "• s!kick @Tsuki")
                        .addField("Alias", "kick")
                        .addField("Permisos requeridos", "Expulsar miembros")
                        .setAuthor("Moderacion: kick", client.user.avatarURL())
                        .setFooter("<> = Obligatorio | [] = Opcional. | No incluyas estos símbolos cuando ejecutes el comando.")
        
                  message.channel.send(embed);

        }

//////////// OTROS ////////////
        if (message.content.startsWith("s!invite")) {
          const embed = new Discord.MessageEmbed()
                .setTitle("INVITACION")
                .addField("¡Gracias por invitarme a tu servidor!", "Dale click al titulo para invitarme")
                .setColor("7133ff")
                .setURL("https://discord.com/oauth2/authorize?client_id=1391144048768712734&permissions=8&integration_type=0&scope=bot")
                .setImage("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJidHRzemJqaGl4ZmNwcTQ5ejM0Zjl1NTZmanhkeGphZW1oNjRnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3qrrseDEV35Qs/giphy.gif")
                .setFooter("Si el bot esta apagado o necesitas soporte contacta con: Tsuki.31")
      
            message.channel.send(embed);
        }

        
      
});
client.on("message", message => {
  let args = message.content.slice(0).trim().split(/ +/g);
  let script = args.slice(1).join(" ")
  if (message.content.startsWith("s!say")) {
    message.delete()
    message.channel.send(script)
  }
});

////////////OTROS////////////////



client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content === "<@1391144048768712734>") {
    const embed = new Discord.MessageEmbed()
      .setColor("7133ff")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setDescription(
        "Mi prefix es `s!`.\n" +
        "Si escribes `s!help`, te mostraré mis comandos.\n\n");

    message.channel.send(embed);
  }

  if (message.author.bot) return;
  if (message.content === "s!redes") {
    const embed = new Discord.MessageEmbed()
      .setColor("7133ff")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("REDES DE SANTAPRRO")
      .setDescription(
        "**[TIKTOK](https://www.tiktok.com/@santaprr.0?_t=8nWuN0OiLaP&_r=1)**\n" +
        "**[FACEBOOK](https://www.facebook.com/share/qNYkqQWueaFsL2VY/?mibextid=qi2Omg)**\n" +
        "**[DISCORD](https://discord.gg/WtF8tKBTQw)**\n" +
        "**[CANAL DE WHATSAPP](https://whatsapp.com/channel/0029VbAcfheEQIatrMWCz81t)**\n" +
        "\n" +
        "**[INVITA AL BOT](https://discord.com/oauth2/authorize?client_id=1391144048768712734&permissions=8&integration_type=0&scope=bot)**\n"
      )
      
    message.channel.send(embed);

  }

  if (message.content.startsWith("s!anuncio")) {
        message.delete()
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:x: | ${message.author.username},** No tienes los permisos necesarios para ejecutar este comando.`)
        const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("7133ff")
      .setTitle("NUEVO BOT")
      .setDescription("El streamer santaprro tiene nuevo bot!!\n" +
        "y que crees... ¡es el que está enviando este mensaje!\n" +
        "usa `s!help` para ver sus comandos!\n" +
        "\n" +
        "**[INVITAME](https://discord.com/oauth2/authorize?client_id=1391144048768712734&permissions=8&integration_type=0&scope=bot)**\n"
      )
      .setFooter("Prefix: s! | Si el bot esta apagado o necesitas soporte contacta con: Tsuki.31")
      .setImage("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnJwNzA1ZTRqcTExYXphY3psa2M1enFlaHB1dXdpdXkwdTNzZmx1aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3TsDSk7XHAviU/giphy.gif")
      .setThumbnail("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnJwNzA1ZTRqcTExYXphY3psa2M1enFlaHB1dXdpdXkwdTNzZmx1aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26xBEhnq4g9AH646Y/giphy.gif"
      
      )


        message.channel.send(embed);

}




});


client.login(process.env.token); 
