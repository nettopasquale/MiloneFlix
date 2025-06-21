import * as yup from "yup";

// schema do cadastro
export const schema = yup.object().shape({
  titulo: yup.string().trim().required("O título é obrigatório"),
  diretor: yup.string().trim().required("O diretor é obrigatório"),
  duracao: yup.string().trim().required("A duração é obrigatória"),
  avaliacao: yup.number().min(0).max(5).required("A avaliação é obrigatória"),
  ano: yup.string().trim().required("O ano é obrigatório"),
  genero: yup.string().trim().required("O gênero é obrigatório"),
  elenco: yup.string().trim().required("O elenco é obrigatório"),
  classificacao: yup.string().trim().required("A classificação é obrigatória"),
  sinopse: yup.string().trim().required("A sinopse é obrigatória"),
  imagem: yup.string()
});
