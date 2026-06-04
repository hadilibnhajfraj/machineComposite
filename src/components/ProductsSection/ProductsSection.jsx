import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Card, Chip, Button, Tab, Tabs } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CategoryIcon from '@mui/icons-material/Category'

const categories = ['Tous', 'Coffrage', 'Levage', 'Outillage', 'Automatisation']

const products = [
  {
    id: 1, category: 'Coffrage',
    name: 'Système de Coffrage Modulaire',
    description: 'Coffrage haute résistance, réutilisable jusqu\'à 500 fois. Adapté à toutes configurations.',
    tags: ['ISO 9001', 'CE Certifié'],
    image: '/images/product-1.jpg',
    accent: '#1565C0',
  },
  {
    id: 2, category: 'Levage',
    name: 'Grue à Tour Télescopique',
    description: 'Capacité de levage jusqu\'à 12 tonnes. Rotation 360° avec système anti-oscillation.',
    tags: ['NF EN 14439', 'Grade A'],
    image: '/images/product-2.jpg',
    accent: '#0288D1',
  },
  {
    id: 3, category: 'Outillage',
    name: 'Station de Compactage Pro',
    description: 'Compactage uniforme garanti. Moteur diesel Tier 4 Final, faible émission.',
    tags: ['EPA Tier 4', 'CE'],
    image: '/images/product-3.jpg',
    accent: '#0097A7',
  },
  {
    id: 4, category: 'Automatisation',
    name: 'Ligne de Production Automatisée',
    description: 'Système clé en main avec contrôle PLC. Productivité augmentée de 300%.',
    tags: ['Industry 4.0', 'Smart'],
    image: '/images/product-4.jpg',
    accent: '#1565C0',
  },
  {
    id: 5, category: 'Coffrage',
    name: 'Coffrage Circulaire Ajustable',
    description: 'Pour structures courbes et cylindriques. Diamètre ajustable de 30cm à 5m.',
    tags: ['Polyvalent', 'CE'],
    image: '/images/product-5.jpg',
    accent: '#0288D1',
  },
  {
    id: 6, category: 'Levage',
    name: 'Chariot Élévateur Électrique',
    description: 'Zéro émission, silencieux. Parfait pour espaces confinés et intérieurs.',
    tags: ['Zero Emission', 'Indoor'],
    image: '/images/product-6.jpg',
    accent: '#0097A7',
  },
]

function ProductCard({ product, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      layout
    >
      <Card
        sx={{
          height: '100%',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: `0 24px 60px rgba(0,0,0,0.4)`,
          },
          '&:hover .product-image': {
            transform: 'scale(1.05)',
          },
        }}
      >
        {/* Image area */}
        <Box
          sx={{
            height: 200, overflow: 'hidden', position: 'relative',
            background: `linear-gradient(135deg, ${product.accent}20, ${product.accent}05)`,
          }}
        >
          <Box
            className="product-image"
            sx={{
              width: '100%', height: '100%',
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.6s ease',
            }}
          />
          {/* Gradient overlay */}
          <Box
            sx={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to top, rgba(6,13,26,0.8) 0%, transparent 60%)`,
            }}
          />
          {/* Category badge */}
          <Chip
            label={product.category}
            size="small"
            sx={{
              position: 'absolute', top: 12, left: 12,
              background: `${product.accent}CC`,
              color: '#fff', fontWeight: 600, fontSize: '0.72rem',
              backdropFilter: 'blur(8px)',
            }}
          />
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={700} mb={1} sx={{ color: '#fff', fontSize: '1rem' }}>
            {product.name}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', lineHeight: 1.6, mb: 2 }}>
            {product.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap', mb: 2.5 }}>
            {product.tags.map((tag) => (
              <Chip
                key={tag} label={tag} size="small"
                sx={{
                  fontSize: '0.7rem', fontWeight: 600,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              />
            ))}
          </Box>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: product.accent, fontWeight: 600, fontSize: '0.85rem', p: 0,
              '&:hover': { background: 'transparent', opacity: 0.8 },
            }}
          >
            Voir les détails
          </Button>
        </Box>
      </Card>
    </motion.div>
  )
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const activeCategory = categories[activeTab]
  const filtered = activeCategory === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: '#0A1628',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              sx={{
                color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem',
                letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2,
              }}
            >
              — Notre Catalogue
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em',
              }}
            >
              Équipements{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #42A5F5, #1976D2)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Industriels
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 540, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Une gamme complète d'équipements certifiés pour répondre à tous vos besoins de construction.
            </Typography>
          </Box>
        </motion.div>

        {/* Filter Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={(_, val) => setActiveTab(val)}
            sx={{
              '& .MuiTab-root': {
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 600, fontSize: '0.9rem',
                borderRadius: '8px', mx: 0.5,
                transition: 'all 0.2s',
                '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.05)' },
              },
              '& .Mui-selected': { color: '#42A5F5 !important' },
              '& .MuiTabs-indicator': {
                background: 'linear-gradient(90deg, #1565C0, #42A5F5)',
                height: 3, borderRadius: 2,
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} />
            ))}
          </Tabs>
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3}>
              {filtered.map((product, index) => (
                <Grid item xs={12} sm={6} lg={4} key={product.id}>
                  <ProductCard product={product} index={index} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        <Box sx={{ textAlign: 'center', mt: 7 }}>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<CategoryIcon />}
            sx={{ px: 5 }}
          >
            Voir tout le catalogue
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
