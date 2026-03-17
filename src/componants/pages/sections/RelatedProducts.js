import React from 'react';
import {
    Box,
    Typography,
    CardContent,
    CardMedia,
    Button,
    Rating,
    Stack,
    Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const RelatedProducts = () => {

    const products1 = [
        {
            title: 'A2 Desi Cow Ghee',
            subtitle: '5L Dolchi',
            description: 'Same Richness | Timeless Packaging',
            price: '₹10,550',
            originalPrice: '₹10,999',
            bestPrice: '₹8,788',
            image: 'https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596',
        },
        {
            title: 'Wood Pressed Groundnut Oil',
            subtitle: '1L Bottle',
            description: 'Pure & Cold Pressed',
            price: '₹420',
            originalPrice: '₹450',
            bestPrice: '₹399',
            image: 'https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596',
        },
        {
            title: 'Forest Raw Honey',
            subtitle: '500g Glass Jar',
            description: 'No Added Sugar | Wild Harvest',
            price: '₹399',
            originalPrice: '₹450',
            bestPrice: '₹349',
            image: 'https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596',
        },
        {
            title: 'Bilona Ghee Combo',
            subtitle: 'Cow & Buffalo Ghee',
            description: 'Wholesome & Healthy',
            price: '₹1,890',
            originalPrice: '₹2,099',
            bestPrice: '₹1,699',
            image: 'https://www.anveshan.farm/cdn/shop/files/anveshan-desighee-5ltr-dolchi.jpg?v=1749579596',
        }
    ];
   

    return (

        <>

            <Box sx={{ px: 4, maxWidth: 1200, mx: 'auto',display: 'flex', flexDirection: 'column', textAlign: 'center', }}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: '22px',
                        fontFamily: 'var(--font-heading-family)',
                        color: '#444444',
                        fontStyle: 'var(--font-heading-style)',
                        letterSpacing: 'calc(var(--font-heading-scale) * 0.06rem)',
                        lineHeight: 'calc(1 + 0.3 / max(1, var(--font-heading-scale)))',
                        wordBreak: 'break-word',
                        pb: 1.5,
                        textAlign:'left',
                    }}
                >
                    You may also like
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'nowrap',
                        gap: 3,
                        overflowX: 'auto',
                        scrollbarWidth: 'none'
                    }}
                >
                    {products1.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                borderRadius: '10px  10px 80px 10px ',
                                p: 2,
                                position: 'relative',
                                overflow: 'visible',
                                border: '1px solid #d1d1d1',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minWidth: 240,
                                backgroundColor: '#fff',
                            }}
                        >
                            {/* Labels */}
                            <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                                <Chip
                                    label="New Launch"
                                    sx={{
                                        backgroundColor: '#1d639f',
                                        color: 'white',
                                        fontWeight: 600,
                                        borderRadius: '0 0 10px 0',
                                        fontSize: 12,
                                        fontFamily: 'var(--font-heading-family)'
                                    }}
                                />
                            </Box>
                            <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                                <Chip
                                    label="4% Off"
                                    sx={{
                                        backgroundColor: '#00584b',
                                        color: 'white',
                                        fontWeight: 600,
                                        borderRadius: '0 0 0 10px',
                                        fontSize: 12,
                                        fontFamily: 'var(--font-heading-family)'
                                    }}
                                />
                            </Box>

                            {/* Image */}
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    objectFit: 'contain',
                                    height: 290,
                                }}
                            />

                            {/* Content */}
                            <CardContent sx={{ px: 0 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'var(--font-heading-family)' }}>
                                    {item.subtitle}
                                </Typography>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5, fontFamily: 'var(--font-heading-family)' }}>
                                    {item.title}
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 1, fontFamily: 'var(--font-heading-family)' }}>
                                    {item.description}
                                </Typography>

                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                                    <Rating value={4.5} precision={0.5} readOnly size="small" />
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'var(--font-heading-family)' }}>
                                        1088 reviews
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: 'var(--font-heading-family)' }}>
                                        {item.price}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ textDecoration: 'line-through', color: 'gray', fontFamily: 'var(--font-heading-family)' }}
                                    >
                                        {item.originalPrice}
                                    </Typography>
                                </Stack>

                                <Typography variant="body2" sx={{ color: '#00715D', fontWeight: 600, fontFamily: 'var(--font-heading-family)' }}>
                                    Best Price {item.bestPrice}{' '}
                                    <Typography component="span" color="text.secondary" sx={{ fontFamily: 'var(--font-heading-family)' }}>
                                        with coupon
                                    </Typography>
                                </Typography>
                            </CardContent>

                            {/* Actions */}
                            <Stack
                                spacing={1}
                                mt={2}
                                direction="column"
                                alignItems="center"
                                sx={{ width: 'fit-content', mx: 'auto' }}
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<ShoppingCartIcon fontSize="small" />}
                                    size="small"
                                    sx={{
                                        px: 1.5,
                                        py: 0.3,
                                        minWidth: '150px',
                                        backgroundColor: '#00715D',
                                        color: '#fff',
                                        borderRadius: 50,
                                        fontFamily: 'var(--font-heading-family)',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.72rem',
                                        '&:hover': { backgroundColor: '#005f4f' },
                                    }}
                                >
                                    Add to cart
                                </Button>

                                <Button
                                    variant="outlined"
                                    startIcon={<FlashOnIcon fontSize="small" />}
                                    size="small"
                                    sx={{
                                        px: 1.5,
                                        py: 0.3,
                                        minWidth: '150px',
                                        borderColor: '#00715D',
                                        color: '#00715D',
                                        fontFamily: 'var(--font-heading-family)',
                                        borderRadius: 50,
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.72rem',
                                        '&:hover': {
                                            borderColor: '#005f4f',
                                            backgroundColor: '#f4f4f4',
                                        },
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </Stack>
                        </Box>
                    ))}

                </Box>
            </Box>
        </>

    );
};

export default RelatedProducts;
