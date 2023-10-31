function LinkVerMais({ url, value, row }) {
    return <a href={`${url}/${row.id}`} target="_blank" style={{ color: 'white'}}>{value}</a>;
}

export const columnsProduct = [
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        width: 50,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 350,
    },
    {
        field: 'weight',
        headerName: 'Peso (g)',
        width: 100,
    },
    {
        field: 'height',
        headerName: 'Altura (cm)',
        width: 100,
    },
    {
        field: 'width',
        headerName: 'Largura (cm)',
        width: 100,
    },
    {
        field: 'brand',
        headerName: 'Marca',
        width: 100,
    },
    {
        field: 'price',
        headerName: 'Preço',
        width: 100,
    },
    {
        field: 'stock',
        headerName: 'Estoque',
        width: 100,
    },
    {
        field: 'category',
        headerName: 'Categoria',
        width: 120,
    },
    {
        field: 'pathImage',
        headerName: 'Caminho da Imagem',
        width: 350,
    },
    {
        field: 'see',
        headerName: 'Ver produto',
        width: 150,
        renderCell: (params) => (
            <LinkVerMais value="Ver Mais" url={'produto'}row={params.row} />
        ),
    },
]

export const columnsCustomers = [
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        width: 50,
    },
    {
        field: 'identify_document',
        headerName: 'CPF ou CNPJ',
        width: 200,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 300,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 300,
    },
    {
        field: 'phone',
        headerName: 'Telefone',
        width: 150,
    },
    {
        field: 'birthdate',
        headerName: 'Nascimento',
        width: 150,
    },
    {
        field: 'gender',
        headerName: 'Genero',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
    },
    {
        field: 'see',
        headerName: 'Ver mais',
        width: 150,
        renderCell: (params) => (
            <LinkVerMais value="Ver Mais" url={'cliente'}row={params.row} />
        ),
    },
]

export const columnsSales = [
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        width: 50,
    },
    {
        field: 'customer_id',
        headerName: 'Id do Cliente',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 80,
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 100,
    },
    {
        field: 'emission_date',
        headerName: 'Data de emissão',
        width: 150,
    },
    {
        field: 'approval_date',
        headerName: 'Data de Aprovação',
        width: 150,
    },
    {
        field: 'transport_date',
        headerName: 'Data de Transporte',
        width: 150,
    },
    {
        field: 'delivery_date',
        headerName: 'Data de Entrega',
        width: 150,
    },
    {
        field: 'delivery_type',
        headerName: 'Tipo de Entrega',
        width: 150,
    },
    {
        field: 'delivery_price',
        headerName: 'Frete',
        width: 150,
    },
    {
        field: 'obs',
        headerName: 'Observação',
        width: 150,
    },
    {
        field: 'payment_type',
        headerName: 'Forma de Pagamento',
        width: 150,
    },
    {
        field: 'payment_date',
        headerName: 'Data de Pagamento',
        width: 150,
    },
    {
        field: 'coupon_id',
        headerName: 'ID do Cupom',
        width: 100,
    },
    {
        field: 'see',
        headerName: 'Ver mais',
        width: 150,
        renderCell: (params) => (
            <LinkVerMais value="Ver Mais" url={'pedido'}row={params.row} />
        ),
    },
]

export const columnsCarts = [
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        width: 50,
    },
    {
        field: 'customer_id',
        headerName: 'Id do Cliente',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 80,
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 100,
    },
    {
        field: 'coupon_id',
        headerName: 'ID do Cupom',
        width: 150,
    },
    {
        field: 'created_at',
        headerName: 'Criado',
        width: 200,
    },
    {
        field: 'updated_at',
        headerName: 'Ultima Alteração',
        width: 200,
    },
    {
        field: 'see',
        headerName: 'Ver mais',
        width: 150,
        renderCell: (params) => (
            <LinkVerMais value="Ver Mais" url={'pedido'}row={params.row} />
        ),
    },
]