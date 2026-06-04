import React, { useState } from 'react'
import { Box, Container, Typography, Card, Avatar, IconButton, Rating } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const testimonials = [
  {
    name: 'Mohamed Benali',
    role: 'Directeur Technique',
    company: 'Cosider Construction',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    text: 'Les équipements Chahir ont transformé notre chantier. La qualité de fabrication et la réactivité du service après-vente sont remarquables. Nos délais de livraison ont été réduits de 30% grâce à leur matériel.',
    country: 'Algérie',
  },
  {
    name: 'Karim Mansouri',
    role: 'Chef de Projet',
    company: 'Groupe CGEA',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    text: 'Partenariat solide depuis 4 ans. La formation technique fournie par Chahir est excellente, nos opérateurs sont autonomes rapidement. Je recommande vivement leurs systèmes de coffrage.',
    country: 'Tunisie',
  },
  {
    name: 'Youssef El Amrani',
    role: 'Responsable Équipements',
    company: 'Bouygues Maroc',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
    text: 'La certification ISO et la conformité CE de leurs produits nous ont permis de répondre aux exigences de nos clients européens. Un partenaire de confiance pour nos projets d\'infrastructure.',
    country: 'Maroc',
  },
  {
    name: 'Amira Hadj Salem',
    role: 'Directrice Opérations',
    company: 'ETRHB Group',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    text: 'Le support 24/7 est un vrai atout. Lors d\'une panne critique sur chantier, l\'équipe Chahir a résolu le problème en moins de 3 heures. Impressionnant et professionnel.',
    country: 'Algérie',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #0A1628 0%, #060D1A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large quote decoration */}
      <Box
        sx={{
          position: 'absolute', top: '10%', left: '5%',
          opacity: 0.04, pointerEvents: 'none',
          fontSize: '20rem', lineHeight: 1, color: '#1976D2',
          fontFamily: 'serif',
        }}
      >
        "
      </Box>

      <Container maxWidth="xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
              — Témoignages
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em' }}>
              Ce que Disent nos{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #42A5F5, #1976D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Clients
              </Box>
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 900, mx: 'auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                sx={{
                  p: { xs: 4, md: 6 }, borderRadius: '24px',
                  background: 'rgba(17,34,64,0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                {/* Quote icon */}
                <Box
                  sx={{
                    position: 'absolute', top: -24, left: 40,
                    width: 48, height: 48, borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1565C0, #1976D2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(21,101,192,0.4)',
                  }}
                >
                  <FormatQuoteIcon sx={{ color: '#fff', fontSize: 24 }} />
                </Box>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.8)', fontSize: { xs: '1.05rem', md: '1.2rem' },
                    lineHeight: 1.8, fontStyle: 'italic', mb: 4, mt: 1,
                  }}
                >
                  "{testimonials[current].text}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={testimonials[current].avatar}
                      sx={{
                        width: 56, height: 56,
                        border: '2px solid rgba(21,101,192,0.5)',
                        background: 'linear-gradient(135deg, #1565C0, #42A5F5)',
                      }}
                    >
                      {testimonials[current].name[0]}
                    </Avatar>
                    <Box>
                      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
                        {testimonials[current].name}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                        {testimonials[current].role} — {testimonials[current].company}
                      </Typography>
                      <Typography sx={{ color: '#42A5F5', fontSize: '0.78rem', fontWeight: 500 }}>
                        {testimonials[current].country}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonials[current].rating} readOnly sx={{ color: '#1976D2' }} />
                </Box>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 4 }}>
            <IconButton
              onClick={prev}
              sx={{
                border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)',
                '&:hover': { border: '1px solid #1976D2', color: '#42A5F5', background: 'rgba(21,101,192,0.1)' },
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <Box sx={{ display: 'flex', gap: 1 }}>
              {testimonials.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrent(i)}
                  sx={{
                    height: 4, borderRadius: 2, cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: i === current ? '#1976D2' : 'rgba(255,255,255,0.2)',
                    width: i === current ? 28 : 10,
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={next}
              sx={{
                border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)',
                '&:hover': { border: '1px solid #1976D2', color: '#42A5F5', background: 'rgba(21,101,192,0.1)' },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
