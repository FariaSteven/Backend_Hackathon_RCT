interface Formulario {
    formulario_id: string;
    data: string;
    folha: string;    
    rota: number;
    uf: string;
    tipo: 'Flexível' | 'Rígido';
    rodovia: string;

    // form 1 - pavimento
    ondicoes_pavimento: 'perfeito' | 'desgastado' | 'trincas em malha / remendos' | 'afundamentos / ondulações / buracos' | 'destruido';
    velocidade_pavimento: 'não obriga a redução de velocidade' | 'obriga a redução de velocidade' | 'baixíssima velocidade';
    ponto_critico: string;
    ponto_critico_foto: string;

    // form 2 - sinalização
    faixa_central: 'visivel' | 'desgastada' | 'inexistente';
    faixa_lateral: 'visivel' | 'desgastada' | 'inexistente';
    defensas: 'presentes, quando necessárias, em todo o percurso' | 'presentes, quando necessárias, em parte percurso' | 'ausentes, mas necessárias, em todo percurso' | ' não necessárias';
    placa_velocidade: boolean;
    placa_indicacao: boolean;
    placa_intersecao: boolean;
    visibilidade_placas: 'inexistencia de mato cobrindo as placas' | 'algum mato cobrindo as placas' | 'mato cobrindo totalmente as placas' | 'inexistencia de placas';
    legibilidade_placas: 'legíveis' | 'desgastadas' | 'ilegiveis';

    // form 3 - geometria
    tipo_rodovia: 'pista dupla com canteiro central' | 'pista dupla sem canteiro central' | 'pista dupla com faixa centra' | 'pista simples de mão única' | 'pista simples de mão dupla'
    perfil_rodovia: 'plano' | 'ondulado ou Montanhoso'
    possui_faixa_adicional_subida: boolean;
    possui_ponte_viaduto: boolean;
    possui_curva_perigosa: boolean;
    condicao_curva_perigosa: 'com placas e com defensas' | 'com placas e sem defensas'  | 'sem placas e com defensas' | 'sem placas e sem defensas';
    pavimento_acostamento: 'pavimentado perfeito' | 'não pavimentado perfeito'  | 'más condições' | 'destruido';
    com_acostamento: boolean;

    // form 4 - infraestrutura
    posto_abastecimento: boolean;
    borracharia: boolean;
    oficina: boolean;
    restaurante: boolean;
    controlador_velocidade: boolean;
}

export default Formulario;