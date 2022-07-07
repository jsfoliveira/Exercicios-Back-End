const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
      // aqui inserimos o datatype da coluna criada
  phone_num: DataTypes.STRING,
  },
  // só coloca isso se não usar createdAt  e updatedAt
  // {
  //   timestamps: false,
  // }

  // eu quero que o sequelize busque uma tabela exatamente com o nome user, e não users(o padrão é buscar uma tabela com o nome no plural)
  // {
  //   freezeTableName: true,
  // }

  // eu posso também pedir pra sequelize busque no banco uma tabela com qualquer outro nome
  // {
  //   tableName: "oioioi"
  // }
  
  );

  return User;
};

module.exports = User;