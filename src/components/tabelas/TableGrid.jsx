import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { columnsProduct, columnsCustomers, columnsSales, columnsCarts } from './Variables'

function TableGrid({ data, category }) {

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    let columns, rows = [];

    switch (category) {
        case 'products':
            columns = columnsProduct

            rows = data.map((product) => ({
                id: product.id,
                name: product.name,
                weight: product.weight,
                height: product.height,
                width: product.width,
                brand: product.brand,
                price: product.price,
                stock: product.stock,
                category: product.category_.name,
                pathImage: product.images[0].image_path,
                see: 'Ver Mais',
            }));
            break;

        case 'customers':
            columns = columnsCustomers

            rows = data.map((customer) => ({
                id: customer.id,
                identify_document: customer.identify_document,
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                birthdate: customer.birthdate,
                image_path: customer.image_path,
                gender: customer.gender,
                status: customer.status,
                see: 'Ver Mais',
            }));
            break;

        case 'sales':
            columns = columnsSales

            rows = data.map((sale) => ({
                id: sale.id,
                customer_id: sale.customer_id,
                status: sale.status,
                total: sale.total,
                emission_date: sale.emission_date,
                approval_date: sale.approval_date,
                transport_date: sale.transport_date,
                delivery_date: sale.delivery_date,
                delivery_type: sale.delivery_type,
                delivery_price: sale.delivery_price,
                obs: sale.obs,
                payment_type: sale.payment_type,
                payment_date: sale.payment_date,
                coupon_id: sale.coupon_id,
                see: 'Ver Mais',
            }));
            break;

        case 'carts':
            columns = columnsCarts

            rows = data.map((cart) => ({
                id: cart.id,
                customer_id: cart.customer_id,
                status: cart.status,
                total: cart.total,
                coupon_id: cart.coupon_id,
                created_at: cart.created_at,
                updated_at: cart.updated_at,
                see: 'Ver Mais',
            }));
            break;
    }


    return (
        <ThemeProvider theme={theme} >
            <DataGrid
                sx={{ width: '100px', maxHeight: '700px' }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10, 15, 20]}
            />
        </ThemeProvider>
    );
}

export default TableGrid;