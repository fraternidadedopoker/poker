/*
COMO ADICIONAR UM VIDEO NOVO:

COPIE ESSE OBJETO JAVASCRIPT

  {
    component: <div className='videos'><iframe title='video1' width="100%" height="100%" src="https://www.youtube.com/embed/wsJDIAdB_Ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "9 DICAS PARA JOGAR CASH GAMES",
    duration: "27min",
    date: "12/05/20",
  },

E MUDE    -     O TITULO ABAIXO PARA 'videon' sendo n = o numero do proximo video   -   O SRC ABAIXO PARA O SRC ENCONTRADO NO SITE DO YOUTUBE
component: <div className='videos'><iframe title='video1' width="100%" height="100%" src="https://www.youtube.com/embed/wsJDIAdB_Ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,

TITLE SERA O TITULO DO VIDEO
title: "titulo aqui entre aspas"

DURATION SERA O INDICADOR DE DURAÇÃO DO VIDEO
duration "12min"

DATE SERA A DATA ATUAL QUE O VIDEO FOI COLOCADO NO SITE
date "19/07/20"

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DEPOIS DISSO VOCÊ TERÁ QUE DAR OS SEGUINTES COMANDOS NO TERMINAL:

COMANDO PARA ADICIONAR AS MUDANÇAS FEITAS
git add .

COMANDO PARA SALVAR AS MUDANÇAS FEITAS COM UM COMENTÁRIO DE QUAIS FORAM AS MUDANÇAS
git commit -m "adicionado novos videos"

COMANDO PARA ENVIAR AS MUDANÇAS PARA O REPOSITÓRIO
git push -u origin master

COMANDO PARA COLOCAR AS MUDANÇAS ONLINE
npm run deploy
*/ 

import React from 'react';

let videos = [
  {
    component: <div className='videos'><iframe title='video1' width="100%" height="100%" src="https://www.youtube.com/embed/wsJDIAdB_Ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "9 DICAS PARA JOGAR CASH GAMES",
    duration: "27min",
    date: "12/05/20",
  },
  {
    component: <div className='videos'><iframe title='video2' width="100%" height="100%" src="https://www.youtube.com/embed/WmAGeEfccMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "PENSANDO EM RANGES",
    duration: "27min",
    date: "12/05/20",
  },
  {
    component: <div className='videos'><iframe title='video3' width="100%" height="100%" src="https://www.youtube.com/embed/CVSymQudSDk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "ANÁLISE MÃOS PLO5",
    duration: "11min",
    date: "22/05/20",
  },
  {
    component: <div className='videos'><iframe title='video4' width="100%" height="100%" src="https://www.youtube.com/embed/g1-r22ID1fg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "Razz - Dicas estratégicas (parte 1)",
    duration: "24min",
    date: "22/05/20",
  },
  {
    component: <div className='videos'><iframe title='video5' width="100%" height="100%" src="https://www.youtube.com/embed/Ff5eG17IxZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "OMAHA HI-LO: Mãos iniciais e principais erros",
    duration: "19min",
    date: "22/05/20",
  },
  {
    component: <div className='videos'><iframe title='video6' width="100%" height="100%" src="https://www.youtube.com/embed/Oybu0SHq7b0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "AJUSTES, DICAS PRA BATER OS JOGOS DE PLO MICROSTAKES",
    duration: "5min",
    date: "19/05/20",
  },
  {
    component: <div className='videos'><iframe title='video7' width="100%" height="100%" src="https://www.youtube.com/embed/CVSymQudSDk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "ANÁLISE MÃOS PLO5",
    duration: "10min",
    date: "19/05/20",
  },
  {
    component: <div className='videos'><iframe title='video8' width="100%" height="100%" src="https://www.youtube.com/embed/B_v0X6ntxtE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "COMO ABRIR MAIS TELAS NO PPPOKER",
    duration: "2min",
    date: "19/05/20",
  },
  {
    component: <div className='videos'><iframe title='video9' width="100%" height="100%" src="https://www.youtube.com/embed/twRXAkB3ZbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
    title: "João Simão vs Isildur (Mão Comentada)",
    duration: "5min",
    date: "19/05/20",
  },
];

export default videos;