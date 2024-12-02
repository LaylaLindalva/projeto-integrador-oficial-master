import { ButtonVoltar, Divtitulo, TituloRelatorio, DivTreinamento, Subtitulo } from "../style/Body.js";

const Body = () => {
    return (
        <>
            <ButtonVoltar href="/">Voltar</ButtonVoltar>
            <Divtitulo>
                <TituloRelatorio>Relatorio de Busca</TituloRelatorio>
            </Divtitulo>
            <DivTreinamento>
                <Subtitulo>Treinamentos em Geral</Subtitulo>
            </DivTreinamento>
        </>
    )
}

export default Body;