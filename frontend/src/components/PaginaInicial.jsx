import React from "react";
import { ButtonCadastro, Cards, ConatinerPrincipal, ContainerMaior, ContainerQuemSomos, ContainerTexto1, ContainerTexto2, ContainerTextos, Contanier1, H1, H2, Icons1Img, Icons2Img, Img, ImgCard, Link, SectionCursos1, SectionCursos2, SubTituloCurso, TextoQuemSomos, TituloCurso, TituloQuemSomos } from "../style/PaginaInicial.js";
import ImgColaborador from '../image/Colaboradores.png'
import IconMaquina from '../image/iconMaquina.png'
import IconFerramentas from '../image/iconFerramentas.png'
import IconCaixa from '../image/iconCaixa.png'
import IconCaixaPapel from '../image/iconCaixaPapel.png'
import IconPlanilha from '../image/iconPlanilha.png'
import IconCertificado from '../image/iconCertificado.png'
import Card1 from '../image/card1.png'
import Card2 from '../image/card2.png'
import Card3 from '../image/card3.png'


const PaginaInicial = () => {



    return (
        <>
            <ConatinerPrincipal>
                <Contanier1>
                    <H1>Treino Way</H1>
                    <H2>Sua melhor experiência</H2>
                    <ButtonCadastro>CADASTRAR</ButtonCadastro>
                </Contanier1>
                <Img src={ImgColaborador} />
            </ConatinerPrincipal>
            <TituloCurso>Qual curso você gostaría de conhecer?</TituloCurso>
            <SubTituloCurso>Click no curso desejado e conheça mais.</SubTituloCurso>
            <SectionCursos1>
                <Link href="https://www.youtube.com/watch?v=4W6T0ob3cqo&list=PL5_OTU1_MgWt8Ut_oCecZ98FFYapfSxs0"><Icons1Img src={IconMaquina} /></Link>
                
                <Link href="https://www.youtube.com/watch?v=4W6T0ob3cqo&list=PL5_OTU1_MgWt8Ut_oCecZ98FFYapfSxs0"><Icons1Img src={IconFerramentas} /></Link>

                <Link href="https://www.youtube.com/watch?v=4W6T0ob3cqo&list=PL5_OTU1_MgWt8Ut_oCecZ98FFYapfSxs0"><Icons1Img src={IconCaixa} /></Link>
            </SectionCursos1>
            <SectionCursos2>
                <Icons2Img src={IconCaixaPapel} />
                <Icons2Img src={IconPlanilha} />
                <Icons2Img src={IconCertificado} />
            </SectionCursos2>
            <ContainerQuemSomos>
                <TituloQuemSomos>QUEM SOMOS?</TituloQuemSomos>
                <ContainerTextos>
                    <ContainerTexto1>
                        <TextoQuemSomos>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est ad dolorem odio soluta dolores. Voluptas, facere eaque excepturi eos,
                            quis reprehenderit nemo, esse mollitia sapiente alias quae nesciunt nobis recusandae!</TextoQuemSomos>
                        <TextoQuemSomos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad dolorem odio soluta dolores. Voluptas, facere eaque excepturi eos, quis reprehenderit nemo, esse mollitia sapiente alias quae nesciunt nobis recusandae!</TextoQuemSomos>
                        <TextoQuemSomos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad dolorem odio soluta dolores. Voluptas, facere eaque excepturi eos, quis reprehenderit nemo, esse mollitia sapiente alias quae nesciunt nobis recusandae!</TextoQuemSomos>
                    </ContainerTexto1>
                    <ContainerTexto2>
                        <TextoQuemSomos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad dolorem odio soluta dolores. Voluptas, facere eaque excepturi eos, quis reprehenderit nemo, esse mollitia sapiente alias quae nesciunt nobis recusandae!</TextoQuemSomos>
                        <TextoQuemSomos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad dolorem odio soluta dolores. Voluptas, facere eaque excepturi eos, quis reprehenderit nemo, esse mollitia sapiente alias quae nesciunt nobis recusandae!</TextoQuemSomos>
                        <TextoQuemSomos>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad dolorem odio soluta dolores. Voluptas, facere eaque excepturi eos, quis reprehenderit nemo, esse mollitia sapiente alias quae nesciunt nobis recusandae!</TextoQuemSomos>
                    </ContainerTexto2>
                </ContainerTextos>
            </ContainerQuemSomos>
            <div className="a">
                <ContainerMaior>
                <Cards>
                    <ImgCard src={Card1} />
                    <ImgCard src={Card2} />
                    <ImgCard src={Card3} />
                </Cards>
                </ContainerMaior>
                {/* <ContainerMenor>
                </ContainerMenor> */}

            </div>
           
           

        </>
    )
}

export default PaginaInicial;