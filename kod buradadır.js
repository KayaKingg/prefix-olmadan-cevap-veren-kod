client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content.toLowerCase() == "SELAMUNALEYKUM" || message.content.toLowerCase() == "SA") {
    message.channel.send("aleykümeselam")
  }
})
