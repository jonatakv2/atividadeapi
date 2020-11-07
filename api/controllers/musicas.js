const uuidv4 = require('uuid/v4');


module.exports = app => {
  
  const MusicasDB = app.data.musicas;
  const controller = {};

  const { musicas: musicasMock, } = musicasDB;

  controller.listmusicas = (req, res) => res.status(200).json(musicasDB);

  controller.savemusicas = (req, res) => {
    musicasMock.data.push({
      id: uuidv4(),
      titulo: req.body.titulo,
      ano: req.body.ano,
      genero: req.body.genero
    });

    res.status(201).json(musicasMock);
  }

  controller.removemusicas = (req, res) => {
    const { musicasId, } = req.params;

    const foundmusicasIndex = musicasMock.data.findIndex(musicas => musicas.id === musicasId);

    if(foundmusicasIndex === -1){
      res.status(404).json({
        message: 'Filme não encontrado',
        success: false,
        musicas: musicasMock,
      });
    }else {
      musicasMock.data.splice(foundmusicasIndex, 1);
      res.status(200).json({
        message: 'Musica removido com sucesso!',
        success: true,
        musicas: musicasMock,
      });
    }


  }
  controller.updatemusicas = (req,res)=> 
   {
    const {musicasId} = req.params;
    const foundmusicasIndex = musicasMock.data.findIndex(musicas => musicas.id === musicasId);
    if(foundmusicasIndex === -1){
      res.status(404).json({
        message: 'Filme não encontrado',
        success: false,
        musicas: musicasMock,
      });
    }else {
      musicasMock.data[foundFilmeIndex].title =  req.body.titulo;
      musicasMock.data[foundFilmeIndex].year =  req.body.ano;
      musicasMock.data[foundFilmeIndex].type =  req.body.genero;

      
      res.status(200).json({
        message: 'Filme atualizado com sucesso!',
        success: true,
        musicas: musicasMock,
      });
    }
  }
  return controller;

}