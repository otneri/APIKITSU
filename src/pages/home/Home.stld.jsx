import styled from "styled-components";
import { temaPrincipal } from "../../../themes/TemaPrincipal";
import Banner from "../../assets/banner.png"
import Carrosselnaruto from "../../assets/naruto.png";


export const ContentDiv = styled.div `
    
    
`
export const HeaderDiv = styled.div `
    background-image: url(${Banner});
    padding: .5em;
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    padding:  0em 3em;
`

export const MainDiv = styled.div `
    padding: 0em .5em;
    margin: 2em 0em;
    padding:  0em 3em;

`

export const FooterDiv = styled.div `
    height: 12em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #262626;
    margin-top: 6em;
    padding:  0em 2em;
`

//HEADER

export const Title = styled.h1 `
    color: white;
    font-size: 5em;
    text-align: center;
    @media (max-width: 858px){
        font-size: 3em;
    }
    
`

export const TitleLaranja = styled.h1 `
    color: ${temaPrincipal.text.orange};
    font-size: 5em;
    text-align: center;
    @media (max-width: 858px){
        font-size: 3em;
    }
    
`
export const TitleVerde = styled.h1 `
    color: ${temaPrincipal.text.green};
    font-size: 5em;
    text-align: center;
    @media (max-width: 858px){
        font-size: 3em;
    }
    
`
export const LogoImg = styled.img`
    width: 8em;
`

export const SearchBar = styled.input`
    background-color: transparent;
    padding: .3em;
    border-radius: .6em;
    border-color: white;
    color: white;
`
export const Searchbutton = styled.button`
    background-color: transparent;
`
export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3em;
`

//HEADER

//Main

export const SubtitleVerde = styled.h2`
    margin: 2em .5em 1em .5em;
    color: #34AC40;
    font-size: 2em;

`
export const SubtitleLaranja = styled.h2`
    margin: 2em .5em 1em .5em;
    color:${temaPrincipal.text.orange};
    font-size: 2em;

`

export const CardImg = styled.img`
    width: 13em;
    cursor: pointer;
    
`
export const DivCardImg = styled.div`
    max-width: 78em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-shrink: 1em;
    text-align: center;
    
    
`

//carrossel
export const CarrosselImg = styled.div`
    background-image: url(${Carrosselnaruto});
    margin: 5em 1em 2em 1em;
    display: grid;
    row-gap: 7.5em;
    width: 72em;
    height: 12em;
    @media (max-width: 1200px){
        max-width:30em;
    }
    
    align-items: center;
`

export const Barraverde = styled.div`
    background-color: ${temaPrincipal.text.green};
    height: 1em;
`

export const Descricao = styled.div`
    background-color: #00000097;
    height: 3em;
    padding: .3em 2em;
    color: white;
;
`

export const CheckboxAnime = styled.input`
    text-align: center;
`

//carrossel
//Main

//Footer
export const SubtextVerde = styled.h2`
    font-weight: bold;
    text-align: center;
    color: #34AC40;
    font-size: 1em;

`
export const SubtextLaranja = styled.h2`
    font-weight: bold;
    text-align: center;
    color: ${temaPrincipal.text.orange};
    font-size: 1em;

`
export const Rodape = styled.h3`
    font-size: medium;
    font-weight: lighter;
    color: #FFFFFF;
`
export const RodapeVerde = styled.h3`
    font-size: medium;
    font-weight: lighter;
    color: ${temaPrincipal.text.green};
`
export const Divrodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #262626;
    padding:  2em 3em 2em 3em;
    
`

export const Logopqn = styled.img`

`
export const Gato = styled.img`
    margin-top: -3em;
`

export const Botaosemfundo = styled.button`
    text-shadow: none;
    padding: 1em;
    text-transform: uppercase;
    border-color: ${temaPrincipal.text.orange};
    color: ${temaPrincipal.text.orange};
    background-color: transparent;
    width: 10em;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        background-color: ${temaPrincipal.text.orange};
        color: black;

    }
    
    
`
//Footer

//Sidebar

export const SidebarDiv = styled.aside `
    background-color: ${temaPrincipal.text.orange};
    width: 15em;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: .5s;
    padding-top: 1em;
    height: 100%;
`
export const SidebarDivClose = styled.aside `
    background-color: ${temaPrincipal.text.orange};
    width: 3em;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: .5s;
    padding-top: 1em;
    height: 100%;
`
export const BtnFechar = styled.a`
    position: absolute;
    top: 0em;
    right: .4em;
    font-size: 2em;
    cursor: pointer;
    color: white;
    margin-left: 2em;
`
export const Sanduiche = styled.div`
    width: 32px;
    height: 2px;
    margin: 8px;
    background-color: white;
    
`

export const Itens = styled.a`
    font-size: medium;
    color: white;
    height: 2px;
    margin: 8px;
    padding: .5em 0em;
    cursor: pointer;
    &:hover {
        color: #ffffff87;
    }
    
    
`
export const Sanduichediv = styled.div`
    cursor: pointer;
`
//Sidebar