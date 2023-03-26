import {
  FooterDiv,
  HeaderDiv,
  MainDiv,
  ContentDiv,
  Title,
  LogoImg,
  SearchBar,
  DivLogo,
  CardImg,
  DivCardImg,
  CarrosselImg,
  Botaosemfundo,
  Rodape,
  Logopqn,
  Gato,
  Divrodape,
  SidebarDiv,
  Sanduiche,
  Sanduichediv,
  Barraverde,
  Descricao,
  Searchbutton,
  TitleVerde,
  SubtextVerde,
  SubtitleLaranja,
  CheckboxAnime,
  BtnFechar,
  Itens,
  SidebarDivClose
} from "./Home.stld";
import Logo from "../../assets/logo.png";
import Card from "../../assets/card.png";

import Yuzu from "../../assets/yuzu.png";
import Logopq from "../../assets/logopq.png";
import { temaPrincipal } from "../../../themes/TemaPrincipal";
import { GetAnime } from "../../services/animeAPI";
import { useEffect } from "react";
import { useState } from "react";
import { BotaoClose } from "../../scrtipt/AbrirMenu";


const ApiKitsu = 'https://kitsu.io/api/edge'




export const Home = () => {
    
  const [text, setText] = useState()
  const [abrirMenu, setAbrirmenu] = useState(false)

  
    
  

    useEffect(() => {
      fetch(`${ApiKitsu}/anime?filter[categories]=adventure`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        }, []);
  
    return (
    <ContentDiv>
    {abrirMenu ? (
        <SidebarDiv>
            <BotaoClose handleClick={()=>{}}>x</BotaoClose>
            <Sanduichediv> 
                <Sanduiche />
                <Sanduiche />
                <Sanduiche />
            </Sanduichediv>
        <Itens>Algum Tema</Itens>

        </SidebarDiv>):(
          <SidebarDivClose>
            <Sanduichediv> 
                <Sanduiche onClick={()=>{}}/>
                <Sanduiche onClick={()=>{}}/>
                <Sanduiche onClick={()=>{}}/>
            </Sanduichediv>
          </SidebarDivClose>
    )}

      <HeaderDiv>
        <DivLogo>
          <LogoImg src={Logo} />
          <SearchBar placeholder="Buscar"></SearchBar>
          
        </DivLogo>
        <Title>
          O Maior Catálogo de
          <br />
          Anime do Mundo
        </Title>
      </HeaderDiv>

      <MainDiv>
        <SubtitleLaranja>Animes Mais Populares</SubtitleLaranja>

        <DivCardImg>
          <CardImg src={Card} />
          <CardImg src={Card} />
          <CardImg src={Card} />
          <CardImg src={Card} />
          <CardImg src={Card} />
        </DivCardImg>

        <CarrosselImg >

          <Barraverde/>
          <Descricao>
          <h1>NARUTO:  Incrível. Personagens simpáticos, uma história com coração e muita animação. A música também é fantástica.</h1>

          </Descricao>

        </CarrosselImg>
        <CheckboxAnime type="radio"/>
        <CheckboxAnime type="radio"/>
        <CheckboxAnime type="radio"/>


        <SubtitleLaranja>Animes Mais Bem Classificados</SubtitleLaranja>
        <DivCardImg>
          <CardImg src={Card} />
          <CardImg src={Card} />
          <CardImg src={Card} />
          <CardImg src={Card} />
          <CardImg src={Card} />
        </DivCardImg>
      </MainDiv>

      <FooterDiv>
        <Gato src={Yuzu} />
        <SubtextVerde>
          Ainda está procurando algo pra assistir? <br/>Confira o nosso acervo
          completo
        </SubtextVerde>
        <Botaosemfundo>Ver tudo</Botaosemfundo>
      </FooterDiv>
        <Divrodape>
            <Rodape>© 2023 FPR Animes - Todos os direitos reservados. </Rodape>
            <Logopqn src={Logopq} />
        </Divrodape>
    </ContentDiv>
  );
};
