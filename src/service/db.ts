import sqlite3 from 'sqlite3';

const DATABBASE_FILE = './tmp/pesquisa.db';
if (!DATABBASE_FILE){
  throw Error("DATABASE_FILE não informado")
}

const db = new sqlite3.Database(DATABBASE_FILE, (err) => {
  if (err) {
      console.error("Erro opening database " + err.message);
  } else {

      db.run('CREATE TABLE formularios( \
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
        created_at timestamp  NOT NULL,\
        folha NVARCHAR(20)  NOT NULL,\
        rota NVARCHAR(20),\
        uf NVARCHAR(3),\
        tipo NVARCHAR(20),\
        rodovia NVARCHAR(20),\
        local NVARCHAR(20),\
        km NVARCHAR(20),\
        hodometro NVARCHAR(20),\
        ponto_gps NVARCHAR(20),\
        latitude NVARCHAR(20),\
        longitude NVARCHAR(20),\
        tipo_rodovia NVARCHAR(20),\
        perfil_rodovia NVARCHAR(20),\
        possui_faixa_adicional_subida NVARCHAR(20),\
        possui_ponte_viaduto NVARCHAR(20),\
        possui_curva_perigosa NVARCHAR(20),\
        condicao_curva_perigosa NVARCHAR(20),\
        com_acostamento NVARCHAR(20),\
        pavimento_acostamento NVARCHAR(20),\
        condicoes_pavimento NVARCHAR(20),\
        velocidade_pavimento NVARCHAR(20),\
        ponto_critico NVARCHAR(20),\
        url NVARCHAR(20),\
        faixa_central NVARCHAR(20),\
        faixa_lateral NVARCHAR(20),\
        defensas NVARCHAR(20),\
        placa_velocidade NVARCHAR(20),\
        placa_indicacao NVARCHAR(20),\
        placa_intersecao NVARCHAR(20),\
        legibilidade_placas NVARCHAR(20),\
        posto_abastecimento NVARCHAR(20),\
        borracharia NVARCHAR(20),\
        oficina NVARCHAR(20),\
        restaurante NVARCHAR(20),\
        controlador_velocidade NVARCHAR(20)\
      )', (err) => {
          if (err) {
              console.log(err);
          }
      });
  }
});

export default db