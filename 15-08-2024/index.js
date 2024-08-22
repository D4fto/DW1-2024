
setInterval(() => {
    avancar()
}, 5000);
const images=[
    '("./imagem.jpg")',
    '("https://files.meiobit.com/wp-content/uploads/2022/08/minecraft-1060x596.jpg")',
    '("https://s2-techtudo.glbimg.com/aLiHUBpnRMJn5OU0gFZw5tMXUqE=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/b/u/FDKvA0RCWsnndgZSmdNA/roblox-tutorial-como-fazer-conta-passo-comecar-jogar.jpg")',
    '("https://cdn.maioresemelhores.com/imagens/mm-melhores-jogos-para-android-free-fire.jpg")',
    '("https://conteudo.imguol.com.br/c/entretenimento/68/2019/01/07/os-10-melhores-jogos-de-2018-na-opiniao-do-uol-jogos-1546887965085_v2_1920x1080.jpg")',
    '("https://www.gamerinfo.com.br/wp-content/uploads/2022/07/179_Capa_-_Jogos_indies-1.jpg")',
    '("https://cloudfront-us-east-1.images.arcpublishing.com/newr7/7GNRNM6ODZNJ3FNLYPUIXPPS4M.jpg")',

]
const imagem = document.querySelector('#imagem')
function voltar(){
    let atual = imagem.style.backgroundImage.replaceAll("url",'')
    if(images.indexOf(atual)>0){
        imagem.style.backgroundImage='url'+images[images.indexOf(atual)-1]
        return
    }
    imagem.style.backgroundImage='url'+images[images.length-1]
}
function avancar(){
    let atual = imagem.style.backgroundImage.replaceAll("url",'')
    if(images.indexOf(atual)+1<images.length){
        imagem.style.backgroundImage='url'+images[images.indexOf(atual)+1]
        return
    }
    imagem.style.backgroundImage='url'+images[0]
}
