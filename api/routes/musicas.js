module.exports  = app => {
    const controller = app.controllers.musicas;
  
    app.route('/api/v1/musicas')
      .get(controller.listmusicas)
      .post(controller.saveFilmes);
  
    app.route('/api/v1/musicas/:musicasId')
      .delete(controller.removemusicas);
  
    app.route('/api/v1/musicas/:musicasId').
    put(controller.updatemusicas);  
  }