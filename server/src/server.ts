//Rota: Endereço completo de requesitos
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação já existente 
//DELETE: Remover uma informação do back-end

//POST: https://localhost:3333/users = Criar um usuário
//GET:  https://localhost:3333/users = Listar um usuário
//GET:  https://localhost:3333/users/ = Buscar um usuário com id 5

//Request Parm : Parâmetros que vem na própria rota que identificam um recurso específico 
//Query Parm : Parâmetros que são usados para fazer uma busca. Usado em filtros, paginação,etc...
// Request Body: Parâmetros para criação/atualização de informações

//SELECT * FROM users WHERE name = 'Marcos'
//knex('users').where('name', 'Marcos').select('*')
import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);